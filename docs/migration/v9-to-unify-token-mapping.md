# v9 to UDS Token Mapping

This document provides a comprehensive mapping of v9 theme tokens to UDS (Unify Design System) tokens for migration purposes.

## Overview

- **v9 Theme**: Uses simplified Tailwind utilities and semantic color tokens (e.g., `bg-primary`, `text-gray-400`)
- **UDS Theme**: Uses UDS design system tokens with CSS custom properties (e.g., `bg-buttons-colors-core-icon-primary-background-resting`)

**Note**: All UDS token names in this document have been verified to exist in the UDS CSS files (`src/assets/css/uds/`).

## CSS Import

### v9 (Default)
```javascript
import 'reablocks/index.css';
```

### UDS
```javascript
import 'reablocks/uds.css';
```

## ThemeProvider Configuration

### v9 (Default)
```jsx
import { ThemeProvider } from 'reablocks';

<ThemeProvider>
  <App />
</ThemeProvider>
```

### UDS
```jsx
import { ThemeProvider } from 'reablocks';

<ThemeProvider variant="uds">
  <App />
</ThemeProvider>
```

## Component Token Mappings

### Button

#### v9 → UDS Primary Button (Filled)
- **Background (Resting)**: `bg-primary` → `bg-buttons-colors-core-icon-primary-background-resting`
- **Background (Hover)**: `hover:bg-primary-hover` → `hover:bg-buttons-colors-core-icon-primary-background-hover`
- **Border**: `border-primary` → `border-buttons-colors-core-icon-primary-border-resting`
- **Text**: `text-text-primary` → `text-buttons-colors-core-icon-primary-foreground-resting`

#### v9 → UDS Secondary Button (Filled)
- **Background (Resting)**: `bg-secondary` → `bg-buttons-colors-core-icon-secondary-background-resting`
- **Background (Hover)**: `hover:bg-secondary-hover` → `hover:bg-buttons-colors-core-icon-secondary-background-hover`
- **Text**: `text-text-primary` → `text-buttons-colors-core-icon-secondary-foreground-resting`

#### v9 → UDS Success Button (Filled)
- **Background (Resting)**: `bg-success` → `bg-buttons-colors-core-icon-success-background-resting`
- **Background (Hover)**: `hover:bg-success-hover` → `hover:bg-buttons-colors-core-icon-success-background-hover`
- **Border**: `border-success` → `border-buttons-colors-core-icon-success-border-resting`

#### v9 → UDS Warning Button (Filled)
- **Background (Resting)**: `bg-warning` → `bg-buttons-colors-core-icon-warning-background-resting`
- **Background (Hover)**: `hover:bg-warning-hover` → `hover:bg-buttons-colors-core-icon-warning-background-hover`
- **Border**: `border-warning` → `border-buttons-colors-core-icon-warning-border-resting`

#### v9 → UDS Error Button (Filled)
- **Background (Resting)**: `bg-error` → `bg-buttons-colors-core-icon-error-background-resting`
- **Background (Hover)**: `hover:bg-error-hover` → `hover:bg-buttons-colors-core-icon-error-background-hover`
- **Border**: `border-error` → `border-buttons-colors-core-icon-error-stroke-resting`
- **Text**: `text-text-primary` → `text-buttons-colors-core-icon-error-text-resting`

### Input

#### v9 → UDS Input Field
- **Background**: `bg-panel` → `bg-inputs-colors-normal-background-resting`
- **Border**: `border-panel-accent` → `border-inputs-colors-normal-stroke-resting`
- **Border (Hover)**: `hover:border-primary` → `hover:border-inputs-colors-normal-stroke-hover`
- **Border (Focus)**: `focus:border-primary` → `focus:border-inputs-colors-normal-stroke-selected`
- **Text**: `text-text-primary` → `text-inputs-colors-normal-text-input-text-resting`
- **Icon**: `text-text-secondary` → `text-inputs-colors-normal-assets-input-resting`

#### v9 → UDS Error State
- **Border**: `border-error` → `border-inputs-colors-error-stroke-resting`
- **Text**: `text-error` → `text-inputs-colors-error-text-input-text-resting`

### Checkbox

#### v9 → UDS Checkbox
- **Background (Selected)**: `checked:bg-primary` → `checked:bg-selectors-colors-checkbox-selected-background-resting`
- **Background (Hover)**: `hover:bg-primary-hover` → `hover:bg-selectors-colors-checkbox-unselected-background-hover`
- **Border**: `border-panel-accent` → `border-selectors-colors-checkbox-unselected-border-resting`
- **Icon**: `text-panel` → `text-selectors-colors-checkbox-selected-foreground-resting`

### Radio

#### v9 → UDS Radio Button
- **Background (Selected)**: `checked:bg-primary` → `checked:bg-selectors-colors-radio-selected-background-resting`
- **Border**: `border-panel-accent` → `border-selectors-colors-radio-unselected-border-resting`
- **Dot**: `checked:after:bg-panel` → `checked:after:bg-selectors-colors-radio-selected-foreground-resting`

### Toggle (Switch)

#### v9 → UDS Toggle
- **Background (Off)**: `bg-panel-accent` → `bg-selectors-colors-toggle-off-background-resting`
- **Background (On)**: `checked:bg-primary` → `checked:bg-selectors-colors-toggle-on-background-resting`
- **Thumb**: `bg-panel` → `bg-selectors-colors-toggle-off-thumb`
- **Thumb (On)**: `checked:bg-panel` → `checked:bg-selectors-colors-toggle-on-thumb`

### Select

#### v9 → UDS Select
- **Background**: `bg-panel` → `bg-inputs-colors-normal-background-resting`
- **Border**: `border-panel-accent` → `border-inputs-colors-normal-border-resting`
- **Border (Hover)**: `hover:border-primary` → `hover:border-inputs-colors-normal-border-hover`
- **Text**: `text-text-primary` → `text-inputs-colors-normal-foreground-resting`
- **Icon**: `text-text-secondary` → `text-inputs-colors-normal-icon-resting`

### Chip

#### v9 → UDS Chip (Filled)
- **Background**: `bg-primary` → `bg-chips-colors-primary-background-resting`
- **Background (Hover)**: `hover:bg-primary-hover` → `hover:bg-chips-colors-primary-background-hover`
- **Border**: `border-primary` → `border-chips-colors-primary-border-resting`
- **Text**: `text-panel` → `text-chips-colors-primary-foreground-resting`

#### v9 → UDS Chip (Selectable)
- **Background (Selected)**: `bg-primary` → `bg-chips-colors-primary-selected-background-resting`
- **Text (Selected)**: `text-panel` → `text-chips-colors-primary-selected-foreground-resting`

### Badge

#### v9 → UDS Badge
- **Background**: `bg-primary` → `bg-badges-colors-primary-background-resting`
- **Text**: `text-panel` → `text-badges-colors-primary-foreground-resting`

### Card

#### v9 → UDS Card
- **Background**: `bg-panel` → `bg-cards-colors-background-resting`
- **Border**: `border-panel-accent` → `border-cards-colors-border-resting`
- **Border (Hover)**: `hover:border-primary` → `hover:border-cards-colors-border-hover`

### Dialog/Modal

#### v9 → UDS Dialog
- **Background**: `bg-panel` → `bg-dialogs-colors-background-resting`
- **Border**: `border-panel-accent` → `border-dialogs-colors-border-resting`
- **Overlay**: `bg-black/50` → `bg-dialogs-colors-overlay`

### Menu

#### v9 → UDS Menu
- **Background**: `bg-panel` → `bg-menus-colors-background-resting`
- **Border**: `border-panel-accent` → `border-menus-colors-border-resting`
- **Item (Hover)**: `hover:bg-panel-accent` → `hover:bg-menus-colors-item-background-hover`
- **Item (Active)**: `bg-primary` → `bg-menus-colors-item-background-active`

### Notification/Toast

#### v9 → UDS Notification (Success)
- **Background**: `bg-success` → `bg-notifications-colors-success-background-resting`
- **Border**: `border-success` → `border-notifications-colors-success-border-resting`
- **Text**: `text-panel` → `text-notifications-colors-success-foreground-resting`

#### v9 → UDS Notification (Error)
- **Background**: `bg-error` → `bg-notifications-colors-error-background-resting`
- **Border**: `border-error` → `border-notifications-colors-error-border-resting`
- **Text**: `text-panel` → `text-notifications-colors-error-foreground-resting`

#### v9 → UDS Notification (Warning)
- **Background**: `bg-warning` → `bg-notifications-colors-warning-background-resting`
- **Border**: `border-warning` → `border-notifications-colors-warning-border-resting`
- **Text**: `text-panel` → `text-notifications-colors-warning-foreground-resting`

#### v9 → UDS Notification (Info)
- **Background**: `bg-info` → `bg-notifications-colors-info-background-resting`
- **Border**: `border-info` → `border-notifications-colors-info-border-resting`
- **Text**: `text-panel` → `text-notifications-colors-info-foreground-resting`

## Semantic Color Tokens

### v9 → UDS Semantic Mappings

The UDS variant includes a semantic token layer (`semantic-tokens.css`) that maps v9 tokens to UDS design tokens. This allows both token systems to coexist and provides a migration path.

**Note**: These mappings are automatically included when you import `reablocks/uds.css`.

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
1. **Backwards Compatibility**: v9-style tokens work in UDS variant
2. **Migration Path**: Gradually replace semantic tokens with component-specific UDS tokens
3. **Flexibility**: Use simple tokens for utility components, detailed tokens for design system components
4. **No Breaking Changes**: Existing v9 code works when switching to UDS variant

## Migration Strategy

### Approach 1: Incremental Migration (Recommended)
1. Keep using v9 theme (default) for existing applications
2. New features/components can optionally use UDS variant
3. No breaking changes for existing users

### Approach 2: Full Migration to UDS
1. Import UDS CSS: `import 'reablocks/uds.css'`
2. Update ThemeProvider: `<ThemeProvider variant="uds">`
3. Custom theme overrides will automatically use UDS tokens
4. Review and update any custom component styles that reference v9 tokens

## Important: Variant Selection

The `variant` prop should be **set once at app initialization** and **not changed at runtime**.

**Why?**
- Each variant requires its corresponding CSS file (v9: 141KB, UDS: 246KB)
- Runtime switching requires loading both CSS files (~387KB total)
- Changing variants without the corresponding CSS loaded will result in unstyled components
- May cause flash of unstyled content (FOUC)

**If you need runtime switching** (theme preview, admin panel, etc.):
```jsx
// Import BOTH CSS files (not recommended for production)
import 'reablocks/index.css';
import 'reablocks/uds.css';

// Then you can switch at runtime
<ThemeProvider variant={userSelectedVariant}>
  <App />
</ThemeProvider>
```

**Recommended pattern** (set once):
```jsx
// Choose one CSS file based on your variant
import 'reablocks/uds.css';

// Set variant once at root
<ThemeProvider variant="uds">
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

### UDS Custom Theme
```jsx
<ThemeProvider
  variant="uds"
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

### UDS
UDS tokens include built-in light/dark mode support through `theme-light.css` and `theme-dark.css` which automatically respond to theme changes.

## Notes

- UDS tokens follow a more verbose but explicit naming convention for better clarity
- UDS includes state variants: `resting`, `hover`, `focused`, `pressed`, `disabled`
- v9 uses shorter, more semantic names optimized for developer experience
- Both themes are fully supported and maintained in v10
