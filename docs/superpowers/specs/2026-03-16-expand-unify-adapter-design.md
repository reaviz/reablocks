# Expand Unify CSS Adapter

**Date:** 2026-03-16
**Status:** Approved
**Branch:** unify-migration

## Problem

The Unify CSS adapter (`src/adapters/unify.css`) maps Unify design system tokens to reablocks CSS custom properties, enabling components to automatically pick up Unify colors, border radius, and spacing. However, it does not map stroke/border color tokens. Additionally, 2 component theme files contain hardcoded hex colors in gradient strings that bypass the CSS variable system entirely.

This means when a user loads their Unify tokens and imports the adapter, most things work but gradient effects on Input and Select components use fixed colors that don't respond to Unify tokens, and Unify's stroke token domain is not bridged.

## Approach

Expand the CSS adapter to map stroke tokens from Unify. Fix hardcoded gradient colors in component themes by extracting them to CSS custom properties. No new JS theme objects — everything stays at the CSS variable layer.

The key insight: Tailwind CSS 4 already resolves utility classes through CSS custom properties (`rounded-md` uses `var(--radius-md)`, `text-sm` uses `var(--text-sm)`, `shadow-md` uses `var(--shadow-md)`). The adapter already maps these. The remaining gaps are stroke tokens and hardcoded gradients.

Component-level Unify tokens (e.g., `--buttons-colors-core-icon-primary-background-resting`) are intentionally NOT mapped. They are too granular and tightly coupled to the Figma plugin's naming. Users who need that level of control can use `extendTheme()` as documented in USAGE.md.

### What the adapter already covers

- Semantic colors (primary, secondary, success, error, warning, info)
- Panel/surface colors
- Text colors
- Named colors (black-pearl, athens-gray, mystic, vulcan, charade, waterloo)
- Full color scales (gray, blue, red, green, orange, yellow, pink, violet, teal)
- Spacing (xs through xl)
- Border radius (sm, md, lg, pill)

### What's NOT mapped (and why)

- **Typography** (`--font-family-*`, `--font-size-*`): The Unify Figma plugin does not currently export typography as CSS custom properties. When it does, the adapter can add mappings. The existing `@theme static` typography vars (`--font-sans`, `--text-sm`, etc.) work and can be overridden by users directly.
- **Shadows**: Unify's `--effects-shadows-*` tokens are color values, not full box-shadow definitions. Mapping them directly to `--shadow-md` (which expects a full box-shadow) would produce invalid CSS. Shadow support can be added when Unify exports complete shadow definitions, or via a `--shadow-color` variable approach in a future iteration.
- **Spacing base multiplier** (`--spacing`): Unify exports absolute spacing values (`--spacing-padding-xs: 8px`), not a base multiplier. Tailwind 4's `--spacing` is a multiplier (`p-4` = `calc(4 * 0.25rem)`). These are different concepts and cannot be directly mapped. The adapter already maps Unify's named spacing tokens correctly.

## Design

### 1. New adapter mappings in `src/adapters/unify.css`

#### Stroke/border tokens

Unify exports a `--stroke-*` token domain for border colors. Add mappings so users who import stroke tokens get them bridged:

```css
/* Stroke/Border Colors */
--stroke-neutral: var(--stroke-neutral-base);
--stroke-brand: var(--stroke-brand-base);
--stroke-focus: var(--stroke-focused-highlight);
--stroke-success: var(--stroke-semantic-success-base);
--stroke-error: var(--stroke-semantic-error-base);
--stroke-warning: var(--stroke-semantic-warning-base);
--stroke-info: var(--stroke-semantic-info-base);
```

Note: No built-in reablocks component currently consumes these `--stroke-*` variables. They are exposed as userland tokens — users can reference them via `border-[var(--stroke-brand)]` or in `extendTheme()` overrides. Existing border colors continue to work through `--primary`, `--panel-accent`, etc.

### 2. Fix hardcoded gradients

Two component theme files have hardcoded hex colors in gradient strings:

- `src/form/Input/InputTheme.ts` (lines 48, 53) — hover and focus glow gradients
- `src/form/Select/SelectInput/SelectInputTheme.ts` (lines 94, 95) — same gradients

The hardcoded colors and their CSS variable equivalents:
- `#105EFF` → `var(--primary)` (blue-500)
- `#93B6FF` → `var(--color-anakiwa)` (lighter blue)
- `#242433` → `var(--color-charade)` (dark surface)
- `#3D3D4D` → `var(--color-gray-600)` (medium dark)
- `#E6E6F0` → `var(--color-mystic)` (light surface)

`src/form/Range/RangeTheme.ts` (line 41) has `rgba(0,0,0,0.20)` in a shadow — this is a standard black transparency, not a design token color. Leave as-is.

#### Gradient solution

Define gradient CSS custom properties in `src/index.css` that reference semantic color vars:

```css
:root, :host {
  /* Input/Select hover and focus glow gradients */
  --input-glow-hover: radial-gradient(
    circle,
    var(--primary) 0%,
    var(--primary) 36%,
    var(--color-charade) 100%
  );
  --input-glow-focus: radial-gradient(
    circle,
    var(--color-anakiwa) 0%,
    var(--primary) 36%,
    var(--color-gray-600) 90%,
    var(--color-charade) 100%
  );

  .theme-light,
  &.theme-light,
  [data-theme='light'],
  &[data-theme='light'] {
    --input-glow-hover: radial-gradient(
      circle,
      var(--primary) 0%,
      var(--primary) 36%,
      var(--color-mystic) 100%
    );
    --input-glow-focus: radial-gradient(
      circle,
      var(--primary) 10%,
      var(--color-anakiwa) 36%,
      var(--color-mystic) 90%
    );
  }
}
```

No `@theme inline` registration needed — component themes use Tailwind's arbitrary value syntax which doesn't require the variable to be a registered theme token.

Component themes change from:
```
hover:after:bg-[radial-gradient(circle,_#105EFF_0%,_#105EFF_36%,_#242433_100%)]
light:hover:after:bg-[radial-gradient(circle,_#105EFF_0%,_#105EFF_36%,_#E6E6F0_100%)]
```
To:
```
hover:after:bg-[image:var(--input-glow-hover)]
```

The `light:` variant is no longer needed in the component theme — it's handled by the CSS custom property's light theme override. This simplifies the theme strings.

When the Unify adapter is active, `--primary`, `--color-charade`, `--color-anakiwa`, `--color-mystic`, and `--color-gray-600` all resolve to Unify-mapped values, so the gradients automatically adapt.

### 3. Update adapter JS API

Update `src/adapters/index.ts`:
- Add stroke token mappings to `unifyTokenMap`
- Sync `unifyTokenMap` with ALL mappings currently in `unify.css` (spacing and border radius mappings are in the CSS but not in the JS map)
- The `createUnifyAdapter()` function and `isUnifyAvailable()` don't need structural changes

### 4. Update documentation

- **USAGE.md**: Add stroke tokens to the mapping table, note gradient variable change
- **MIGRATION.md**: Note the gradient variable change for anyone overriding Input/Select hover styles via custom theme strings that referenced the old hardcoded gradient syntax

## Files changed

| File | Change | Lines |
|------|--------|-------|
| `src/adapters/unify.css` | Add stroke token mappings | +~10 |
| `src/index.css` | Add `--input-glow-hover` and `--input-glow-focus` gradient vars | +~20 |
| `src/form/Input/InputTheme.ts` | Replace hardcoded gradient strings with `var()` references | ~2 lines changed |
| `src/form/Select/SelectInput/SelectInputTheme.ts` | Same gradient replacement | ~2 lines changed |
| `src/adapters/index.ts` | Sync `unifyTokenMap` with all CSS mappings + add stroke entries | +~30 |
| `USAGE.md` | Document stroke tokens, gradient vars | +~15 |
| `MIGRATION.md` | Note gradient variable change | +~10 |

## What this does NOT change

- No new JS theme objects (no `themeUnify`)
- No changes to ThemeProvider
- No changes to component interfaces or props
- No changes to how `extendTheme()` works
- Component-level Unify tokens remain in userland via `extendTheme()`

## Success criteria

1. All existing tests pass (102 unit, 400 visual)
2. No hardcoded hex colors remain in Input/Select component theme gradient strings
3. When Unify tokens are loaded + adapter imported: gradients respond to Unify color values, stroke tokens are available
4. When adapter is NOT imported: everything looks identical to current default theme (gradient vars use the same colors as the previous hardcoded values)
