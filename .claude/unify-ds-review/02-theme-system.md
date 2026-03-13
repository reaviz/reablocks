# Theme System Analysis: `origin/unify-ds` Branch

## Theme Architecture Overview

The `unify-ds` branch replaces the single monolithic theme file (`themes/theme.ts`) with a **dual-theme architecture**:

- **`themes/default.ts`** -- Contains the `ReablocksTheme` interface and the `theme` export (the default Tailwind-native theme). This replaces the old `theme.ts` entirely.
- **`themes/themeUnify.ts`** -- A parallel, complete `ReablocksTheme` object (`themeUnify`) that maps every component key to a `unify*Theme` export (e.g., `unifyButtonTheme`, `unifyAvatarTheme`).

Key architectural decisions:

1. **Same interface, different implementations.** Both `theme` and `themeUnify` are of type `ReablocksTheme`. They share the exact same shape (same 51 component keys). The difference is purely in the Tailwind class strings each component theme contains.

2. **Legacy themes are removed.** Master's `theme.ts` exported both `theme` (default with hardcoded Tailwind classes) and `legacyThemeVars` (using CSS variable-based classes like `var(--primary-background)`). The `unify-ds` branch drops `legacyThemeVars` entirely -- there are zero `legacy` references in `default.ts`.

3. **Naming convention shift.** Each component theme file now exports three named variants:
   - `defaultButtonTheme` (was `buttonTheme` on master)
   - `unifyButtonTheme` (new)
   - The old `legacyButtonTheme` is removed.

4. **New components added.** `default.ts` includes `NavigationTheme` (from `@/elements/Navigation/NavigationTheme`) which did not exist in master's `theme.ts`.

5. **Unify themes use design tokens via CSS custom properties.** For example, `unifyButtonTheme` uses classes like `rounded-(--buttons-details-corner-radius-base)` and `pr-(--buttons-details-space-between-horizontal-sm)`, referencing Unify Design System token CSS variables. This means consuming apps must import `reablocks/unify.css` to provide those custom properties.

### File Relationship Diagram

```
themes/default.ts          -- exports: ReablocksTheme interface + theme (default)
themes/themeUnify.ts       -- exports: themeUnify (Unify DS variant)
themes/index.ts            -- re-exports both + extendTheme, extendComponentTheme, extractTheme
ThemeProvider.tsx           -- imports both, selects via `variant` prop
```

## ThemeProvider Changes

The `ThemeProvider` has been significantly reworked:

### New Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `theme` | `Partial<ReablocksTheme> \| ReablocksTheme` | `undefined` | Now **optional** (was required on master). Merged with or replaces the base theme. |
| `variant` | `'default' \| 'unify' \| 'custom'` | `'default'` | Selects which base theme to use. |
| `replaceTheme` | `boolean` | `false` | When `true`, uses the `theme` prop as-is instead of merging with the base. |

### Variant Switching Logic

```typescript
const getBaseTheme = (variant: ThemeVariant): ReablocksTheme =>
  variant === 'unify' ? themeUnify : defaultTheme;
```

- `'default'` and `'custom'` both resolve to `defaultTheme` (the Tailwind-native theme).
- `'unify'` resolves to `themeUnify` (the Unify Design System theme).
- The `'custom'` variant is semantically a signal that the consumer provides their own CSS; the JS theme structure is still `defaultTheme`.

### Theme Resolution

A `resolveActiveTheme` function handles three cases:

1. **`replaceTheme=true`**: Uses the `theme` prop directly if it's a complete theme (has `components` key), otherwise falls back to `defaultTheme` with a console warning.
2. **`theme` provided, `replaceTheme=false`**: Deep-merges the `theme` prop onto the base theme.
3. **No `theme` prop**: Uses the base theme as-is.

### Runtime Variant Change Warning

A `useRef` tracks the initial variant. If the variant prop changes after mount, a console warning is emitted:
```
[ThemeProvider] Changing variant at runtime is not supported and may cause styling issues.
```
This warning only fires once per change (the ref is updated after warning). Notably, the variant change **is still applied** -- it's a warning, not a block.

### Other Changes

- **`react-fast-compare`** is used in `updateTheme` to avoid unnecessary re-renders (shallow equality check on the merged theme object).
- **Context now includes `variant`** in `ThemeContextProps`, so downstream hooks can read which variant is active.
- **`ThemeProviderProps` is now exported** (was not exported on master).
- **Token observation** dependency changed from `[theme]` to `[variant]` -- tokens are re-read when the variant changes, not when the theme object changes.

### SSR Behavior

The initial state uses `getBaseTheme(variant)` in a `useState` initializer. Since `themeUnify` is imported statically, it's available synchronously during SSR. However, `getThemeVariables()` and `observeThemeSwitcher()` run in `useEffect` (client-only), so CSS variable tokens are only populated client-side.

**Bug noted in tests:** The SSR safety test asserts `contextValue.theme` equals `defaultTheme` when `variant="unify"` is passed. The test comment says "should use default theme initially before client-side mount", but `useState(() => getBaseTheme('unify'))` would actually return `themeUnify` during initial render. This test likely passes only because the test environment triggers the `useEffect` before the assertion runs, or there's a subtlety with `react-testing-library`'s render. This deserves investigation.

## useComponentTheme Changes

Minimal changes from master:

1. **Type import path** changed from `themes/theme` to `themes/default`.
2. **Generic constraint** tightened from `<T extends any>` to `<T extends object>`.
3. **Component key type** changed from `string` to `keyof ReablocksTheme['components']`, providing compile-time validation of component names.

The hook logic is identical: check for `customTheme` override first, then fall back to the context theme's component entry. No awareness of the `variant` prop is needed at this level.

### useTheme Changes

No functional changes. The return type changed from `ThemeContextProps` to `ThemeContextProps | null` (explicitly typed, was implicit before). The import path for `ThemeContextProps` updated to match the new file structure.

## New Utilities

### `helpers/twMerge.ts` (New)

A pre-configured `tailwind-merge` instance using `extendTailwindMerge`:

```typescript
const TW_MERGE_CONFIG = {
  extend: {
    classGroups: {
      'font-size': ['text-xxs']
    }
  }
};
export const twMerge = extendTailwindMerge(TW_MERGE_CONFIG);
```

This adds support for a custom `text-xxs` class to the font-size class group, so `twMerge('text-sm text-xxs')` correctly resolves to `text-xxs` instead of keeping both. Previously, master's helpers did not have a standalone `twMerge` export -- the `cn()` helper called `twMerge` from `tailwind-merge` directly.

### `helpers/cn.ts` (Updated)

Now imports from the local `./twMerge` instead of `tailwind-merge` directly, so all Tailwind merge operations go through the extended configuration:

```typescript
import { twMerge } from './twMerge';
export function cn(...args: classNames.ArgumentArray) {
  return twMerge(classNames(args));
}
```

### `helpers/mergeDeep.ts` (Unchanged functionally)

Still uses `lodash.mergeWith` under the hood. Accepts an optional `mergeFunction` for custom merge logic. No changes from master.

### `themes/extendTheme.ts` (Minor change)

Import path changed from `./theme` to `./default`. Signature unchanged:

```typescript
export const extendTheme = (
  defaultTheme: ReablocksTheme,
  theme: PartialReablocksTheme,
  mergeFunction?: (objValue: any, srcValue: any, key: string) => string
) => mergeDeep(defaultTheme, theme, mergeFunction);
```

The `DeepPartial<T>` and `PartialReablocksTheme` types are still defined here and exported.

### `themes/extendComponentTheme.ts`

Unchanged from master. Used for per-component theme extension with the same `mergeDeep` + optional merge function pattern.

**Typo:** File is named `extendCoponentTheme.ts` (missing 'm' in "Component") on both master and unify-ds. This has not been fixed.

### `themes/extractTheme.ts`

Unchanged. Filters CSS variable tokens by prefix for the Storybook theme builder.

### `helpers/tokenUtils.ts`

Contains `getThemeVariables`, `getThemeName`, `observeThemeSwitcher`, and `getThemeVariable`. This file exists on both master and unify-ds. On unify-ds it gained a more robust `observeThemeSwitcher` with a descriptive JSDoc and a CORS warning in `getThemeVariables` for cross-origin stylesheet access issues.

## Type System

### `ReablocksTheme` (moved, expanded)

The `ReablocksTheme` interface moved from `themes/theme.ts` to `themes/default.ts`. It now has **51 component keys** (master had ~49, missing `navigation` and `skeleton` in some paths).

Key structural points:
- Every component key maps to a strongly-typed theme interface (e.g., `button: ButtonTheme`, not `button: any`).
- The `components` object is **not** indexed (`[key: string]: any`) -- it's a fixed set of known keys. This means adding a new component requires updating the `ReablocksTheme` interface.

### `types.ts` Removed

Master had a `types.ts` file exporting `Palette`, `Palettes`, `Scale`, `Sizes`, `Weights`, `Color`, `Spacings`, `Borders`, `Shadows`, `Colors`, `FontFamilies`, `Typography`, `Components`, `Gradients`, and `Theme` types. These were part of the legacy CSS-variable theming system.

On `unify-ds`, this file is **deleted**. The `Theme/index.ts` no longer exports `'./types'`. Any consumer that imported these types (e.g., `import { Palette } from 'reablocks'`) will get a build error.

### New Types

- `ThemeVariant = 'default' | 'unify' | 'custom'` -- exported from `ThemeProvider.tsx`.
- `ThemeProviderProps` -- now exported (was private on master).
- `ThemeContextProps` -- gained `variant: ThemeVariant` field.

### `PartialReablocksTheme`

Still defined in `extendTheme.ts` as `DeepPartial<ReablocksTheme>`. No change.

## Test Coverage

`ThemeProvider.spec.tsx` is new (no tests existed for ThemeProvider on master). It tests:

### Default behavior (3 tests)
- Renders children
- Uses default theme and variant by default
- Provides `theme`, `tokens`, `updateTheme`, `updateTokens` in context

### Variant prop (5 tests)
- Accepts `'default'` variant
- Accepts `'custom'` variant (uses defaultTheme as base)
- Accepts `'custom'` with custom theme overrides
- Warns when variant changes at runtime
- Only warns once per variant change (no spam)

### Unify theme loading (2 tests)
- Sets variant to `'unify'` when prop is `'unify'`
- Uses defaultTheme when variant is `'default'`

### Theme merging (6 tests)
- Merges custom theme onto base theme
- Preserves non-overridden base theme properties
- Fully replaces theme when `replaceTheme=true` with complete theme
- Uses incomplete theme when `replaceTheme=true` (still applies it)
- Ignores variant when `replaceTheme=true`
- Updates theme when theme prop changes (re-render)

### updateTheme (1 test)
- Provides `updateTheme` function in context

### SSR safety (1 test)
- Asserts default theme is used initially before client mount (see bug note above)

### Cleanup (1 test)
- Handles unmount without throwing

### Tokens (2 tests)
- Provides tokens object in context
- Provides `updateTokens` function in context

**Total: 21 tests.** Good coverage of the variant switching, merge logic, and edge cases. No tests for `extendTheme` with the unify theme specifically, no tests for `useComponentTheme` with variant awareness.

`extendTheme.spec.ts` has 3 tests:
- Returns default when no overrides
- Fully overrides a leaf string value
- Merges classes with `cn()` when a custom merge function is provided

## Exports

### `src/utils/Theme/index.ts`
```
export * from './blocks';
export * from './helpers';
export * from './hooks';
export * from './ThemeProvider';
export * from './themes';
```

Compared to master, the `'./types'` export is **removed** (the file was deleted).

### `src/utils/Theme/themes/index.ts`
```
export * from './default';
export * from './extendCoponentTheme';
export * from './extendTheme';
export * from './extractTheme';
export * from './themeUnify';
```

Compared to master (`export * from './theme'`), this now exports from `./default` and adds `./themeUnify`.

### `src/utils/Theme/helpers/index.ts`
```
export * from './cloneDeep';
export * from './cn';
export * from './isObject';
export * from './mergeDeep';
export * from './tokenUtils';
export * from './twMerge';
```

Adds `./twMerge` export (new file). Master did not export `twMerge` separately.

### `src/index.ts`

Unchanged barrel export. All theme system changes are internal to the `utils` module.

### Publicly Visible New Exports

Consumers of `reablocks` gain access to:
- `themeUnify` -- the complete Unify theme object
- `ThemeVariant` -- the union type
- `ThemeProviderProps` -- the provider props interface
- `twMerge` -- the extended tailwind-merge function
- All `unify*Theme` exports from individual component theme files (e.g., `unifyButtonTheme`)

## Comparison to Our Approach

### Their Approach: Dual Statically-Bundled Themes

- Two complete `ReablocksTheme` objects are compiled into the bundle: `theme` and `themeUnify`.
- `ThemeProvider` accepts a `variant` prop to select between them at initialization.
- Each component theme file (e.g., `ButtonTheme.ts`) exports both `defaultButtonTheme` and `unifyButtonTheme`.
- Unify themes use CSS custom property references in Tailwind classes (e.g., `rounded-(--buttons-details-corner-radius-base)`).

### Our Approach: Adapter/Migration Pattern

- On `unify-migration`, we start from master and layer on our changes.
- We likely use an adapter or mapping layer to bridge between the current default theme and Unify tokens.

### Key Differences

| Aspect | unify-ds | Our approach |
|--------|----------|-------------|
| Bundle impact | Both themes always in bundle (~2x theme data) | Adapter adds only what's needed |
| Theme selection | `variant` prop on ThemeProvider | TBD (adapter composition) |
| Component theme files | Each file exports 2+ named variants | Single theme with token abstraction |
| CSS dependency | Consumers must import correct CSS file per variant | TBD |
| Legacy support | Dropped entirely | Preserved/migrated |
| Type safety of variant | `keyof` constraint on component names | TBD |

## Strengths

1. **Clean separation of concerns.** The `default.ts` / `themeUnify.ts` split is easy to understand. Each file is self-contained with all 51 component theme imports.

2. **`variant` prop is ergonomic.** Switching themes is a single prop change: `<ThemeProvider variant="unify">`. No need to import and compose themes manually.

3. **Good test coverage.** 21 tests for ThemeProvider covering merge logic, variant switching, runtime change warnings, replaceTheme, SSR, and cleanup. This is a significant improvement over master (zero ThemeProvider tests).

4. **`replaceTheme` escape hatch.** Allows consumers to bypass the merge logic entirely and provide a complete custom theme. Includes helpful console warnings for misuse.

5. **Runtime variant change warning.** Proactively warns developers about an unsupported pattern rather than silently breaking.

6. **`react-fast-compare` in updateTheme.** Prevents unnecessary re-renders when `updateTheme` is called with an identical theme object.

7. **Extended `twMerge` configuration.** Centralizing the `tailwind-merge` config with custom class groups (like `text-xxs`) prevents subtle merge bugs across the library.

8. **Tighter TypeScript types.** `useComponentTheme` now accepts `keyof ReablocksTheme['components']` instead of `string`, catching typos at compile time.

9. **Legacy theme removal.** Eliminates the confusing dual-export of `theme` + `legacyThemeVars` from master, which was a source of confusion for consumers.

10. **ThemeProviderProps exported.** Enables consumers to type their own wrapper components correctly.

## Weaknesses / Issues

1. **Bundle size doubling.** Both `theme` and `themeUnify` (each with 51 component theme objects containing long Tailwind class strings) are statically imported in `ThemeProvider.tsx`. There is no code splitting or lazy loading. Consumers who only use one variant still pay for both in their bundle.

2. **`types.ts` deletion is a breaking change.** Master exports `Palette`, `Scale`, `Sizes`, `Colors`, `Theme`, etc. from `types.ts`. Removing this file without a migration path breaks any consumer importing those types. No deprecation warning or re-export shim is provided.

3. **SSR test appears incorrect.** The test "should use default theme initially before client-side mount" asserts `contextValue.theme` equals `defaultTheme` when `variant="unify"`, but `useState(() => getBaseTheme('unify'))` initializes to `themeUnify`. This test may be passing for the wrong reasons (e.g., `useEffect` runs synchronously in the test environment recalculating the theme). If this test is actually correct, it means there's a bug where unify users briefly see the default theme before the effect runs.

4. **`extendCoponentTheme.ts` typo persists.** The filename is misspelled (missing 'm' in "Component"). This has been there since master but was not fixed in the refactor, which would have been the ideal time.

5. **No lazy loading of `themeUnify`.** The `ThemeProvider` statically imports `themeUnify` at the module level. A `React.lazy`/dynamic-import approach would let the unify theme be tree-shaken when `variant="unify"` is never used.

6. **`getThemeVariables()` called unconditionally.** The token-reading `useEffect` runs regardless of whether the consumer cares about CSS variable tokens. For `variant="custom"` where the consumer supplies everything, this is wasted work and can cause CORS warnings in dev.

7. **`variant` change is warned but still applied.** The warning says "not supported and may cause styling issues" but the variant is still changed via `setBaseTheme`. This is confusing -- either block the change or don't warn. The current behavior is a half-measure that could lead to hard-to-debug issues.

8. **No `getThemeVariables` SSR guard.** `getThemeVariables()` accesses `document.documentElement` and `document.styleSheets`. While it runs inside `useEffect` (client-only), there's no try-catch or `typeof document` guard. If someone calls it outside of React (e.g., in a utility), it will throw in SSR.

9. **`isCompleteTheme` check is weak.** It only verifies `'components' in t && typeof t.components === 'object'`. A theme with `components: {}` (zero component definitions) passes this check but would cause runtime errors when any component tries to read its theme.

10. **No migration guide.** The branch renames `theme.ts` to `default.ts`, renames all `*Theme` exports (e.g., `buttonTheme` to `defaultButtonTheme`), removes `legacyThemeVars`, and removes `types.ts`. There's no codemods, deprecation warnings, or documentation for consumers to follow when upgrading.

11. **`observeThemeSwitcher` callback type mismatch.** The helper types its callback as `(theme: string) => void` but the ThemeProvider passes `() => setTokens(getThemeVariables())` -- a void callback that ignores the theme parameter. This works but the API is inconsistent.

12. **`'custom'` variant uses `defaultTheme` as base.** When `variant="custom"` and no `theme` prop is provided, the consumer gets the full default Tailwind theme. This seems unintentional for a "custom" variant -- consumers might expect an empty/minimal base theme instead.

13. **No integration test between `extendTheme` and the dual-theme system.** The `extendTheme` tests use a minimal mock theme. There are no tests verifying that `extendTheme(themeUnify, overrides)` works correctly or that `extendTheme(theme, overrides)` preserves type compatibility.
