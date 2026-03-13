# CSS Architecture Analysis: `origin/unify-ds` Branch

Date: 2026-03-13

## File Inventory

### Entry Points (src/)
| File | Lines | Description |
|------|-------|-------------|
| `src/index.css` | 3 | Default theme entry point. Imports tailwindcss, `assets/css/index.css`, and `variants.css`. |
| `src/unify.css` | 3 | Unify theme entry point. Imports tailwindcss, `assets/css/unify/index.css`, and `variants.css`. |
| `src/unify-compat.css` | 4 | Unify + backward-compat entry point. Same as `unify.css` but also imports `palette-compat.css`. |

### Shared Files (src/assets/css/)
| File | Lines | Description |
|------|-------|-------------|
| `assets/css/index.css` | 10 | Default theme aggregator. Imports tailwind config, colors, dimensions, both theme files, and semantic-tokens. |
| `assets/css/colors.css` | 528 | Raw palette: ~500 CSS custom properties with hex values for neutrals, blues, greens, oranges, pinks, etc. Design-token names like `--color-neutrals-force-dusk-500`, `--color-blue-hyperstream-a-1000`. Scoped to `:root, :host`. |
| `assets/css/dimensions.css` | 457 | Spacing, sizing, corner-radius, and component-level dimension tokens. Scoped to `:root, :host`. |
| `assets/css/theme-dark.css` | 357 | Default dark theme. Maps ~350 semantic variables (`--background-*`, `--stroke-*`, `--content-text-*`, `--effects-*`) to raw palette tokens. Scoped via `&.theme-dark, &.dark`. |
| `assets/css/theme-light.css` | 361 | Default light theme. Same semantic variables mapped to different palette tokens. Scoped via `&.theme-light, &.light`. |
| `assets/css/semantic-tokens.css` | 87 | Maps reablocks-level aliases (`--color-primary`, `--color-error`, `--color-panel`, etc.) to design-system semantic variables (`--background-brand-base`, etc.). Used by component Tailwind themes via `bg-primary`, `text-error`, etc. |
| `assets/css/palette-compat.css` | 27 | Maps Tailwind standard gray/slate/blue scales to design-system semantic variables. Enables `bg-gray-500` etc. to resolve to the active theme. |
| `assets/css/variants.css` | 5 | Defines `@custom-variant` for `dark`, `light`, and `disabled-within`. Shared by all three entry points. |

### Default Tailwind Config (src/assets/css/tailwind/)
| File | Lines | Description |
|------|-------|-------------|
| `tailwind/main.css` | 5 | Aggregator: imports backgrounds, colors, fonts, other, shadows. |
| `tailwind/colors.css` | 2,477 | Massive `@theme inline` block. Resets all default Tailwind color scales (`--color-red-*: initial`, etc.) then re-registers every raw palette token as a Tailwind color utility. |
| `tailwind/backgrounds.css` | 3 | Empty `@theme inline` placeholder for background utilities. |
| `tailwind/fonts.css` | 38 | `@theme` block defining font families (Inter, Share Tech Mono), font sizes (xxs through 9xl), and line heights. |
| `tailwind/shadows.css` | 17 | `@theme inline` block defining drop-shadow scale (0-60). |
| `tailwind/other.css` | 25 | `@theme inline` block defining radius tokens (primary, lg, sm, pill, sharp) and blur scale (0-100). |

### Unify Tailwind Config (src/assets/css/unify/)
| File | Lines | Description |
|------|-------|-------------|
| `unify/index.css` | 5 | Unify theme aggregator. Imports its own tailwind/main.css, its own colors.css, the shared `../dimensions.css`, and its own theme-dark/theme-light. **Does NOT import semantic-tokens.css.** |
| `unify/colors.css` | 528 | **Byte-for-byte identical** to `assets/css/colors.css`. |
| `unify/theme-dark.css` | 359 | Almost identical to default theme-dark. **One difference:** `--background-neutral-raised-base` uses `kyber-crystal-a-1000` instead of `darth-abyss-a-1000`. |
| `unify/theme-light.css` | 359 | Almost identical to default theme-light. **One difference:** `--background-neutral-raised-base` uses `darth-abyss-a-1000` instead of `kyber-crystal-a-1000` (swapped relative to default). |
| `unify/tailwind/main.css` | 5 | **Identical** to `tailwind/main.css`. |
| `unify/tailwind/colors.css` | 2,477 | **Identical** to `tailwind/colors.css`. |
| `unify/tailwind/backgrounds.css` | 3 | **Identical** to `tailwind/backgrounds.css`. |
| `unify/tailwind/fonts.css` | 38 | **Identical** to `tailwind/fonts.css`. |
| `unify/tailwind/other.css` | 25 | **Identical** to `tailwind/other.css`. |
| `unify/tailwind/shadows.css` | 17 | **Identical** to `tailwind/shadows.css`. |

**Total CSS: 24 files, ~7,500 lines across `src/assets/css/` plus 3 entry points.**

---

## Architecture Overview

The system uses a 4-layer token architecture:

```
Layer 1: Raw Palette (colors.css)
  ~500 hex values: --color-neutrals-force-dusk-500, --color-blue-hyperstream-a-1000, etc.
  Defined on :root/:host, theme-independent.

Layer 2: Semantic Design Tokens (theme-dark.css / theme-light.css)
  ~350 tokens: --background-brand-base, --stroke-neutral-base, --content-text-neutral-3, etc.
  Mapped to Layer 1 values, scoped to .theme-dark/.theme-light/.dark/.light.

Layer 3: Reablocks Aliases (semantic-tokens.css)
  ~50 tokens: --color-primary, --color-error, --color-panel, --color-text-primary, etc.
  Mapped to Layer 2 values. These are what component themes actually reference.

Layer 4: Tailwind Utilities (tailwind/colors.css)
  Registers all Layer 1 tokens as @theme so Tailwind can generate bg-*, text-*, border-* classes.
  Also resets all default Tailwind color scales to prevent conflicts.
```

Dimensions live outside this hierarchy as a flat set of tokens (Layer 1 only) shared by both themes.

---

## Default Theme CSS Chain

```
User imports: import 'reablocks/dist/index.css'
                |
        src/index.css
                |
    +-----------+-----------+
    |           |           |
tailwindcss   variants.css  assets/css/index.css
                              |
              +-------+-------+-------+-------+-------+
              |       |       |       |       |       |
        tailwind/  colors.css dims.css dark.css light.css semantic-tokens.css
        main.css
              |
    +---------+---------+---------+---------+
    |         |         |         |         |
  bg.css  colors.css  fonts.css other.css shadows.css
```

The `semantic-tokens.css` file is critical: it provides the `--color-primary`, `--color-error`, etc. aliases that component Tailwind themes reference via `bg-primary`, `text-error`, etc. Without it, those Tailwind utilities resolve to nothing.

---

## Unify Theme CSS Chain

```
User imports: import 'reablocks/dist/unify.css'
                |
        src/unify.css
                |
    +-----------+-----------+
    |           |           |
tailwindcss   variants.css  assets/css/unify/index.css
                              |
              +-------+-------+-------+-------+
              |       |       |       |       |
        unify/    unify/    shared     unify/    unify/
        tailwind/ colors.css dims.css  dark.css  light.css
        main.css
```

**Critical observation:** The unify path does NOT import `semantic-tokens.css`. This means:
- `--color-primary`, `--color-error`, `--color-panel`, `--color-text-primary`, and all other reablocks-level aliases are **undefined** when using `unify.css`.
- All component themes that reference these tokens (virtually every component) will have broken colors unless the component themes are also rewritten to use Layer 2 tokens directly.
- This is either intentional (components are expected to use a different token vocabulary) or a bug.

### Unify-Compat Path

```
User imports: import 'reablocks/dist/unify-compat.css'
  = unify/index.css + palette-compat.css + variants.css
```

The compat path adds `palette-compat.css` which maps standard Tailwind grays/slates/blue to design-system tokens. This lets `bg-gray-700` resolve correctly. But it still does NOT include `semantic-tokens.css`, so `bg-primary` etc. remain broken.

---

## Token Duplication Analysis

### Files that are 100% identical between default and unify

| File | Lines | Verified by |
|------|-------|-------------|
| `colors.css` | 528 | `diff` exit code 0 |
| `tailwind/main.css` | 5 | `diff -w` identical |
| `tailwind/colors.css` | 2,477 | `diff -w` identical |
| `tailwind/backgrounds.css` | 3 | `diff -w` identical |
| `tailwind/fonts.css` | 38 | `diff -w` identical |
| `tailwind/other.css` | 25 | `diff -w` identical |
| `tailwind/shadows.css` | 17 | `diff -w` identical |

**Total duplicated: 3,093 lines across 7 files.** That is ~41% of all CSS lines.

### Files that actually differ

| File pair | Difference |
|-----------|-----------|
| `theme-dark.css` (357 lines) vs `unify/theme-dark.css` (359 lines) | **1 line**: `--background-neutral-raised-base` maps to `darth-abyss-a-1000` (default) vs `kyber-crystal-a-1000` (unify). Line count differs by 2 due to formatting. |
| `theme-light.css` (361 lines) vs `unify/theme-light.css` (359 lines) | **1 line**: Same variable, swapped palette token (inverse of dark). Line count differs by 2 due to formatting. |

**The entire semantic difference between default and unify themes is ONE CSS variable pointing to a different palette token in each of dark and light mode.**

### Shared (not duplicated)

- `dimensions.css` -- unify/index.css correctly imports `../dimensions.css`
- `semantic-tokens.css` -- only used by default path (not duplicated, but also not included in unify)
- `palette-compat.css` -- only used by unify-compat path
- `variants.css` -- shared by all three entry points

---

## Comparison to Our Approach

Our `unify-migration` branch proposes a single `src/adapters/unify.css` file that overrides only the tokens that differ. The `origin/unify-ds` branch duplicates the entire directory tree.

| Aspect | Our approach (single adapter file) | Their approach (duplicated directory) |
|--------|-------------------------------------|---------------------------------------|
| **New files** | 1 CSS file | 10 new CSS files (8 identical to existing) |
| **New lines** | ~10-20 (just the overrides) | ~3,100 (mostly copy-paste) |
| **Maintenance** | Low; one place to edit | High; changes to shared tokens must be made in 2 places |
| **Build outputs** | 1 CSS bundle (adapter is additive) | 3 separate CSS bundles (index.css, unify.css, unify-compat.css) |
| **Clarity of difference** | Explicit; the adapter file documents exactly what changed | Hidden; must diff two 350-line files to find 1 different line |
| **Semantic tokens** | Included (inherits from base) | Missing from unify path |
| **Consumer DX** | Import base + adapter | Pick one of 3 entry points |

---

## Strengths of Their Approach

1. **Three separate entry points are clean for consumers.** Users pick `index.css`, `unify.css`, or `unify-compat.css` and get exactly one import. No layering or ordering concerns.

2. **The 4-layer token architecture is well-designed.** Raw palette -> semantic design tokens -> reablocks aliases -> Tailwind utilities is a solid progression that separates concerns correctly.

3. **`palette-compat.css` is a good idea.** Mapping `gray-*` and `slate-*` to design-system tokens lets existing Tailwind code work without rewriting class names. We should consider adopting this.

4. **`variants.css` is properly shared.** The custom dark/light/disabled-within variants are factored out and used by all three entry points.

5. **`dimensions.css` is properly shared.** The unify path imports `../dimensions.css` rather than duplicating it, showing awareness of the duplication problem.

6. **`semantic-tokens.css` is well-documented.** The header comment explains how the same mapping works for both themes because both define the same intermediate variable names.

7. **Build script is explicit.** Three `npx @tailwindcss/cli` invocations produce three distinct outputs: `dist/index.css`, `dist/unify.css`, `dist/unify-compat.css`.

8. **Tailwind default color scale reset is thorough.** `tailwind/colors.css` starts by setting `--color-red-*: initial`, `--color-gray-*: initial`, etc. to prevent Tailwind's built-in palette from interfering.

---

## Weaknesses / Issues

### Critical Issues

1. **Massive unnecessary duplication.** 7 files totaling 3,093 lines are byte-for-byte identical between `assets/css/tailwind/` and `assets/css/unify/tailwind/`, plus `colors.css`. The entire `unify/tailwind/` directory and `unify/colors.css` are complete copies with zero differences. This is the dominant architectural problem.

2. **Missing `semantic-tokens.css` in unify path.** Neither `unify.css` nor `unify-compat.css` imports `semantic-tokens.css`. The tokens `--color-primary`, `--color-error`, `--color-panel`, `--color-text-primary`, `--color-surface`, and dozens more that component themes depend on are undefined. Since virtually every component theme uses `bg-primary`, `text-error`, `bg-panel`, etc., this either means (a) all component themes must be rewritten for Unify, or (b) this is a bug.

3. **The actual difference is trivially small.** One CSS variable (`--background-neutral-raised-base`) pointing to a different palette token in each theme direction. This does not justify 10 new files and 3,100 new lines.

### Maintenance Risks

4. **No mechanism to keep duplicated files in sync.** If someone updates `tailwind/fonts.css` to add a new font size, they must remember to update `unify/tailwind/fonts.css`. There are no tests, CI checks, or build guards to detect drift between the copies.

5. **Three build outputs multiply CI time.** Each Tailwind CLI invocation processes the 2,477-line color registration file. The unify and unify-compat builds process identical Tailwind configuration to the default build.

### Architectural Issues

6. **`palette-compat.css` without `semantic-tokens.css` is incomplete.** The compat layer maps gray/slate scales but the more important reablocks semantic mappings (`--color-primary`, etc.) are absent. Result: `bg-gray-700` works but `bg-primary` does not in the unify-compat path.

7. **`tailwind/colors.css` is enormous and largely self-referential.** At 2,477 lines, it takes every `--color-*` variable from `colors.css` and creates a `@theme inline` entry that references itself (e.g., `--color-neutrals-pure-black-dnt-50: var(--color-neutrals-pure-black-dnt-50)`). This registers all 500+ raw palette colors as Tailwind utilities, most of which are never used in component themes. A smaller, targeted registration would reduce bundle size.

8. **`tailwind/backgrounds.css` is empty.** Contains only `@theme inline { /* Backgrounds */ }`. This is either dead code or a placeholder that was never completed.

### Naming / Consistency

9. **Whimsical palette names reduce clarity.** Raw tokens use names like "darth-abyss", "kyber-crystal", "hyperstream", "mew-mode", "sunstreak", "emerald-saber". While memorable, they make the token system harder to reason about and debug. The "dnt" suffix (presumably "do not touch" or "dark/neutral/transparent") in `--color-neutrals-pure-black-dnt-50` is not documented.

10. **`unify-compat.css` naming is ambiguous.** It is unclear what "compat" means in context -- backward compatibility with Tailwind defaults? With old reablocks theming? With existing consumer code? The file and its comment provide no explanation.
