# Build, Storybook, and Configuration Changes on `origin/unify-ds`

## Package Changes

### Version Bump
- **Master:** `9.4.1`
- **Unify-DS:** `10.0.0-alpha.15` (major version bump, signaling breaking changes)

### New/Changed Scripts
| Script | Master | Unify-DS |
|--------|--------|----------|
| `build:styles` | Single command: `npx @tailwindcss/cli -i ./src/index.css -o ./dist/index.css` | Orchestrator: runs `build:styles:default`, `build:styles:unify`, `build:styles:unify-compat` |
| `build:styles:default` | N/A (was inline in `build:styles`) | `npx @tailwindcss/cli -i ./src/index.css -o ./dist/index.css` |
| `build:styles:unify` | N/A | `npx @tailwindcss/cli -i ./src/unify.css -o ./dist/unify.css` |
| `build:styles:unify-compat` | N/A | `npx @tailwindcss/cli -i ./src/unify-compat.css -o ./dist/unify-compat.css` |
| `rewrite:stories` | `node scripts/stories.cjs` | `node scripts/stories.mjs` (CJS to ESM) |
| `lint` | `eslint --ext js,ts,tsx` | `eslint .` (flat config style) |
| `lint:fix` | `eslint --ext js,ts,tsx --fix src` | `eslint . --fix` |
| `test:visual*` | Present (Playwright visual tests) | **Removed** |
| `prepare` | `husky` | `husky install` (older husky API) |

### New Package Exports
```json
"./unify.css": "./dist/unify.css",
"./unify-compat.css": "./dist/unify-compat.css"
```
These allow consumers to import the Unify theme CSS:
- `import 'reablocks/unify.css'` -- full Unify design system tokens
- `import 'reablocks/unify-compat.css'` -- Unify tokens + backward-compatible palette mappings

### Dependency Changes

**Peer dependencies relaxed:**
- Master requires `react >= 18`, unify-ds allows `react >= 16`

**Runtime dependency version differences:**
| Dep | Master | Unify-DS |
|-----|--------|----------|
| `ellipsize` | `^0.7.0` | `^0.6.2` |
| `focus-trap-react` | `^12.0.0` | `^10.3.1` |
| `motion` | `^12.23.12` | `^12.34.2` |
| `tailwind-merge` | `^3.5.0` | `^2.6.0` |
| `lodash.clonedeep` | N/A | `^4.5.0` (new) |
| `lodash.mergewith` | N/A | `^4.6.2` (new) |

**Notable:** `tailwind-merge` is v2 on unify-ds vs v3 on master. The unify-ds branch adds a custom `twMerge` wrapper via `extendTailwindMerge` that registers a custom `text-xxs` font-size class group.

**Dev dependency differences (Storybook):**
- Master uses **Storybook 10** (`^10.2.17`)
- Unify-DS uses **Storybook 9** (`^9.1.5` / `^9.0.0-alpha.*`)
- Unify-DS includes additional Storybook addons: `@storybook/addon-storysource`, `@storybook/addon-interactions`, `@storybook/addon-mdx-gfm`
- Unify-DS uses `@storybook/manager-api` and `@storybook/preview-api` for the variant toggle

**Dev dependency differences (other):**
- Master uses `@playwright/test` -- removed on unify-ds
- Master uses newer vitest (`^4.0.18`) vs unify-ds (`^3.2.4`)
- Master uses newer vite-plugin-checker (`^0.12.0`) vs unify-ds (`^0.10.3`)
- Unify-DS adds: `eslint-plugin-import`, `eslint-plugin-simple-import-sort`, `eslint-plugin-unused-imports`, `eslint-plugin-react-refresh`, `reaviz-lint-rules`, `baseline-browser-mapping`

### Removed Husky Configuration
- Master: just `"prepare": "husky"` (v9+ style)
- Unify-DS: `"prepare": "husky install"` and includes a `husky.hooks` config block (older pattern)

---

## Build Pipeline

### CSS Build Architecture

The unify-ds branch introduces a **three-CSS-output build**:

1. **`dist/index.css`** (default) -- Built from `src/index.css`:
   ```css
   @import 'tailwindcss';
   @import './assets/css/index.css';       /* original palette, dark/light themes, semantic tokens */
   @import './assets/css/variants.css';    /* custom dark/light/disabled-within variants */
   ```

2. **`dist/unify.css`** (Unify design system) -- Built from `src/unify.css`:
   ```css
   @import 'tailwindcss';
   @import './assets/css/unify/index.css'; /* Unify color tokens, dimensions, dark/light themes */
   @import './assets/css/variants.css';
   ```

3. **`dist/unify-compat.css`** (Unify + backward compat) -- Built from `src/unify-compat.css`:
   ```css
   @import 'tailwindcss';
   @import './assets/css/unify/index.css';
   @import './assets/css/palette-compat.css'; /* maps gray/slate/blue Tailwind colors to Unify semantic tokens */
   @import './assets/css/variants.css';
   ```

### `palette-compat.css`
This file uses `@theme` to remap Tailwind's built-in color scales (gray-50 through gray-950, slate-50 through slate-950, blue-500) to Unify design system semantic tokens (e.g., `--background-neutral-raised-6`, `--content-text-neutral-base`, `--background-brand-base`). This allows existing components using Tailwind gray/slate classes to automatically pick up Unify colors.

### `variants.css`
Shared across all three builds. Defines custom Tailwind variants:
- `dark` -- matches `.theme-dark`, `[data-theme=dark]`, `.dark` and descendants
- `light` -- matches `.theme-light`, `[data-theme=light]`, `.light` and descendants
- `disabled-within` -- matches containers with disabled inputs/textareas/buttons

### Vite Static Copy
Unify-DS adds two additional copy targets to `viteStaticCopy`:
```js
{ src: 'src/assets/css/*.css', dest: 'styles' },
{ src: 'src/assets/css/tailwind/*.css', dest: 'styles/tailwind' }
```
This ships raw CSS token files in `dist/styles/` so consumers can import individual CSS files.

---

## Storybook Theme Switcher

### How It Works

The unify-ds branch adds a **toolbar toggle** in Storybook to switch between "Default" and "Unify" theme variants in real time.

**`manager.ts` (toolbar registration):**
- Registers a custom addon `variant-toggle` using `addons.register()`
- Renders a `VariantToggle` component as a `types.TOOL` in the toolbar
- Uses `useGlobals()` to read/write `themeVariant` global (values: `'default'` | `'unify'`)
- Shows a paint brush icon + label ("Default" or "Unify")
- Clicking toggles between the two values

**`preview.tsx` (decorator application):**
- Imports `unify.css` as an inline string via `?inline` Vite import
- Defines `applyVariantCss()` which dynamically injects/removes a `<style>` element with the Unify CSS
- `WithVariant` decorator reads `context.globals.themeVariant` and:
  1. Calls `applyVariantCss(variant)` in a `useEffect`
  2. Wraps the story in `<ThemeProvider variant={variant}>`
- The `DocsContainer` wrapper also applies the variant for docs pages
- Initial global: `themeVariant: 'default'`

**Key detail:** The CSS injection is done at the DOM level (injecting the full unify.css into a `<style>` tag), while the JS theme object swap happens via `ThemeProvider`'s `variant` prop. Both must be coordinated for the theme to work correctly.

**`main.ts` addon list:**
Unify-DS adds these Storybook addons vs master:
- `@storybook/addon-storysource` -- shows story source code
- `@storybook/addon-essentials` -- bundle of common addons
- `@storybook/addon-interactions` -- interaction testing
- `@storybook/addon-docs` -- (also present on master)
- `@storybook/addon-themes` -- (also present on master)

**`preview-head.html`:**
- Loads Google Fonts (Inter variable, Share Tech Mono)
- Sets body styles with `theme-light`/`theme-dark` background and text colors
- Defines CSS custom properties for Storybook-specific tokens (`--icon-block-color`, `--border-color`, etc.)

**`theme.ts`:**
- Storybook UI theme uses dark base, Inter font, custom dark backgrounds (`#11111F`)

### Theme Provider Changes in Preview
- Master: passes a fixed `reablocksTheme` object to `ThemeProvider` as the `theme` prop
- Unify-DS: passes only the `variant` prop to `ThemeProvider`, letting the provider internally select the base theme

---

## New Public API

### New Components

**`src/elements/Navigation/`** (entirely new)
- `NavigationBar` -- top-level navigation bar component
- `NavigationButton` -- navigation item/button
- `NavigationTheme` -- theme interface (type-only export)
- Registered in both `defaultTheme` and `themeUnify` as `navigation`

**`src/layout/Stack/`** (new)
- Flexbox stack component with `direction`, `alignItems`, `justifyContent`, `dense`, `inline` props
- `StackTheme` for theming
- Registered in both default and unify themes as `stack`

**`src/layout/Block/`** (new)
- Block layout component with `label`, `direction` (vertical/horizontal), `alignment`, `required`, `disableMargin` props
- `BlockTheme` for theming
- Registered as `block` -- appears to replace the removed `Field` component

**`src/layout/VerticalSpacer/`** (new)
- Vertical spacing component with `space` prop mapped to theme size tokens
- `VerticalSpacerTheme` with size variants
- Registered as `verticalSpacer`

### Removed Components
- **`src/layout/Field/`** -- removed from `layout/index.ts` exports, directory deleted (replaced by `Block`)

### Removed Exports
- **`src/utils/Theme/types.ts`** -- the `Palette`, `Palettes`, and `Scale` type interfaces removed entirely. No longer exported from `src/utils/Theme/index.ts`.

### New Theme Exports
- `themeUnify` -- complete Unify design system theme object (from `themes/themeUnify.ts`)
- `ThemeVariant` type -- `'default' | 'unify' | 'custom'`
- `twMerge` -- custom tailwind-merge instance with extended config (exported from `helpers/twMerge.ts`)

### Theme File Rename
- `src/utils/Theme/themes/theme.ts` renamed to `src/utils/Theme/themes/default.ts`
- The named export `theme` is preserved
- `themes/index.ts` now exports from `./default` instead of `./theme`, plus adds `./themeUnify`

### ThemeProvider API Changes
- `theme` prop is now **optional** (defaults to variant's base theme)
- New `variant` prop: `'default' | 'unify' | 'custom'`
- New `replaceTheme` prop: when true, uses theme as full replacement instead of merging
- Context now includes `variant` in addition to `theme`, `tokens`, `updateTheme`, `updateTokens`
- Runtime variant changes trigger a console warning

---

## Vite Config Changes

Two additional `viteStaticCopy` targets added:

```js
{
  src: 'src/assets/css/*.css',
  dest: 'styles'
},
{
  src: 'src/assets/css/tailwind/*.css',
  dest: 'styles/tailwind'
}
```

No other Vite config changes. The `@tailwindcss/vite` plugin, library entry point, build settings, and rollup options are identical to master.

---

## Comparison to Our Approach

| Aspect | Unify-DS Branch | Master (our baseline) |
|--------|----------------|----------------------|
| **Storybook version** | Storybook 9 | Storybook 10 |
| **CSS build** | Three separate CSS outputs (`index.css`, `unify.css`, `unify-compat.css`) | Single CSS output (`index.css`) |
| **Theme switching** | Runtime variant toggle in Storybook toolbar | No variant toggle |
| **ThemeProvider** | `variant` prop selects base theme, optional `theme` merges overrides, `replaceTheme` for full replacement | `theme` prop required, always merges with default |
| **New components** | Navigation, Stack, Block, VerticalSpacer | None added |
| **Field component** | Removed, replaced by Block | Still present |
| **types.ts** | Removed (Palette, Scale types gone) | Still present |
| **tailwind-merge** | v2 with custom `extendTailwindMerge` wrapper | v3 |
| **React peer dep** | Relaxed to `>=16` | Requires `>=18` |
| **Visual tests** | Removed | Present (Playwright) |
| **Version** | `10.0.0-alpha.15` | `9.4.1` |

---

## Things We Should Incorporate

1. **Three-CSS-output build pipeline** -- The `build:styles:default` / `build:styles:unify` / `build:styles:unify-compat` pattern with corresponding entry CSS files (`src/index.css`, `src/unify.css`, `src/unify-compat.css`) and package.json exports.

2. **ThemeProvider `variant` prop** -- The `ThemeVariant` type and the ability for `ThemeProvider` to select between `defaultTheme` and `themeUnify` based on variant. Also the `replaceTheme` prop and the `isCompleteTheme` guard.

3. **`themeUnify` theme object** -- The complete Unify theme (`src/utils/Theme/themes/themeUnify.ts`) with per-component `unify*Theme` exports across all ~50 components.

4. **Storybook variant toggle** -- The `manager.ts` toolbar addon and `preview.tsx` CSS injection/decorator pattern for switching themes during development. Will need adaptation for Storybook 10 APIs.

5. **`palette-compat.css`** -- The compatibility layer that remaps Tailwind gray/slate/blue to Unify semantic tokens, enabling gradual migration for consumers.

6. **New components** -- Navigation, Stack, Block, VerticalSpacer (and their default + unify themes). These are useful layout primitives.

7. **Custom `twMerge` wrapper** -- The `extendTailwindMerge` with `text-xxs` class group registration, exported from utils. Needs adaptation for tailwind-merge v3.

8. **CSS static copy** -- The additional viteStaticCopy targets for raw CSS files in `dist/styles/`.

9. **`variants.css` shared layer** -- The custom variant definitions (`dark`, `light`, `disabled-within`) factored out so all CSS builds share the same variant behavior.

10. **Theme file restructure** -- Renaming `theme.ts` to `default.ts` alongside `themeUnify.ts` is cleaner organization.

---

## Issues / Problems

### Version Conflicts with Master

1. **Storybook 9 vs 10** -- The unify-ds branch is on Storybook 9, but master has already upgraded to Storybook 10. The `manager.ts` addon registration uses `storybook/manager-api` and `storybook/internal/components` imports which may have different APIs in Storybook 10. The addon packages (`@storybook/addon-storysource`, `@storybook/addon-interactions`, `@storybook/addon-mdx-gfm`) are pinned to v9 and may not exist or work the same in v10.

2. **tailwind-merge v2 vs v3** -- Master uses `tailwind-merge@^3.5.0`, but unify-ds uses `^2.6.0`. The custom `twMerge` wrapper uses `extendTailwindMerge` from v2, which may have different config format in v3. All component themes importing from the custom wrapper need verification against v3.

3. **React peer dependency regression** -- Unify-ds relaxes to `react >= 16`, but master requires `>=18`. This is likely unintentional on unify-ds and should stay at `>=18`.

4. **Vitest/Vite version downgrade** -- Unify-ds has older vitest (`^3.2.4` vs `^4.0.18`) and some older dev deps. Should use master's versions.

5. **Other dependency version mismatches** -- `ellipsize`, `focus-trap-react` are older on unify-ds. Need to align with master.

### Breaking Changes

6. **`Field` component removed** -- Replaced by `Block`, but this is a breaking API change. Consumers using `Field` from `reablocks` will break on upgrade. Need migration guidance or a deprecation alias.

7. **`types.ts` removed** -- `Palette`, `Palettes`, and `Scale` type exports are gone. Any consumer importing these types will break.

8. **Theme file renamed** -- `themes/theme.ts` renamed to `themes/default.ts`. The named export `theme` is preserved, but any deep import paths like `reablocks/dist/utils/Theme/themes/theme` will break.

9. **`ThemeProvider` API change** -- `theme` prop is now optional (defaults to the variant's base theme). Previously it was required. The `replaceTheme` prop is new. Passing a partial theme object now merges with the base theme instead of replacing it -- this is actually more correct behavior but is a subtle change.

### Storybook Issues

10. **Inline CSS import trick** -- `import unifyCss from '../src/unify.css?inline'` relies on Vite's `?inline` query. Injecting the entire compiled CSS as a string into a `<style>` tag could cause performance issues with large CSS and may not handle `@import` directives correctly (they must be at the top of a stylesheet, not inside a `<style>` block injected dynamically).

11. **Runtime variant warning** -- The ThemeProvider warns about changing variant at runtime but the Storybook toggle does exactly that. This means the console will show warnings when toggling in Storybook, which is confusing for developers.

12. **`@storybook/addon-essentials` duplication** -- Unify-ds includes both `@storybook/addon-essentials` (which bundles docs, controls, actions, etc.) and `@storybook/addon-docs` separately in `main.ts`. This can cause duplicate addon registration.

### Build / Bundle Issues

13. **lodash dependencies added** -- `lodash.clonedeep` and `lodash.mergewith` are added as runtime dependencies. The project already had a custom `cloneDeep` in `src/utils/Theme/helpers/cloneDeep.ts`. Adding lodash increases bundle size. Should verify whether these are actually needed or if the existing helpers suffice.

14. **Missing visual tests** -- The `test:visual*` scripts and Playwright config from master are removed on unify-ds. This means the Unify theme has no visual regression test coverage.

15. **Husky configuration mismatch** -- Uses `husky install` (v8 API) while master uses the v9 pattern (`husky`). Will need to align.

16. **Branch stability** -- 30+ fix commits on unify-ds over an extended alpha period (`10.0.0-alpha.1` through `alpha.15`), suggesting the theme integration required significant iteration to get right.
