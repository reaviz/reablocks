# Component-Level Theme Changes on `origin/unify-ds`

## Theme Structure Changes

The `unify-ds` branch makes significant structural changes to theme interfaces across many components. The overarching pattern is a shift from simple string-keyed objects to more granular, deeply nested interfaces that encode design-system-level concepts (states, sub-elements, semantic roles).

### Key Interface Evolution Patterns

1. **Button: Extracted sub-interfaces, added `ghost` variant**
   - Master: Inline object types for `adornment.start`/`end` (plain strings), `variants`, `colors`.
   - Unify-ds: Introduces `ButtonVariantTheme`, `ButtonSizeTheme`, `ButtonColorTheme` as standalone exported interfaces.
   - `adornment.start` and `adornment.end` changed from `string` to `ButtonSizeTheme` (size-dependent spacing).
   - `variants` gains `ghost` alongside `filled`, `outline`, `text`.
   - `colors` drops `default`, `success`, `warning` from the type definition; keeps `primary`, `secondary`, `destructive` (renamed from `error`).

2. **Chip: Completely restructured into badge/tag subtypes**
   - Master: Flat `ChipTheme` with `base`, `adornment`, `variants`, `colors`, `sizes`, `focus`, `deleteButton`, `disabled`.
   - Unify-ds: Wraps everything in `ChipTheme.types.badge` and `ChipTheme.types.tag` via new `ChipTypeTheme` interface.
   - Each subtype has its own `base`, `label?`, `adornment`, `variants`, `colors`, `sizes`.
   - Tag type adds `closeButton` and `disabled` fields (replacing `deleteButton` and `focus`).
   - Color config becomes deeply nested: `ChipColorConfigTheme` has `base?`, `variants.filled.{base, selected?, selectable?, start?, end?}`.
   - The `start`/`end` fields on color variants are new -- they allow per-color icon/adornment styling.
   - Added `subtle` as a third variant alongside `filled`/`outline` (for badges in unify theme).

3. **Tabs: Variant config promoted to per-variant button/selected/disabled**
   - Master: `variant.primary` and `variant.secondary` each only had `divider: string`.
   - Unify-ds: `TabVariantConfigTheme` now holds `divider?`, `button?`, `selected?`, `disabled?`, `indicator?` -- full per-variant styling.
   - Added `outlined` and `text` as new tab variants.
   - The `TabVariantTheme` interface has `[key: string]` indexer for extensibility.

4. **Calendar: Added `divider` to header, `contentContainer` field**
   - `header.divider?: string` is new (optional, for horizontal rule under header).
   - `contentContainer: string` is new (wraps the flex content area).
   - `time.items.item.disabled` is new (disabled state for time picker items).

5. **Notification: Added `icon?` to variants**
   - Each variant (`success`, `error`, `warning`, `info`) now has an optional `icon?: string` field for per-variant icon styling.

6. **Typography: Entirely new interface**
   - Master had `TypographyTheme` as a flat map of `h1`..`h6`, `p`, `blockquote`, `lead`, `large`, `small`, `muted` (all plain strings).
   - Unify-ds introduces a completely different `TypographyTheme` with `base`, `color`, `weight`, and `variant` (each variant has `base` and optional `size` sub-object).
   - Supports variants: `h1`-`h6`, `body`, `label`, `button`, `monospace`.
   - Master's old individual-component approach (`H1.tsx`, `H2.tsx`, etc.) is preserved via the deprecated theme.

### Fields Renamed or Removed

| Component | Master Field | Unify-ds Field |
|-----------|-------------|----------------|
| Button | `colors.error` | `colors.destructive` |
| Button | `adornment.start: string` | `adornment.start: ButtonSizeTheme` |
| Chip | `deleteButton` | `types.tag.closeButton` |
| Chip | `focus` | removed (no equivalent) |
| Chip | Flat structure | Nested `types.{badge,tag}` |
| Typography | `h1`..`muted` strings | `variant.{h1..monospace}.{base, size?}` |

## Dual Theme Pattern

Every theme file on `unify-ds` exports two theme constants:

- `default<Component>Theme` -- the existing reablocks default theme, using standard Tailwind classes with the project's CSS custom properties (`bg-primary`, `text-text-primary`, `border-panel-accent`, etc.).
- `unify<Component>Theme` -- the Unify Design System variant, using deeply namespaced CSS custom properties from the Unify token system.

### How They Are Composed

- `src/utils/Theme/themes/default.ts` assembles all `default*Theme` exports into a single `ReablocksTheme` object (the standard `theme` export).
- `src/utils/Theme/themes/themeUnify.ts` assembles all `unify*Theme` exports into `themeUnify: ReablocksTheme`.
- Both share the same `ReablocksTheme` interface, so switching between them is a drop-in replacement at the `ThemeProvider` level.
- The unify theme is activated via `<ThemeProvider variant="unify">`.

### Token Naming Convention in Unify Themes

Unify themes use a hierarchical CSS custom property naming convention:

```
--{component}-{category}-{subcategory}-{element}-{state}
```

Examples:
- `--buttons-colors-core-icon-primary-background-resting`
- `--inputs-details-height-input-sm`
- `--selectors-colors-toggle-off-background-hover`
- `--calendar-details-corner-radius-default`
- `--tabs-colors-contained-text-selected-hover`

This convention provides 4-6 levels of nesting covering: component, detail type (colors/details), sub-component, semantic role, element, and state.

### State Coverage

The unify themes are notably more thorough with interactive states. Where the default themes typically handle `hover` and maybe `disabled`, the unify themes consistently cover:
- `resting` (base state)
- `hover`
- `selected` / `focus-visible`
- `disabled`

This is applied to background, border/stroke, text, and assets (icons/SVGs) independently.

## New Components

### Navigation (`src/elements/Navigation/`)

Entirely new component, not present on master. Provides:

- **NavigationBar**: A flex container for vertical/horizontal navigation with three slots (`start`, `navigation`, `end`). Supports `direction` prop (`vertical` | `horizontal`).
- **NavigationButton**: An animated button (using `motion`) with layout transitions for the selection indicator. Supports:
  - `variant`: `ghost` (sidebar-style) or `underline` (tab-style)
  - `active` state with animated selection indicator (`motion.div` with `layoutId`)
  - `disabled` state
  - `animated` flag to disable animations

Theme structure (`NavigationTheme`):
```
bar: { base, direction.{horizontal, vertical}, start, navigation, end }
button: { base, variant.{ghost, underline}.{content, active, selection, disabled} }
```

### Typography (`src/typography/Typography.tsx`)

New unified `<Typography>` component (marked as `@deprecated` in JSDoc -- suggesting it's a transitional component). Props:
- `variant`: `h1`-`h6`, `body`, `label`, `button`, `monospace`
- `size`: `small`, `medium`, `large`
- `weight`: `thin` through `black`
- `color`: `primary`, `secondary` (and `success`, `warning`, `error`, `info` in unify variant)

Uses `COMPONENTS_MAP` to render the appropriate HTML element per variant. This replaces the individual `H1.tsx`, `H2.tsx`, etc. components from master.

**TypographyThemeDeprecated**: The old granular typography theme (`sub`, `smallHeading`, `secondaryHeading`, `primaryHeading`, `pageTitle`, `disableMargins`) is preserved in a separate file as `typography_deprecated` in the theme system, maintaining backward compatibility.

## Component-by-Component Summary

### Button (`ButtonTheme.ts`)
- **Interface**: Extracted `ButtonVariantTheme`, `ButtonSizeTheme`, `ButtonColorTheme` as named exports. Adornment `start`/`end` now size-dependent.
- **Variants**: Added `ghost`.
- **Colors**: Reduced from 6 (default, primary, secondary, success, warning, error) to 3 (primary, secondary, destructive). Unify theme adds `default` back on the theme object but not the type.
- **Unify theme**: Extremely verbose -- each color x variant combination specifies resting, hover, focus-visible, and disabled states for background, border, text, AND SVG fill. A single color+variant block is ~4 lines of classes.
- **Line count**: 253 (master) vs 247 (unify-ds) -- similar, but the unify theme constant itself is much larger despite the file being similar in total lines because the interface was simplified.

### Chip (`ChipTheme.ts`)
- **Interface**: Radical restructuring. From flat `ChipTheme` to nested `ChipTheme.types.{badge, tag}`.
- **Badge subtype**: No close button, no disabled state. Pure display chip.
- **Tag subtype**: Has `closeButton`, `disabled`. Interactive chip.
- **Variants**: Added `subtle` to badge. Tags in unify theme only use `outline`.
- **Colors**: 7 colors (default, primary, secondary, success, warning, error, info) preserved.
- **Color config**: Now per-variant with `base`, `selected?`, `selectable?`, `start?` (icon color), `end?` (icon color).
- **Line count**: 356 (master) -> 784 (unify-ds). More than doubled.

### Badge (`BadgeTheme.ts`)
- **Interface**: Unchanged.
- **Unify theme**: Swaps color values to use Unify tokens (`bg-background-neutral-raised-base`, etc.). Uses `--badges-details-*` tokens for sizing.

### Calendar (`CalendarTheme.ts`)
- **Interface**: Added `header.divider?`, `contentContainer`, `time.items.item.disabled`.
- **Unify theme**: Comprehensive token usage (`--calendar-details-*`, `--calendar-colors-*`). Added rounded corners, border styling, consistent use of `focus-visible` states.
- **Presets section**: Refined with Unify spacing tokens.

### Checkbox (`CheckboxTheme.ts`)
- **Interface**: Unchanged structurally.
- **Unify theme**: Uses `--selectors-details-*` tokens. Introduces `group/checkbox` hover/focus pattern with `group-hover/checkbox:` and `group-focus-within/checkbox:` for coordinated state changes across the checkbox, label, and border. Adds transition-colors. Replaces SVG stroke-based styling with border/background approach.

### Input (`InputTheme.ts`)
- **Interface**: Unchanged.
- **Unify theme**: Uses `--inputs-details-*` and `--inputs-colors-*` tokens. Added `group/input` pattern for coordinated hover states on adornments. Enhanced error state with separate resting/hover/focus-within colors.

### Select Input (`SelectInputTheme.ts`)
- **Interface**: Unchanged.
- **Unify theme**: Uses same `--inputs-*` tokens as Input. Better error state handling. Uses `--spacing-*` tokens for chip spacing. Adds `focus-within` states for the container.

### Radio (`RadioTheme.ts`)
- **Interface**: Unchanged.
- **Unify theme**: Uses `--selectors-details-*` and `--selectors-colors-radio-*` tokens. Same `group-hover/group-focus-within` pattern as Checkbox. Adds focus-visible support.

### Toggle (`ToggleTheme.ts`)
- **Interface**: Unchanged.
- **Unify theme**: Uses `--selectors-colors-toggle-*` and `--selectors-details-*` tokens. Added `group/toggle` pattern. Focus-visible states added. Handle sizing uses token-driven `size-()` instead of fixed pixel values.

### Notification (`NotificationTheme.ts`)
- **Interface**: Added optional `icon?` field to each variant.
- **Unify theme**: Uses `--notifications-*` tokens. Added `backdrop-blur-xl` for glass effect. Hover states on notification container. Token-driven sizing for close button and icons.

### Tabs (`TabsTheme.ts`)
- **Interface**: `TabVariantConfigTheme` expanded with `button?`, `selected?`, `disabled?`, `indicator?`. Added `outlined` and `text` tab variants.
- **Unify theme**: Four fully-styled variants (primary/contained, secondary/underline, outlined, text). Each variant specifies button, selected, and disabled states independently. Uses `--tabs-*` tokens. SVG icon state transitions added. Added `group/tab` pattern.

### Typography (`TypographyTheme.ts`)
- **Interface**: Completely new. `TypographyTheme` has `base`, `color`, `weight`, and `variant` (each with `base` + optional `size`).
- **Unify theme**: `color` extended with `success`, `warning`, `error`, `info` beyond primary/secondary. Uses Unify content tokens (`text-content-text-*`). Weight and variant values are identical between default and unify themes (only colors differ).

### Typography Deprecated (`TypographyThemeDeprecated.ts`)
- New file preserving the old typography approach.
- `unifyTypographyThemeDeprecated` updates colors to Unify tokens, slightly adjusts font sizes (e.g., `text-sm` instead of `text-base` for smallHeading).

## Comparison to Our Approach

Our `unify-migration` branch kept theme interfaces unchanged and used a CSS adapter layer to map Unify tokens to the existing CSS custom properties. Key differences:

| Aspect | Our Approach (CSS Adapter) | unify-ds Approach |
|--------|---------------------------|-------------------|
| Theme interfaces | Unchanged | Modified/expanded (Chip restructured, Button sub-interfaces, Tabs variants, Typography rewrite) |
| Token consumption | CSS variable remapping layer | Tokens consumed directly in Tailwind classes |
| New variants | Not added | ghost (Button), subtle (Chip), outlined/text (Tabs) |
| New components | Not added | Navigation, Typography |
| State coverage | Inherited from defaults | Comprehensive resting/hover/focus-visible/disabled |
| Breaking changes | None | ChipTheme is completely incompatible; ButtonTheme has structural changes |
| Migration effort | Drop-in for existing users | Requires consuming code changes for Chip, Button, Tabs |
| File size impact | Minimal | Chip doubled, theme files ~30-50% larger |
| Token coupling | Loose (one mapping layer) | Tight (tokens in every class string) |

## Things We Should Incorporate

1. **Navigation component**: Genuinely useful new component. The theme interface is clean and the component implementation is solid (animated selection indicator, vertical/horizontal modes). Should port this to our branch.

2. **Tabs variant expansion**: Adding `outlined` and `text` tab variants is a valuable enhancement. The `TabVariantConfigTheme` interface expansion (adding `button`, `selected`, `disabled`, `indicator` per variant) is a better design that enables per-variant styling without hacks.

3. **Chip badge/tag split**: The conceptual split between badge (display-only) and tag (interactive, closeable) is architecturally sound. The old flat ChipTheme mixed concerns. However, the implementation is very verbose.

4. **Button `ghost` variant**: Useful addition for icon buttons and subtle actions.

5. **Comprehensive state coverage**: The pattern of specifying resting/hover/focus-visible/disabled for each element (background, border, text, SVG fill) is more thorough. We should adopt this level of state coverage.

6. **Typography component**: The unified `<Typography>` with variant/size/weight/color props is a better API than individual H1-H6 components, even though it's already marked deprecated. The theme interface (`TypographyTheme` with variant map) is cleaner.

7. **`group/` hover patterns**: The use of Tailwind's `group/{name}` for coordinated hover/focus states (on Checkbox, Radio, Toggle, Input) is a good practice we should adopt for better interactive feedback.

8. **Notification icon styling**: Per-variant icon sizing/coloring is a small but useful addition.

## Issues / Incomplete Work

1. **ChipTheme breaking change**: The restructuring from flat `ChipTheme` to `ChipTheme.types.{badge, tag}` is a complete breaking change. Any consuming code using the old `chip.base`, `chip.adornment`, `chip.variants`, etc. will break. There is no migration path or backward compatibility layer.

2. **Button color reduction**: The unify-ds `ButtonColorTheme` interface only defines `primary`, `secondary`, `destructive` -- but the `defaultButtonTheme` object also includes `default`. The `success` and `warning` colors from master are dropped entirely with no deprecation notice.

3. **Typography marked deprecated on arrival**: The new `Typography.tsx` component is immediately `@deprecated` in its JSDoc, suggesting uncertainty about whether this is the right abstraction. The deprecation message says to use semantic HTML elements directly, which contradicts the purpose of the component.

4. **Unify theme token verbosity**: The token names are extremely long (`buttons-colors-core-icon-primary-background-resting` is 8 segments). This makes the theme files hard to read and maintain. A single Button color+variant block spans 4+ lines.

5. **Chip tag unify theme only supports `outline`**: The unify tag theme only defines `outline` variant in colors and variants. The `filled` and `subtle` variants present in the badge are missing from tags, despite the interface supporting them.

6. **Inconsistent `default` color handling**: Button's `defaultButtonTheme` has a `default` color entry but `ButtonColorTheme` interface doesn't list it (relies on `[key: string]` indexer). The interface explicitly names only `primary`, `secondary`, `destructive`.

7. **Typography theme near-identical between default and unify**: The `unifyTypographyTheme` is almost identical to `defaultTypographyTheme` -- only `color` values differ. The variant definitions (h1-h6, body, label, button, monospace) are literally copy-pasted. This suggests the unify-specific typography work may be incomplete.

8. **Missing `legacyChipTheme`**: Master had `chipTheme` and `legacyChipTheme` exports. The unify-ds branch has `defaultChipTheme` and `unifyChipTheme` but no legacy compatibility export.

9. **Calendar `contentContainer` on master**: The `contentContainer` field is added to the interface but the master `defaultCalendarTheme` sets it to an empty string `''`, suggesting it may not be fully wired into the component yet.

10. **Badge unify theme minimal changes**: The `BadgeTheme` interface is completely unchanged. The unify theme only swaps color values -- no structural improvements, no token-driven sizing for positions, no state coverage improvements. This feels less complete than other components.

11. **Toggle size inconsistency**: The unify toggle theme reuses `sm` token values for both `small` and `medium` sizes, making them visually identical. This appears to be a placeholder or incomplete mapping.

12. **No `themeUnify` re-export in themes/index.ts**: Need to verify that `themeUnify.ts` is actually exported and accessible. The file exists but the barrel export situation is unclear.
