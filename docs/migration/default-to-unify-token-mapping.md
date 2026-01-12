# Default to Unify Token Mapping

This guide provides a best-effort mapping of Default theme tokens to Unify (Unify Design System) tokens for migration purposes.

## Overview

- **Default Theme**: Uses simplified Tailwind utilities and semantic color tokens (e.g., `bg-primary`, `text-text-secondary`)
- **Unify Theme**: Uses a two-tier approach:
  1. **Unify Component Tokens**: Component-specific tokens from the Unify Design System (e.g., `bg-buttons-colors-core-icon-primary-background-resting`)
  2. **Direct Design System Tokens**: Direct use of Unify design system tokens for components without Unify component equivalents (e.g., `bg-background-neutral-raised-base`, `text-content-text-neutral-base`)

## Migration Strategy

**Prefer these tokens in order:**
1. **Unify component tokens** (e.g., `bg-inputs-colors-normal-background-resting`)
2. **Direct design system tokens** (e.g., `bg-background-neutral-raised-base`, `text-content-text-neutral-base`)
3. **Tailwind palette utilities** (e.g., `text-gray-700`) - works but not integrated with Unify

**Note**: Semantic tokens (e.g., `bg-panel`, `text-text-primary`) are **only available in the default theme**. The Unify theme does not include semantic tokens - components use Unify component tokens or direct design system tokens instead.

**Need legacy palette support?** Use `reablocks/unify-compat.css` to map `gray-*`, `slate-*`, etc. to Unify colors. This is transitional - migrate to component/design system tokens when possible.

### Light and Dark Mode

**Default Theme**: Semantic tokens automatically adapt to light and dark mode. You no longer need to use `dark:` or `light:` Tailwind variants in theme files.

- **Before**: `dark:text-gray-400 light:text-gray-700` (explicit variants for each mode)
- **After**: `text-text-secondary` (automatically adapts based on active theme class)

**Unify Theme**: Design system tokens automatically adapt to light and dark mode through CSS variables that switch values based on the `.theme-dark` or `.theme-light` class on the document element.

**How it works:**
1. Theme CSS files (`theme-dark.css`, `theme-light.css`) define design system tokens conditionally
2. **Default theme**: Semantic tokens (`semantic-tokens.css`) map to these design system tokens
3. **Unify theme**: Components use Unify component tokens or direct design system tokens, which automatically resolve to the correct color for the active theme

This means you can use the same token in both light and dark modes, and it will automatically use the appropriate color value.

## Component Coverage

### Components with Full Unify Component Token Mappings
The following components use Unify component-specific tokens (documented in detail below):
- Avatar, AvatarGroup
- Badge
- Breadcrumbs
- Button (primary, secondary, error variants use Unify tokens; success, warning variants use direct design system tokens)*
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

*Note: Success/warning button variants use direct design system tokens because Unify doesn't provide component tokens for these variants.*

### Components Using Direct Design System Tokens
The following components use direct Unify design system tokens (e.g., `bg-background-neutral-raised-base`, `text-content-text-neutral-base`) **because Unify does not provide component-specific tokens for them**:
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

These components use direct design system tokens instead of semantic tokens. This provides correct styling but doesn't offer component-level customization granularity like Unify component tokens do.

## CSS Import

### Default
```javascript
import 'reablocks/index.css';
```

### Unify
```javascript
import 'reablocks/unify.css';
```

## ThemeProvider Configuration

### Default Theme
```jsx
import { ThemeProvider } from 'reablocks';

<ThemeProvider>
  <App />
</ThemeProvider>
```

### Unify Theme
```jsx
import { ThemeProvider } from 'reablocks';

<ThemeProvider variant="unify">
  <App />
</ThemeProvider>
```

### Custom Theme Overrides

By default, custom themes are merged with the base theme:

```jsx
<ThemeProvider
  variant="unify"
  theme={{
    components: {
      button: {
        colors: {
          primary: {
            filled: 'bg-purple-600 hover:bg-purple-700'
          }
        }
      }
    }
  }}
>
  <App />
</ThemeProvider>
```

### Fully Replacing the Theme

To fully replace the base theme instead of merging, use the `replaceTheme` prop:

```jsx
import { ThemeProvider } from 'reablocks';
import { theme as myCompleteTheme } from './my-custom-theme';

<ThemeProvider theme={myCompleteTheme} replaceTheme>
  <App />
</ThemeProvider>
```

**When to use `replaceTheme`:**
- Building a completely custom theme from scratch
- Replacing the entire theme structure
- When you don't want any base theme properties

**When to use default merging:**
- Overriding specific component styles
- Extending the default or Unify theme
- Making targeted customizations

**Note**: When `replaceTheme={true}`, the `variant` prop is ignored since no base theme is loaded.

## Component Token Mappings

### Button

#### Default → Unify Primary Button (Filled)
- **Background (Resting)**: `bg-primary` → `bg-buttons-colors-core-icon-primary-background-resting`
- **Background (Hover)**: `hover:bg-primary-hover` → `hover:bg-buttons-colors-core-icon-primary-background-hover`
- **Border**: `border-primary` → `border-buttons-colors-core-icon-primary-stroke-resting`
- **Text**: `text-text-primary` → `text-buttons-colors-core-icon-primary-text-resting`

#### Default → Unify Secondary Button (Filled)
- **Background (Resting)**: `bg-secondary` → `bg-buttons-colors-core-icon-secondary-background-resting`
- **Background (Hover)**: `hover:bg-secondary-hover` → `hover:bg-buttons-colors-core-icon-secondary-background-hover`
- **Border**: `border-secondary` → `border-buttons-colors-core-icon-secondary-stroke-resting`
- **Text**: `text-text-primary` → `text-buttons-colors-core-icon-secondary-text-resting`

#### Default → Unify Success Button (via Design System Tokens)

**Note**: Unify does not have `success` button variant. Success buttons use direct design system tokens to maintain semantic parity with Default.

- **Background (Resting)**: `bg-success` → `bg-background-semantic-success-base`
- **Background (Hover)**: `hover:bg-success-hover` → `hover:bg-background-semantic-success-1`
- **Border**: `border-success` → `border-background-semantic-success-base`
- **Text**: `text-text-primary` → `text-content-text-neutral-base`

#### Default → Unify Warning Button (via Design System Tokens)

**Note**: Unify does not have `warning` button variant. Warning buttons use direct design system tokens to maintain semantic parity with Default.

- **Background (Resting)**: `bg-warning` → `bg-background-semantic-warning-base`
- **Background (Hover)**: `hover:bg-warning-hover` → `hover:bg-background-semantic-warning-1`
- **Border**: `border-warning` → `border-background-semantic-warning-base`
- **Text**: `text-text-primary` → `text-content-text-neutral-base`

#### Default → Unify Error Button (Filled)
- **Background (Resting)**: `bg-error` → `bg-buttons-colors-core-icon-destructive-background-resting`
- **Background (Hover)**: `hover:bg-error-hover` → `hover:bg-buttons-colors-core-icon-destructive-background-hover`
- **Border**: `border-error` → `border-buttons-colors-core-icon-destructive-stroke-resting`
- **Text**: `text-text-primary` → `text-buttons-colors-core-icon-destructive-text-resting`

### Input

#### Default → Unify Input Field
- **Background**: `bg-panel` → `bg-inputs-colors-normal-background-resting`
- **Border**: `border-panel-accent` → `border-inputs-colors-normal-stroke-resting`
- **Border (Hover)**: `hover:border-primary` → `hover:border-inputs-colors-normal-stroke-hover`
- **Border (Focus)**: `focus:border-primary` → `focus:border-inputs-colors-normal-stroke-selected`
- **Text**: `text-text-primary` → `text-inputs-colors-normal-text-input-text-resting`
- **Icon**: `text-text-secondary` → `[&>svg]:fill-inputs-colors-normal-assets-input-resting`

#### Default → Unify Error State
- **Background**: `bg-error-background` → `bg-inputs-colors-error-background-resting`
- **Border**: `border-error` → `border-inputs-colors-error-stroke-resting`
- **Border (Hover)**: `hover:border-error` → `hover:border-inputs-colors-error-stroke-hover`
- **Text**: `text-error` → `text-inputs-colors-error-text-input-filled`

### Checkbox

#### Default → Unify Checkbox
- **Background (Not Selected)**: `bg-panel` → `bg-selectors-colors-checkbox-not-selected-background-resting`
- **Background (Selected)**: `checked:bg-primary` → `checked:bg-selectors-colors-checkbox-selected-background-resting`
- **Border (Not Selected)**: `border-panel-accent` → `border-selectors-colors-checkbox-not-selected-stroke-resting`
- **Border (Selected)**: `checked:border-primary` → `checked:border-selectors-colors-checkbox-selected-stroke-resting`
- **Icon**: `text-white` → `stroke-selectors-colors-checkbox-selected-assets-base`

### Radio

#### Default → Unify Radio Button
- **Background (Not Selected)**: `bg-transparent` → `bg-selectors-colors-radio-not-selected-background-resting`
- **Background (Selected)**: `checked:bg-primary` → `checked:bg-selectors-colors-radio-selected-background-resting`
- **Border (Not Selected)**: `border-panel-accent` → `border-selectors-colors-radio-not-selected-stroke-resting`
- **Border (Selected)**: `checked:border-primary` → `checked:border-selectors-colors-radio-selected-stroke-resting`
- **Dot**: `bg-primary` → `bg-selectors-colors-radio-selected-assets-base`

### Toggle (Switch)

#### Default → Unify Toggle
- **Background (Off)**: `bg-surface` → `bg-selectors-colors-toggle-off-background-resting`
- **Background (On)**: `checked:bg-primary` → `checked:bg-selectors-colors-toggle-on-background-resting`
- **Border (Off)**: `border-panel-accent` → `border-selectors-colors-toggle-off-stroke-resting`
- **Border (On)**: `checked:border-primary` → `checked:border-selectors-colors-toggle-on-stroke-resting`
- **Thumb (Off)**: `bg-panel` → `bg-selectors-colors-toggle-off-assets-resting`
- **Thumb (On)**: `bg-panel` → `bg-selectors-colors-toggle-on-assets-resting`

### Select

#### Default → Unify Select
- **Background**: `bg-panel` → `bg-inputs-colors-normal-background-resting`
- **Border**: `border-panel-accent` → `border-inputs-colors-normal-stroke-resting`
- **Border (Hover)**: `hover:border-primary` → `hover:border-inputs-colors-normal-stroke-hover`
- **Text**: `text-text-primary` → `text-inputs-colors-normal-text-input-text-resting`
- **Icon**: `text-text-secondary` → `[&>svg]:fill-inputs-colors-normal-assets-input-resting`

### Chip

#### Default → Unify Chip (Filled)
- **Background**: `bg-primary` → `bg-tags-colors-brand-background-resting`
- **Background (Hover)**: `hover:bg-primary-hover` → `hover:bg-tags-colors-brand-background-hover`
- **Border**: `border-primary` → `border-tags-colors-brand-stroke-resting`
- **Text**: `text-panel` → `text-tags-colors-brand-text-label-base`

#### Default → Unify Chip (Selectable)
- **Background (Selected)**: `bg-primary` → `bg-tags-colors-brand-background-selected`
- **Border (Selected)**: `border-primary` → `border-tags-colors-brand-stroke-selected`
- **Text (Selected)**: `text-panel` → `text-tags-colors-brand-text-label-base`

### Badge

#### Default → Unify Badge
- **Background**: `bg-primary` → `bg-badges-colors-solid-brand-background-standard`
- **Border**: `border-primary` → `border-badges-colors-solid-brand-stroke-default`
- **Text**: `text-white` → `text-badges-colors-solid-brand-text-default`

### Card

**Note**: Card does not have Unify component-specific tokens and uses direct design system tokens.

#### Default → Unify Card (via Design System Tokens)
- **Background**: `bg-panel` → `bg-background-neutral-inverse-raised-4`
- **Border**: `border-panel-accent` → `border-stroke-neutral-3`
- **Text**: `text-text-primary` → (no text color token - inherits from parent)

### Callout

**Note**: Callout uses Unify notification component tokens.

#### Default → Unify Callout (via Unify Component Tokens)
- **Default Background**: `bg-panel-background` → `bg-notifications-colors-background-neutral-resting`
- **Default Border**: `border-panel-accent` → `border-notifications-colors-stroke-neutral-resting`
- **Default Icon**: `text-success` → `text-notifications-colors-assets-neutral-resting`
- **Success Background**: `bg-success-background` → `bg-notifications-colors-background-success-resting`
- **Success Border**: `border-success` → `border-notifications-colors-stroke-success-resting`
- **Success Icon**: `text-success` → `text-notifications-colors-assets-success-resting`
- **Error Background**: `bg-error-background` → `bg-notifications-colors-background-error-resting`
- **Error Border**: `border-error` → `border-notifications-colors-stroke-error-resting`
- **Error Icon**: `text-error` → `text-notifications-colors-assets-destructive-resting`
- **Warning Background**: `bg-warning-background` → `bg-notifications-colors-background-warning-resting`
- **Warning Border**: `border-warning` → `border-notifications-colors-stroke-warning-resting`
- **Warning Icon**: `text-warning` → `text-notifications-colors-assets-warning-static`
- **Info Background**: `bg-info-background` → `bg-notifications-colors-background-info-resting`
- **Info Border**: `border-info` → `border-notifications-colors-stroke-info-resting`
- **Info Icon**: `text-info` → `text-notifications-colors-assets-info-resting`
- **Text**: `text-base` → `text-notifications-colors-text-title-resting`

### Calendar

#### Default → Unify Calendar
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

#### Default → Unify Notification (Neutral/Default)
- **Background**: `bg-panel` → `bg-notifications-colors-background-neutral-resting`
- **Border**: `border-panel-accent` → `border-notifications-colors-stroke-neutral-resting`
- **Text**: `text-text-primary` → `text-notifications-colors-text-normal-resting`
- **Title**: `text-text-primary` → `text-notifications-colors-text-title-resting`

#### Default → Unify Notification (Success)
- **Background**: `bg-success-background` → `bg-notifications-colors-background-success-resting`
- **Border**: `border-success` → `border-notifications-colors-stroke-success-resting`
- **Icon**: `text-success` → `text-notifications-colors-assets-success-resting`

#### Default → Unify Notification (Error)
- **Background**: `bg-error-background` → `bg-notifications-colors-background-error-resting`
- **Border**: `border-error` → `border-notifications-colors-stroke-error-resting`
- **Icon**: `text-error` → `text-notifications-colors-assets-destructive-resting`

#### Default → Unify Notification (Warning)
- **Background**: `bg-warning-background` → `bg-notifications-colors-background-neutral-resting`
- **Border**: `border-warning` → `border-notifications-colors-stroke-warning-resting`
- **Icon**: `text-warning` → `text-notifications-colors-assets-normal-resting`

#### Default → Unify Notification (Info)
- **Background**: `bg-info-background` → `bg-notifications-colors-background-neutral-resting`
- **Border**: `border-info` → `border-notifications-colors-stroke-info-resting`
- **Icon**: `text-info` → `text-notifications-colors-assets-normal-resting`

### Dialog

**Note**: Dialog does not have Unify component-specific tokens and uses direct design system tokens.

#### Default → Unify Dialog (via Design System Tokens)
- **Background**: `bg-panel` → `bg-background-neutral-canvas-base`
- **Border**: `border-panel-accent` → `border-stroke-brand-base`
- **Text**: `text-text-primary` → `text-content-text-on-color-light-dark`
- **Close Button**: `text-text-primary` → `text-color-content-assets-neutral-base`

### Divider

**Note**: Divider does not have Unify component-specific tokens and uses direct design system tokens.

#### Default → Unify Divider (via Design System Tokens)
- **Primary Variant**: `bg-surface` → `bg-stroke-neutral-5`
- **Secondary Variant**: Uses gradient with `via-blue-500` (custom styling, not mapped)

### Drawer

**Note**: Drawer does not have Unify component-specific tokens and uses direct design system tokens.

#### Default → Unify Drawer (via Design System Tokens)
- **Background**: `bg-panel` → `bg-background-neutral-raised-5/70`
- **Text**: `text-text-primary` → (no text color token - inherits from parent)

### List

#### Default → Unify List (using navigation-colors-*)
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

#### Default → Unify Menu (using navigation-colors-*)
- **Container Background**: N/A → `bg-navigation-colors-background-container-base`
- **Container Border**: N/A → `border-navigation-colors-stroke-container-base`
- **Text**: `text-text-primary` → `text-navigation-colors-text-resting`

### Pager

**Note**: Pager uses Unify button component tokens for its interactive elements.

#### Default → Unify Pager (via Unify Component Tokens)
- **Page (Resting)**: `text-text-secondary` → `text-buttons-colors-core-icon-ghost-text-resting`
- **Page (Active)**: `text-text-primary` → `text-buttons-colors-core-icon-ghost-text-selected`
- **Page Background (Resting)**: N/A → `bg-buttons-colors-core-icon-ghost-background-resting`
- **Page Background (Hover)**: N/A → `hover:bg-buttons-colors-core-icon-ghost-background-hover`
- **Control Button**: `text-text-secondary` → `text-buttons-colors-core-icon-secondary-assets-resting`

### Popover

**Note**: Popover does not have Unify component-specific tokens and uses direct design system tokens.

#### Default → Unify Popover (via Design System Tokens)
- **Background**: `bg-panel` → (no background token - inherits from parent)
- **Text**: `text-text-primary` → (no text color token - inherits from parent)

### Range

**Note**: Range does not have Unify component-specific tokens and uses direct design system tokens.

#### Default → Unify Range (via Design System Tokens)
- **Base Background**: `bg-surface` → `bg-background-neutral-canvas-base`
- **Active Background**: `bg-primary-active` → `bg-background-brand-base`
- **Hover Background**: `hover:bg-primary-hover` → `hover:bg-background-brand-1`
- **Disabled Background**: `bg-secondary-inactive` → `bg-background-neutral-raised-3`
- **Tooltip Text**: `text-text-primary` → `text-content-text-neutral-base`
- **Tooltip Background**: `bg-surface` → `bg-background-neutral-canvas-base`

### Redact

**Note**: Redact does not have Unify component-specific tokens and uses direct design system tokens.

#### Default → Unify Redact (via Design System Tokens)
- **Text**: `text-text-primary` → (no text color token - inherits from parent)

### Sort

**Note**: Sort does not have Unify component-specific tokens and uses direct design system tokens.

#### Default → Unify Sort (via Design System Tokens)
- **Text**: `text-text-primary` → (no text color token - inherits from parent)
- **Icon**: `fill-current` (inherits text color)

### Stack

**Note**: Stack does not have Unify component-specific tokens and uses direct design system tokens.

#### Default → Unify Stack (via Design System Tokens)
- **Text**: `text-text-primary` → (no text color token - inherits from parent)

### Stepper

**Note**: Stepper does not have Unify component-specific tokens and uses direct design system tokens.

#### Default → Unify Stepper (via Design System Tokens)
- **Border**: `border-panel-accent` → `border-stroke-neutral-2`
- **Marker Background**: `bg-surface` → `bg-content-assets-neutral-3`
- **Active Marker**: `bg-info` → `bg-background-brand-base` (with border)
- **Active Border**: `border-primary` → `border-stroke-brand-1`
- **Active Label Border**: `border-info` → `border-stroke-brand-1`
- **Active Label Background**: `bg-info-background` → `bg-background-brand-5`
- **Label Border**: `border-surface` → `border-content-assets-neutral-3`

### Textarea

**Note**: Textarea uses the same Unify tokens as Input. See [Input](#input) for token mappings.

#### Default → Unify Textarea
- Same token mappings as Input component
- **Background**: `bg-inputs-colors-normal-background-resting`
- **Border**: `border-inputs-colors-normal-stroke-resting`
- **Border (Hover)**: `hover:border-inputs-colors-normal-stroke-hover`
- **Text**: `text-inputs-colors-normal-text-input-text-resting`
- **Placeholder**: `placeholder:text-inputs-colors-normal-text-input-text-resting`
- **Error Background**: `bg-inputs-colors-error-background-resting`
- **Error Border**: `border-inputs-colors-error-stroke-resting`

### Tree

**Note**: Tree uses Unify JSON tree component tokens.

#### Default → Unify Tree (via Unify Component Tokens)
- **Text**: `text-text-primary` → (no text color token - inherits from parent)
- **Arrow Icon**: `fill-text-primary` → `text-json-tree-color-asset-resting`
- **Button Icon**: `fill-text-primary` → (no icon color token - inherits from parent)

### Typography

**Note**: Typography does not have Unify component-specific tokens and uses direct design system tokens.

#### Default → Unify Typography (via Design System Tokens)
- **Primary**: `text-primary` → `text-content-text-on-color-light-dark`
- **Secondary**: `text-secondary` → `text-content-text-neutral-base`
- **Success**: `text-success` → `text-content-text-success-base`
- **Warning**: `text-warning` → `text-content-text-warning-base`
- **Error**: `text-error` → `text-content-text-destructive-base`
- **Info**: `text-info` → `text-content-text-info-base`

## Semantic Color Tokens (Default Theme Only)

### Default Theme Semantic Mappings

The default theme includes a semantic token layer (`semantic-tokens.css`) that maps semantic tokens (like `--color-primary`, `--color-secondary`) to design system tokens (like `--background-brand-base`, `--background-neutral-raised-base`). This provides a simplified, developer-friendly API.

**Note**: Semantic tokens are **only available in the default theme**. They are automatically included when you import `reablocks/index.css`.

**Unify Theme**: The Unify theme does **not** include semantic tokens. Components use Unify component tokens or direct design system tokens instead. This means semantic tokens like `bg-panel`, `text-text-primary`, and `bg-primary` will **not work** in the Unify theme.

**Light/Dark Mode Support**: All semantic tokens automatically adapt to light and dark mode. The theme CSS files (`theme-dark.css`, `theme-light.css`) define the same variable names with different values based on the active theme class (`.theme-dark` or `.theme-light`). This means you don't need to use `dark:` or `light:` Tailwind variants - semantic tokens handle the mode switching automatically.

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
- `--text-primary` → `--content-text-neutral-base` (automatically adapts to light/dark mode)
- `--text-secondary` → `--content-text-neutral-3` (automatically adapts to light/dark mode)
- `--disabled` → `--content-text-neutral-5` (automatically adapts to light/dark mode)
- `--mystic` → `--content-text-neutral-2` (automatically adapts to light/dark mode)
- `--waterloo` → `--content-text-neutral-4` (automatically adapts to light/dark mode)

#### Border Colors
- `--border-secondary-hover` → `--stroke-neutral-1`

