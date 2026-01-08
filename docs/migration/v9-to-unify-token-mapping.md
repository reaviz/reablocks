# v9 to Unify Token Mapping

This guide provides a best-effort mapping of v9 theme tokens to Unify (Unify Design System) tokens for migration purposes.

## Overview

- **v9 Theme**: Uses simplified Tailwind utilities and semantic color tokens (e.g., `bg-primary`, `text-text-secondary`)
- **Unify Theme**: Uses a two-tier approach:
  1. **Unify Component Tokens**: Component-specific tokens from the Unify Design System (e.g., `bg-buttons-colors-core-icon-primary-background-resting`)
  2. **Semantic Token Layer**: v9-style tokens mapped to Unify design tokens for components without Unify component equivalents (e.g., `bg-panel` → `var(--background-neutral-raised-base)`)

## Important: Tailwind Palette Utilities When Opting Into Unify

The Unify CSS (`reablocks/unify.css`) intentionally disables Tailwind’s default palette tokens (e.g., `gray-*`, `slate-*`, `blue-*`, `neutral-*`). If your application still uses raw palette utilities like `text-gray-700` or `bg-blue-500`, those usages may not render as expected when you opt into the Unify variant.

### Recommended Migration Approach

- Prefer **semantic tokens** (v9-style) such as `text-text-primary`, `text-text-secondary`, `bg-panel`, `border-panel-accent`.
- Prefer **Unify component tokens** where Unify provides them (e.g., `bg-inputs-colors-normal-background-resting`).

### Optional Compatibility Layer (If You Need Minimum Friction)

If you need a smoother adoption path (e.g., you have lots of legacy `text-gray-*` usage), you can temporarily use the compatibility build:

```javascript
import 'reablocks/unify-compat.css';
```

This provides a limited set of palette aliases (e.g., `gray-*`, `slate-*`, `blue-500`) mapped to approximate Unify neutrals/brand. This is an approximation and should be treated as transitional.

If you require strict Unify compliance, do not add palette aliases and instead migrate raw palette utilities directly.

## Component Coverage

### Components with Full Unify Component Token Mappings
The following components use Unify component-specific tokens (documented in detail below):
- Avatar, AvatarGroup
- Badge
- Breadcrumbs
- Button (primary, secondary, error variants use Unify tokens; success, warning variants use semantic tokens)*
- Calendar, CalendarRange, DateInput
- Checkbox
- Chip
- Input, Textarea
- List (uses navigation-colors-*)
- Menu (uses navigation-colors-*)
- Notification/Toast
- Radio
- Select
- Tabs
- Toggle (Switch)
- Tooltip

**Important Note:** Success and warning button variants intentionally use the semantic token layer because Unify does not provide `success` or `warning` button variants at the component token level. These variants map to Unify semantic colors (e.g., `var(--background-semantic-success-base)`) to maintain semantic parity with v9 while staying within Unify's design system constraints.

### Components Using Semantic Token Layer
The following components use the semantic token layer (v9-style tokens mapped to Unify design tokens) **because Unify does not provide component-specific tokens for them**:
- Card
- Callout
- Dialog
- Divider
- Drawer
- Kbd
- Pager
- Popover
- Range
- Redact
- Sort
- Stack
- Stepper
- Tree
- Typography

**Why Semantic Layer?** These components use tokens like `bg-panel`, `text-text-primary`, and `border-panel-accent` which map to Unify level-2 design tokens (e.g., `var(--background-neutral-raised-base)`, `var(--content-text-neutral-base)`). This approach:
- ✅ Renders components with correct Unify design system colors
- ✅ Preserves the v9-style semantic token API for components without Unify component tokens
- ✅ Uses authentic Unify design tokens (level-2) where component tokens (level-3) don't exist
- ❌ Does not provide component-level styling nuances (stroke, asset tokens, granular states)

**Design Decision:** This is the correct architectural approach given Unify's token coverage. Creating fake "component tokens" for these would be misleading and potentially conflict with future Unify additions.

See the [Semantic Color Tokens](#semantic-color-tokens) section for detailed mappings.

**Note**: Token names and mappings in this guide are verified against the Unify CSS shipped with this version of `reablocks`. Unify token sets can evolve; if a token is missing in your build, prefer the semantic token layer or provide a custom theme override.

## CSS Import

### v9 (Default)
```javascript
import 'reablocks/index.css';
```

### Unify
```javascript
import 'reablocks/unify.css';
```

## ThemeProvider Configuration

### v9 (Default)
```jsx
import { ThemeProvider } from 'reablocks';

<ThemeProvider>
  <App />
</ThemeProvider>
```

### Unify
```jsx
import { ThemeProvider } from 'reablocks';

<ThemeProvider variant="Unify">
  <App />
</ThemeProvider>
```

## Component Token Mappings

### Button

#### v9 → Unify Primary Button (Filled)
- **Background (Resting)**: `bg-primary` → `bg-buttons-colors-core-icon-primary-background-resting`
- **Background (Hover)**: `hover:bg-primary-hover` → `hover:bg-buttons-colors-core-icon-primary-background-hover`
- **Border**: `border-primary` → `border-buttons-colors-core-icon-primary-stroke-resting`
- **Text**: `text-text-primary` → `text-buttons-colors-core-icon-primary-text-resting`

#### v9 → Unify Secondary Button (Filled)
- **Background (Resting)**: `bg-secondary` → `bg-buttons-colors-core-icon-secondary-background-resting`
- **Background (Hover)**: `hover:bg-secondary-hover` → `hover:bg-buttons-colors-core-icon-secondary-background-hover`
- **Border**: `border-secondary` → `border-buttons-colors-core-icon-secondary-stroke-resting`
- **Text**: `text-text-primary` → `text-buttons-colors-core-icon-secondary-text-resting`

#### v9 → Unify Success Button (via Semantic Tokens)

**Note**: Unify does not have `success` button variant. Success buttons use the [semantic token layer](#semantic-color-tokens) to maintain semantic parity with v9.

- **Background (Resting)**: `bg-success` → `bg-success` (mapped to `var(--background-semantic-success-base)`)
- **Background (Hover)**: `hover:bg-success-hover` → `hover:bg-success-hover` (mapped to `var(--background-semantic-success-1)`)
- **Border**: `border-success` → `border-success` (mapped to `var(--background-semantic-success-base)`)
- **Text**: `text-text-primary` → `text-text-primary` (mapped to `var(--content-text-neutral-base)`)

#### v9 → Unify Warning Button (via Semantic Tokens)

**Note**: Unify does not have `warning` button variant. Warning buttons use the [semantic token layer](#semantic-color-tokens) to maintain semantic parity with v9.

- **Background (Resting)**: `bg-warning` → `bg-warning` (mapped to `var(--background-semantic-warning-base)`)
- **Background (Hover)**: `hover:bg-warning-hover` → `hover:bg-warning-hover` (mapped to `var(--background-semantic-warning-1)`)
- **Border**: `border-warning` → `border-warning` (mapped to `var(--background-semantic-warning-base)`)
- **Text**: `text-text-primary` → `text-text-primary` (mapped to `var(--content-text-neutral-base)`)

#### v9 → Unify Error Button (Filled)
- **Background (Resting)**: `bg-error` → `bg-buttons-colors-core-icon-destructive-background-resting`
- **Background (Hover)**: `hover:bg-error-hover` → `hover:bg-buttons-colors-core-icon-destructive-background-hover`
- **Border**: `border-error` → `border-buttons-colors-core-icon-destructive-stroke-resting`
- **Text**: `text-text-primary` → `text-buttons-colors-core-icon-destructive-text-resting`

### Input

#### v9 → Unify Input Field
- **Background**: `bg-panel` → `bg-inputs-colors-normal-background-resting`
- **Border**: `border-panel-accent` → `border-inputs-colors-normal-stroke-resting`
- **Border (Hover)**: `hover:border-primary` → `hover:border-inputs-colors-normal-stroke-hover`
- **Border (Focus)**: `focus:border-primary` → `focus:border-inputs-colors-normal-stroke-selected`
- **Text**: `text-text-primary` → `text-inputs-colors-normal-text-input-text-resting`
- **Icon**: `text-text-secondary` → `[&>svg]:fill-inputs-colors-normal-assets-input-resting`

#### v9 → Unify Error State
- **Background**: `bg-error-background` → `bg-inputs-colors-error-background-resting`
- **Border**: `border-error` → `border-inputs-colors-error-stroke-resting`
- **Border (Hover)**: `hover:border-error` → `hover:border-inputs-colors-error-stroke-hover`
- **Text**: `text-error` → `text-inputs-colors-error-text-input-filled`

### Checkbox

#### v9 → Unify Checkbox
- **Background (Not Selected)**: `bg-panel` → `bg-selectors-colors-checkbox-not-selected-background-resting`
- **Background (Selected)**: `checked:bg-primary` → `checked:bg-selectors-colors-checkbox-selected-background-resting`
- **Border (Not Selected)**: `border-panel-accent` → `border-selectors-colors-checkbox-not-selected-stroke-resting`
- **Border (Selected)**: `checked:border-primary` → `checked:border-selectors-colors-checkbox-selected-stroke-resting`
- **Icon**: `text-white` → `stroke-selectors-colors-checkbox-selected-assets-base`

### Radio

#### v9 → Unify Radio Button
- **Background (Not Selected)**: `bg-transparent` → `bg-selectors-colors-radio-not-selected-background-resting`
- **Background (Selected)**: `checked:bg-primary` → `checked:bg-selectors-colors-radio-selected-background-resting`
- **Border (Not Selected)**: `border-panel-accent` → `border-selectors-colors-radio-not-selected-stroke-resting`
- **Border (Selected)**: `checked:border-primary` → `checked:border-selectors-colors-radio-selected-stroke-resting`
- **Dot**: `bg-primary` → `bg-selectors-colors-radio-selected-assets-base`

### Toggle (Switch)

#### v9 → Unify Toggle
- **Background (Off)**: `bg-surface` → `bg-selectors-colors-toggle-off-background-resting`
- **Background (On)**: `checked:bg-primary` → `checked:bg-selectors-colors-toggle-on-background-resting`
- **Border (Off)**: `border-panel-accent` → `border-selectors-colors-toggle-off-stroke-resting`
- **Border (On)**: `checked:border-primary` → `checked:border-selectors-colors-toggle-on-stroke-resting`
- **Thumb (Off)**: `bg-panel` → `bg-selectors-colors-toggle-off-assets-resting`
- **Thumb (On)**: `bg-panel` → `bg-selectors-colors-toggle-on-assets-resting`

### Select

#### v9 → Unify Select
- **Background**: `bg-panel` → `bg-inputs-colors-normal-background-resting`
- **Border**: `border-panel-accent` → `border-inputs-colors-normal-stroke-resting`
- **Border (Hover)**: `hover:border-primary` → `hover:border-inputs-colors-normal-stroke-hover`
- **Text**: `text-text-primary` → `text-inputs-colors-normal-text-input-text-resting`
- **Icon**: `text-text-secondary` → `[&>svg]:fill-inputs-colors-normal-assets-input-resting`

### Chip

#### v9 → Unify Chip (Filled)
- **Background**: `bg-primary` → `bg-tags-colors-brand-background-resting`
- **Background (Hover)**: `hover:bg-primary-hover` → `hover:bg-tags-colors-brand-background-hover`
- **Border**: `border-primary` → `border-tags-colors-brand-stroke-resting`
- **Text**: `text-panel` → `text-tags-colors-brand-text-label-base`

#### v9 → Unify Chip (Selectable)
- **Background (Selected)**: `bg-primary` → `bg-tags-colors-brand-background-selected`
- **Border (Selected)**: `border-primary` → `border-tags-colors-brand-stroke-selected`
- **Text (Selected)**: `text-panel` → `text-tags-colors-brand-text-label-base`

### Badge

#### v9 → Unify Badge
- **Background**: `bg-primary` → `bg-badges-colors-solid-brand-background-standard`
- **Border**: `border-primary` → `border-badges-colors-solid-brand-stroke-default`
- **Text**: `text-white` → `text-badges-colors-solid-brand-text-default`

### Card

**Note**: Card does not have Unify component-specific tokens and uses the [semantic token layer](#semantic-color-tokens).

#### v9 → Unify Card (via Semantic Tokens)
- **Background**: `bg-panel` → `bg-panel` (mapped to `var(--background-neutral-raised-base)`)
- **Border**: `border-panel-accent` → `border-panel-accent` (mapped to `var(--background-neutral-raised-1)`)
- **Text**: `text-text-primary` → `text-text-primary` (mapped to `var(--content-text-neutral-base)`)

The Card component continues to use v9-style semantic tokens which are automatically mapped to Unify design tokens through the semantic token layer. No code changes are required when switching to the Unify variant.

### Callout

**Note**: Callout does not have Unify component-specific tokens and uses the [semantic token layer](#semantic-color-tokens).

#### v9 → Unify Callout (via Semantic Tokens)
- **Default Background**: `bg-panel-background` → `bg-panel-background` (mapped to `var(--background-neutral-raised-base)`)
- **Default Border**: `border-panel-accent` → `border-panel-accent` (mapped to `var(--background-neutral-raised-1)`)
- **Success Background**: `bg-success-background` → `bg-success-background` (mapped to `var(--background-semantic-success-5)`)
- **Success Border**: `border-success` → `border-success` (mapped to `var(--background-semantic-success-base)`)
- **Success Icon**: `text-success` → `text-success` (mapped to `var(--background-semantic-success-base)`)
- **Error Background**: `bg-error-background` → `bg-error-background` (mapped to `var(--background-semantic-error-5)`)
- **Error Border**: `border-error` → `border-error` (mapped to `var(--background-semantic-error-base)`)
- **Error Icon**: `text-error` → `text-error` (mapped to `var(--background-semantic-error-base)`)
- **Warning Background**: `bg-warning-background` → `bg-warning-background` (mapped to `var(--background-semantic-warning-5)`)
- **Warning Border**: `border-warning` → `border-warning` (mapped to `var(--background-semantic-warning-base)`)
- **Warning Icon**: `text-warning` → `text-warning` (mapped to `var(--background-semantic-warning-base)`)
- **Info Background**: `bg-info-background` → `bg-info-background` (mapped to `var(--background-semantic-info-5)`)
- **Info Border**: `border-info` → `border-info` (mapped to `var(--background-semantic-info-base)`)
- **Info Icon**: `text-info` → `text-info` (mapped to `var(--background-semantic-info-base)`)

### Calendar

#### v9 → Unify Calendar
- **Container Background**: `bg-transparent` → `bg-calendar-colors-container-background-default`
- **Header Text**: `text-text-secondary` → `text-calendar-colors-header-text-default`
- **Label Text**: `text-text-secondary` → `text-calendar-colors-label-text-default`
- **Date Background (Resting)**: `bg-transparent` → `bg-transparent` (uses calendar-colors-date-background-resting)
- **Date Background (Hover)**: `hover:bg-primary-hover` → `hover:bg-calendar-colors-date-background-hover`
- **Date Background (Selected)**: `bg-primary` → `bg-calendar-colors-date-background-selected`
- **Date Background (Today)**: `bg-transparent` → `bg-calendar-colors-date-background-today`
- **Date Text (Resting)**: `text-text-secondary` → `text-calendar-colors-date-text-resting`
- **Date Text (Hover)**: `hover:text-black` → `hover:text-calendar-colors-date-text-hover`
- **Date Text (Selected)**: `text-white` → `text-calendar-colors-date-text-selected`
- **Date Border (Today)**: `border-panel-accent` → `border-calendar-colors-date-stroke-today`

### Notification/Toast

#### v9 → Unify Notification (Neutral/Default)
- **Background**: `bg-panel` → `bg-notifications-colors-background-neutral-resting`
- **Border**: `border-panel-accent` → `border-notifications-colors-stroke-neutral-resting`
- **Text**: `text-text-primary` → `text-notifications-colors-text-normal-resting`
- **Title**: `text-text-primary` → `text-notifications-colors-text-title-resting`

#### v9 → Unify Notification (Success)
- **Background**: `bg-success-background` → `bg-notifications-colors-background-success-resting`
- **Border**: `border-success` → `border-notifications-colors-stroke-success-resting`
- **Icon**: `text-success` → `text-notifications-colors-assets-success-resting`

#### v9 → Unify Notification (Error)
- **Background**: `bg-error-background` → `bg-notifications-colors-background-error-resting`
- **Border**: `border-error` → `border-notifications-colors-stroke-error-resting`
- **Icon**: `text-error` → `text-notifications-colors-assets-destructive-resting`

#### v9 → Unify Notification (Warning)
- **Background**: `bg-warning-background` → `bg-notifications-colors-background-neutral-resting`
- **Border**: `border-warning` → `border-notifications-colors-stroke-warning-resting`
- **Icon**: `text-warning` → `text-notifications-colors-assets-normal-resting`

#### v9 → Unify Notification (Info)
- **Background**: `bg-info-background` → `bg-notifications-colors-background-neutral-resting`
- **Border**: `border-info` → `border-notifications-colors-stroke-info-resting`
- **Icon**: `text-info` → `text-notifications-colors-assets-normal-resting`

### Dialog

**Note**: Dialog does not have Unify component-specific tokens and uses the [semantic token layer](#semantic-color-tokens).

#### v9 → Unify Dialog (via Semantic Tokens)
- **Background**: `bg-panel` → `bg-panel` (mapped to `var(--background-neutral-raised-base)`)
- **Border**: `border-panel-accent` → `border-panel-accent` (mapped to `var(--background-neutral-raised-1)`)
- **Text**: `text-text-primary` → `text-text-primary` (mapped to `var(--content-text-neutral-base)`)
- **Close Button**: `text-text-primary` → `text-text-primary` (mapped to `var(--content-text-neutral-base)`)

### Divider

**Note**: Divider does not have Unify component-specific tokens and uses the [semantic token layer](#semantic-color-tokens).

#### v9 → Unify Divider (via Semantic Tokens)
- **Primary Variant**: `bg-surface` → `bg-surface` (mapped to `var(--background-neutral-canvas-base)`)
- **Secondary Variant**: Uses gradient with `via-blue-500` (custom styling, not mapped)

### Drawer

**Note**: Drawer does not have Unify component-specific tokens and uses the [semantic token layer](#semantic-color-tokens).

#### v9 → Unify Drawer (via Semantic Tokens)
- **Background**: `bg-panel` → `bg-panel` (mapped to `var(--background-neutral-raised-base)`)
- **Text**: `text-text-primary` → `text-text-primary` (mapped to `var(--content-text-neutral-base)`)

### List

#### v9 → Unify List (using navigation-colors-*)
- **Base Text**: `text-text-primary` → `text-navigation-colors-text-resting`
- **Header Text**: `text-text-primary` → `text-navigation-colors-text-static`
- **Item Background (Resting)**: N/A → `bg-navigation-colors-background-row-items-resting`
- **Item Background (Hover)**: `hover:bg-panel-accent` → `hover:bg-navigation-colors-background-row-items-hover`
- **Item Background (Selected)**: N/A → `bg-navigation-colors-background-row-items-selected`
- **Item Text (Resting)**: `text-text-primary` → `text-navigation-colors-text-resting`
- **Item Text (Hover)**: `hover:text-mystic` → `hover:text-navigation-colors-text-hover`
- **Item Text (Selected)**: N/A → `text-navigation-colors-text-selected`
- **Item Border (Resting)**: N/A → `border-navigation-colors-stroke-row-items-resting`
- **Item Border (Hover)**: N/A → `hover:border-navigation-colors-stroke-row-items-hover`
- **Item Border (Selected)**: N/A → `border-navigation-colors-stroke-row-items-selected`
- **Disabled Text**: `text-text-secondary` → `text-navigation-colors-text-static`

### Menu

#### v9 → Unify Menu (using navigation-colors-*)
- **Container Background**: N/A → `bg-navigation-colors-background-container-base`
- **Container Border**: N/A → `border-navigation-colors-stroke-container-base`
- **Text**: `text-text-primary` → `text-navigation-colors-text-resting`

### Pager

**Note**: Pager does not have Unify component-specific tokens and uses the [semantic token layer](#semantic-color-tokens).

#### v9 → Unify Pager (via Semantic Tokens)
- **Active Page**: `text-text-primary` → `text-text-primary` (mapped to `var(--content-text-neutral-base)`)
- **Inactive Page**: `text-slate-500` (custom styling, not mapped to Unify design tokens)

### Popover

**Note**: Popover does not have Unify component-specific tokens and uses the [semantic token layer](#semantic-color-tokens).

#### v9 → Unify Popover (via Semantic Tokens)
- **Background**: `bg-panel` → `bg-panel` (mapped to `var(--background-neutral-raised-base)`)
- **Text**: `text-text-primary` → `text-text-primary` (mapped to `var(--content-text-neutral-base)`)

### Range

**Note**: Range does not have Unify component-specific tokens and uses the [semantic token layer](#semantic-color-tokens).

#### v9 → Unify Range (via Semantic Tokens)
- **Base Background**: `bg-surface` → `bg-surface` (mapped to `var(--background-neutral-canvas-base)`)
- **Active Background**: `bg-primary-active` → `bg-primary-active` (mapped to `var(--background-brand-base)`)
- **Hover Background**: `hover:bg-primary-hover` → `hover:bg-primary-hover` (mapped to `var(--background-brand-1)`)
- **Disabled Background**: `bg-secondary-inactive` → `bg-secondary-inactive` (mapped to `var(--background-neutral-raised-3)`)
- **Tooltip Text**: `text-text-primary` → `text-text-primary` (mapped to `var(--content-text-neutral-base)`)
- **Tooltip Background**: `bg-surface` → `bg-surface` (mapped to `var(--background-neutral-canvas-base)`)

### Redact

**Note**: Redact does not have Unify component-specific tokens and uses the [semantic token layer](#semantic-color-tokens).

#### v9 → Unify Redact (via Semantic Tokens)
- **Text**: `text-text-primary` → `text-text-primary` (mapped to `var(--content-text-neutral-base)`)

### Sort

**Note**: Sort does not have Unify component-specific tokens and uses the [semantic token layer](#semantic-color-tokens).

#### v9 → Unify Sort (via Semantic Tokens)
- **Text**: `text-text-primary` → `text-text-primary` (mapped to `var(--content-text-neutral-base)`)
- **Icon**: `fill-current` (inherits text color)

### Stack

**Note**: Stack does not have Unify component-specific tokens and uses the [semantic token layer](#semantic-color-tokens).

#### v9 → Unify Stack (via Semantic Tokens)
- **Text**: `text-text-primary` → `text-text-primary` (mapped to `var(--content-text-neutral-base)`)

### Stepper

**Note**: Stepper does not have Unify component-specific tokens and uses the [semantic token layer](#semantic-color-tokens).

#### v9 → Unify Stepper (via Semantic Tokens)
- **Border**: `border-panel-accent` → `border-panel-accent` (mapped to `var(--background-neutral-raised-1)`)
- **Marker Background**: `bg-surface` → `bg-surface` (mapped to `var(--background-neutral-canvas-base)`)
- **Active Marker**: `bg-info` → `bg-info` (mapped to `var(--background-semantic-info-base)`)
- **Active Border**: `border-primary` → `border-primary` (mapped to `var(--background-brand-base)`)
- **Active Label Border**: `border-info` → `border-info` (mapped to `var(--background-semantic-info-base)`)
- **Active Label Background**: `bg-info-background` → `bg-info-background` (mapped to `var(--background-semantic-info-5)`)
- **Label Border**: `border-surface` → `border-surface` (mapped to `var(--background-neutral-canvas-base)`)

### Textarea

**Note**: Textarea uses the same Unify tokens as Input. See [Input](#input) for token mappings.

#### v9 → Unify Textarea
- Same token mappings as Input component
- **Background**: `bg-inputs-colors-normal-background-resting`
- **Border**: `border-inputs-colors-normal-stroke-resting`
- **Border (Hover)**: `hover:border-inputs-colors-normal-stroke-hover`
- **Text**: `text-inputs-colors-normal-text-input-text-resting`
- **Placeholder**: `placeholder:text-inputs-colors-normal-text-input-text-resting`
- **Error Background**: `bg-inputs-colors-error-background-resting`
- **Error Border**: `border-inputs-colors-error-stroke-resting`

### Tree

**Note**: Tree does not have Unify component-specific tokens and uses the [semantic token layer](#semantic-color-tokens).

#### v9 → Unify Tree (via Semantic Tokens)
- **Text**: `text-text-primary` → `text-text-primary` (mapped to `var(--content-text-neutral-base)`)
- **Arrow Icon**: `fill-text-primary` → `fill-text-primary` (uses `var(--content-text-neutral-base)`)
- **Button Icon**: `fill-text-primary` → `fill-text-primary` (uses `var(--content-text-neutral-base)`)

### Typography

**Note**: Typography does not have Unify component-specific tokens and uses the [semantic token layer](#semantic-color-tokens).

#### v9 → Unify Typography (via Semantic Tokens)
- **Primary**: `text-primary` → `text-primary` (mapped to `var(--background-brand-base)`)
- **Secondary**: `text-secondary` → `text-secondary` (mapped to `var(--background-neutral-raised-1)`)
- **Success**: `text-success` → `text-success` (mapped to `var(--background-semantic-success-base)`)
- **Warning**: `text-warning` → `text-warning` (mapped to `var(--background-semantic-warning-base)`)
- **Error**: `text-error` → `text-error` (mapped to `var(--background-semantic-error-base)`)
- **Info**: `text-info` → `text-info` (mapped to `var(--background-semantic-info-base)`)

## Semantic Color Tokens

### v9 → Unify Semantic Mappings

The Unify variant includes a semantic token layer (`semantic-tokens.css`) that maps v9 tokens to Unify design tokens. This allows both token systems to coexist and provides a migration path.

**Note**: These mappings are automatically included when you import `reablocks/unify.css`.

#### Primary Colors
- `--primary` → `--background-brand-base`
- `--primary-hover` → `--background-brand-1`
- `--primary-active` → `--background-brand-base`
- `--primary-inactive` → `--background-brand-5`

#### Secondary Colors
- `--secondary` → `--background-neutral-raised-1`
- `--secondary-hover` → `--background-neutral-raised-2`
- `--secondary-active` → `--background-neutral-raised-1`
- `--secondary-inactive` → `--background-neutral-raised-3`

#### Success Colors
- `--success` → `--background-semantic-success-base`
- `--success-hover` → `--background-semantic-success-1`
- `--success-active` → `--background-semantic-success-base`
- `--success-background` → `--background-semantic-success-5`

#### Error Colors
- `--error` → `--background-semantic-error-base`
- `--error-hover` → `--background-semantic-error-1`
- `--error-active` → `--background-semantic-error-base`
- `--error-background` → `--background-semantic-error-5`

#### Warning Colors
- `--warning` → `--background-semantic-warning-base`
- `--warning-hover` → `--background-semantic-warning-1`
- `--warning-active` → `--background-semantic-warning-base`
- `--warning-background` → `--background-semantic-warning-5`

#### Info Colors
- `--info` → `--background-semantic-info-base`
- `--info-hover` → `--background-semantic-info-1`
- `--info-active` → `--background-semantic-info-base`
- `--info-background` → `--background-semantic-info-5`

#### Panel Colors
- `--panel` → `--background-neutral-raised-base`
- `--panel-accent` → `--background-neutral-raised-1`
- `--panel-border` → `--stroke-neutral-base`

#### Surface Colors
- `--surface` → `--background-neutral-canvas-base`
- `--surface-accent` → `--background-brand-base`

#### Text Colors
- `--text-primary` → `--content-text-neutral-base`
- `--text-secondary` → `--content-text-neutral-3`

#### Border Colors
- `--border-secondary-hover` → `--stroke-neutral-1`

### Semantic Token Layer Benefits

The semantic token layer provides:
1. **Backwards Compatibility**: v9-style tokens work in Unify variant
2. **Migration Path**: Gradually replace semantic tokens with component-specific Unify tokens
3. **Flexibility**: Use simple tokens for utility components, detailed tokens for design system components
4. **No Breaking Changes**: Existing v9 code works when switching to Unify variant

## Migration Strategy

### Approach 1: Incremental Migration (Recommended)
1. Keep using v9 theme (default) for existing applications
2. New features/components can optionally use Unify variant
3. No breaking changes for existing users

### Approach 2: Full Migration to Unify
1. Import Unify CSS: `import 'reablocks/unify.css'`
2. Update ThemeProvider: `<ThemeProvider variant="Unify">`
3. Custom theme overrides will automatically use Unify tokens
4. Review and update any custom component styles that reference v9 tokens

## Important: Variant Selection

The `variant` prop should be **set once at app initialization** and **not changed at runtime**.

**Why?**
- Each variant requires its corresponding CSS file (v9 || Unify)
- Runtime switching requires loading both CSS files
- Changing variants without the corresponding CSS loaded will result in unstyled components
- May cause flash of unstyled content (FOUC)

**If you need runtime switching** (theme preview, admin panel, etc.):
```jsx
// Import BOTH CSS files (not recommended for production)
import 'reablocks/index.css';
import 'reablocks/unify.css';

// Then you can switch at runtime
<ThemeProvider variant={userSelectedVariant}>
  <App />
</ThemeProvider>
```

**Recommended pattern** (set once):
```jsx
// Choose one CSS file based on your variant
import 'reablocks/unify.css';

// Set variant once at root
<ThemeProvider variant="Unify">
  <App />
</ThemeProvider>
```

## Custom Theme Overrides

### v9 Custom Theme
```jsx
<ThemeProvider
  theme={{
    components: {
      button: {
        colors: {
          primary: {
            filled: 'bg-my-custom-color hover:bg-my-custom-hover'
          }
        }
      }
    }
  }}
>
  <App />
</ThemeProvider>
```

### Unify Custom Theme
```jsx
<ThemeProvider
  variant="Unify"
  theme={{
    components: {
      button: {
        colors: {
          primary: {
            filled: 'bg-my-custom-color hover:bg-my-custom-hover'
          }
        }
      }
    }
  }}
>
  <App />
</ThemeProvider>
```

## Light/Dark Mode

### v9
Light/dark mode is handled through CSS custom properties that change based on `.theme-light` or `.theme-dark` classes or `data-theme` attribute.

### Unify
Unify tokens include built-in light/dark mode support through `theme-light.css` and `theme-dark.css` which automatically respond to theme changes.

### Tabs

#### v9 → Unify Tabs
- **Tab Background (Resting)**: `bg-transparent` → `bg-tabs-colors-contained-background-resting`
- **Tab Background (Hover)**: `hover:bg-panel-accent` → `hover:bg-tabs-colors-contained-background-hover`
- **Tab Background (Selected)**: `bg-transparent` → `bg-tabs-colors-contained-background-selected`
- **Tab Text (Resting)**: `text-text-secondary` → `text-tabs-colors-contained-text-resting`
- **Tab Text (Hover)**: `hover:text-primary-hover` → `hover:text-tabs-colors-contained-text-hover`
- **Tab Text (Selected)**: `text-text-primary` → `text-tabs-colors-contained-text-selected`
- **Indicator**: `bg-primary` → `bg-tabs-colors-contained-background-selected`

### Tooltip

#### v9 → Unify Tooltip
- **Background**: `bg-panel-accent` → `bg-tooltip-colors-neutral-background-default`
- **Text**: `text-text-primary` → `text-tooltip-colors-neutral-text-default`

### Breadcrumbs

#### v9 → Unify Breadcrumbs
- **Link Text (Resting)**: `text-text-secondary` → `text-breadcrumbs-colors-primary-text-resting`
- **Link Text (Hover)**: `hover:text-text-primary` → `hover:text-breadcrumbs-colors-primary-text-hover`
- **Link Text (Selected)**: `text-primary` → `text-breadcrumbs-colors-primary-text-selected`
- **Icon (Resting)**: N/A → `[&>svg]:fill-breadcrumbs-colors-primary-assets-resting`
- **Icon (Hover)**: N/A → `hover:[&>svg]:fill-breadcrumbs-colors-primary-assets-hover`

### Avatar

#### v9 → Unify Avatar
- **Background**: `bg-cover` → `bg-avatar-colors-background-container-resting`
- **Border**: N/A → `border-avatar-colors-stroke-container-resting`
- **Text**: `text-white` → `text-avatar-colors-text-resting`

## Notes

### Unify Two-Tier Token Approach

The Unify variant uses a two-tier approach to reduce migration churn while leveraging the Unify Design System:

1. **Unify Component Tokens** (Tier 1): Components use Unify component-specific tokens where Unify provides them (e.g., `bg-buttons-colors-core-icon-primary-background-resting`). These provide the most granular control and align directly with the Unify Design System.

2. **Semantic Token Layer** (Tier 2): Components without Unify component equivalents use v9-style semantic tokens (e.g., `bg-panel`, `text-text-primary`) that are automatically mapped to Unify design tokens (e.g., `var(--background-neutral-raised-base)`). This provides backwards compatibility while still leveraging Unify design system colors.

### Token Naming Patterns

- **Unify Component Tokens**: Follow verbose, explicit naming for clarity
  - Pattern: `{component}-colors-{element}-{property}-{state}`
  - State variants: `resting`, `hover`, `selected` (not `focused`/`pressed` for most components)
  - Borders use `stroke-*` not `border-*`
  - Text uses `text-*` not `foreground-*`
  - Icons/assets use `assets-*` or require `[&>svg]:fill-*` syntax

- **Semantic Tokens**: Follow v9-style shorter, semantic names
  - Optimized for developer experience
  - Automatically mapped to Unify design tokens
  - Defined in `src/assets/css/Unify/semantic-tokens.css`

### Migration Status

- **Designed for compatibility**: The Unify variant is intended to keep the same component APIs as v9 while changing the underlying token sources.
- **Migration scope**: Many existing v9 usages work unchanged when switching to the Unify variant, but usages that rely on raw Tailwind palette tokens (e.g., `text-gray-700`) may require remapping.
- **Backwards-compatible strategy**: Both the Unify component-token approach and the semantic token layer coexist in the Unify variant to reduce migration churn.
- **Ongoing evolution**: Token coverage and mappings may evolve as Unify and `reablocks` evolve; treat this guide as versioned documentation.

## Intentional Limitations and Design Decisions

This section documents architectural decisions, limitations, and trade-offs made during Unify theme implementation to provide transparency for consumers and maintainers.

### Success and Warning Button Variants

**Limitation**: Success and warning button variants use the semantic token layer rather than Unify component tokens.

**Why**: Unify provides component tokens for these button variants only:
- Primary (`buttons-colors-core-icon-primary-*`)
- Secondary (`buttons-colors-core-icon-secondary-*`)
- Destructive/Error (`buttons-colors-core-icon-destructive-*`)

Unify does **not** provide `success` or `warning` button variants at the component token level (level-3).

**Implementation**: Success and warning buttons use semantic tokens that map to Unify level-2 semantic colors:
- `bg-success` → `var(--background-semantic-success-base)`
- `bg-warning` → `var(--background-semantic-warning-base)`

**Impact**:
- ✅ Buttons render with correct Unify semantic colors
- ✅ Preserves v9-style semantics for success/warning variants
- ❌ Does not pick up Unify component-level states (stroke, asset, pressed states)
- ❌ Does not reflect granular component taxonomy from Unify Design System

**Recommendation**: If your application requires full Unify component-level parity for success/warning buttons, consider:
1. Using only primary/secondary/error variants that have full Unify component tokens
2. Requesting Unify team add success/warning button variants to the design system
3. Accepting this as an intentional semantic-parity limitation

### Components Using Semantic Token Layer

The following components use the semantic token layer because Unify does not provide component-specific tokens (level-3) for them:

- Card
- Callout
- Dialog
- Divider
- Drawer
- Kbd
- Pager
- Popover
- Range
- Redact
- Sort
- Stack
- Stepper
- Tree
- Typography

**Why**: These components use tokens like `bg-panel`, `text-text-primary`, `border-panel-accent` which map to Unify level-2 design tokens:
- `bg-panel` → `var(--background-neutral-raised-base)`
- `text-text-primary` → `var(--content-text-neutral-base)`
- `border-panel-accent` → `var(--background-neutral-raised-1)`

**This is architecturally correct** given Unify's current token coverage. Creating fake "component tokens" for these would:
- ❌ Be misleading about Unify design system coverage
- ❌ Potentially conflict with future Unify additions
- ❌ Create maintenance burden for non-standard tokens

**Impact**:
- ✅ Components render with correct Unify design system colors (level-2)
- ✅ Preserves the v9-style semantic token API for these components
- ✅ Uses authentic Unify design tokens where they exist
- ❌ Does not provide component-level styling nuances (granular stroke, asset, state tokens)
- ❌ Does not reflect full Unify component taxonomy (because it doesn't exist for these components)

**Recommendation**: If your application requires granular component-level control for these components:
1. Use custom theme overrides with component-specific tokens
2. Request Unify team add component tokens for these components
3. Accept that semantic-level tokens provide appropriate Unify color parity for utility components

### Token Coverage Summary

**Components with Unify component tokens** (level-3):
- Avatar, AvatarGroup, Badge, Breadcrumbs, Button (primary/secondary/error), Calendar, CalendarRange, DateInput, Checkbox, Chip, Input, Textarea, List, Menu, Notification/Toast, Radio, Select, Tabs, Toggle, Tooltip

**Components using the semantic token layer** (level-2 Unify design tokens):
- Card, Callout, Dialog, Divider, Drawer, Kbd, Pager, Popover, Range, Redact, Sort, Stack, Stepper, Tree, Typography
- Button success/warning variants (intentional limitation)

**Design Philosophy**:
- Use Unify component tokens (level-3) where they exist in the Unify Design System
- Use semantic tokens mapped to Unify design tokens (level-2) where component tokens don't exist
- Never create fake component tokens that don't exist in Unify
- Preserve the v9-style semantic token API where Unify component tokens don't exist

### When to Use Which Variant

**Use v9 Theme** if you:
- Prefer simpler, semantic token names (`bg-primary`, `text-secondary`)
- Want smaller CSS bundle size (v9 is typically smaller than the Unify variant)
- Are building prototypes, MVPs, or internal tools
- Don't need granular component-level token control

**Use Unify Theme** if you:
- Need compliance with Unify Design System
- Require granular component-level token control for supported components
- Are building enterprise applications with strict design system requirements
- Are migrating from Unify Design System
- Need component-specific states (resting, hover, selected, stroke, assets)

**Both variants**:
- Are shipped and versioned as part of `reablocks` (v9 is the default; Unify is opt-in)
- Provide the same component APIs
- Support custom theme overrides
- Support light/dark mode
- Use Tailwind CSS v4
