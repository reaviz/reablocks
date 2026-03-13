# Unify Design System Migration Guide

This guide explains how to integrate the [Unify design system](https://www.figma.com) tokens with reablocks components using the adapter pattern.

## Overview

Reablocks now ships a **CSS adapter** that maps Unify design tokens to the CSS custom properties that reablocks components already consume. This means:

- **No changes to your component code** — components like `<Button>`, `<Input>`, `<Card>` work exactly the same
- **No new ThemeProvider configuration** — the default `theme` works out of the box
- **CSS-only integration** — just import one extra CSS file
- **Full dark/light theme support** — Unify's semantic tokens handle theme switching automatically

## Architecture

```
Unify Tokens (CSS variables)
  └─▶ Adapter CSS (bridges naming conventions)
        └─▶ Reablocks CSS custom properties (--primary, --panel, etc.)
              └─▶ Tailwind utility classes (bg-primary, text-text-primary, etc.)
                    └─▶ Component themes (strings of Tailwind classes)
                          └─▶ Your components render correctly
```

The adapter is a pure CSS file that maps Unify semantic token names to reablocks' semantic token names. Since both systems use CSS custom properties under the hood, this bridge is lightweight and performant.

## Quick Start

### Step 1: Set up your Unify tokens

Create a CSS file that loads your Unify tokens. The Unify design system exports four CSS files:

- `root.css` — Primitive color palette, spacing, sizing, corner radius
- `dark.css` — Semantic tokens for dark theme
- `light.css` — Semantic tokens for light theme
- `components.css` — Component-specific tokens (optional)

Wrap them in appropriate CSS selectors:

```css
/* unify-tokens.css */

/* Primitive tokens (always loaded) */
:root {
  /* Paste contents of root.css here */
  --color-neutrals-force-dusk-50: #f7f7fa;
  --color-neutrals-force-dusk-100: #e6e6f0;
  /* ... all root.css variables ... */
  --spacing-padding-xs: 8px;
  --corner-radius-primary: 4px;
  /* etc. */
}

/* Dark theme semantic tokens (default) */
:root {
  /* Paste contents of dark.css here */
  --color-background-brand-base: var(--color-color-purple-brand-primary-a-1000);
  --color-background-neutral-canvas-base: var(--color-neutrals-darth-abyss-a-1000);
  --color-content-text-neutral-base: var(--color-neutrals-kyber-crystal-a-1000);
  /* ... all dark.css variables ... */
}

/* Light theme semantic tokens (activated by class/attribute) */
.theme-light,
[data-theme='light'] {
  /* Paste contents of light.css here */
  --color-background-neutral-canvas-base: var(--color-neutrals-kyber-crystal-a-1000);
  --color-content-text-neutral-base: var(--color-neutrals-darth-abyss-a-1000);
  /* ... all light.css variables ... */
}
```

### Step 2: Import the adapter

In your application's main CSS file, import the files in this order:

```css
/* Your app's main CSS */
@import './unify-tokens.css';           /* Your Unify tokens */
@import 'reablocks/index.css';          /* Reablocks base styles */
@import 'reablocks/adapters/unify.css'; /* The Unify adapter */
```

### Step 3: Use reablocks normally

No changes needed to your React code:

```tsx
import { ThemeProvider, theme } from 'reablocks';
import { Button, Input, Card } from 'reablocks';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Card>
        <Input placeholder="Email" />
        <Button color="primary" variant="filled">
          Sign In
        </Button>
      </Card>
    </ThemeProvider>
  );
}
```

That's it. Your components will now use Unify design tokens for all colors, spacing, and border radius values.

## What the adapter maps

The adapter bridges these reablocks semantic tokens to Unify equivalents:

| Reablocks Token | Unify Token | Purpose |
|---|---|---|
| `--primary` | `--color-background-brand-base` | Primary brand color |
| `--primary-hover` | `--color-background-brand-1` | Primary hover state |
| `--secondary` | `--color-background-neutral-raised-2` | Secondary color |
| `--success` | `--color-background-semantic-success-base` | Success state |
| `--error` | `--color-background-semantic-error-base` | Error state |
| `--warning` | `--color-background-semantic-warning-base` | Warning state |
| `--info` | `--color-background-semantic-info-base` | Info state |
| `--panel` | `--color-background-neutral-canvas-base` | Panel/page background |
| `--panel-accent` | `--color-background-neutral-raised-base` | Raised surface |
| `--surface` | `--color-background-neutral-raised-2` | Surface background |
| `--text-primary` | `--color-content-text-neutral-base` | Primary text |
| `--text-secondary` | `--color-content-text-neutral-3` | Secondary text |

The adapter also maps the full color scales (gray, blue, red, green, orange, yellow, pink, violet, teal) to their Unify equivalents.

## JavaScript API (optional)

For dynamic scenarios (Storybook decorators, theme switchers), you can use the JavaScript API instead of CSS imports:

```tsx
import { createUnifyAdapter, isUnifyAvailable } from 'reablocks';

// Check if Unify tokens are loaded
if (isUnifyAvailable()) {
  console.log('Unify tokens detected');
}

// Programmatically activate the adapter
const cleanup = createUnifyAdapter();

// Later, deactivate it
cleanup();
```

### `createUnifyAdapter(target?: HTMLElement): () => void`

Injects the adapter CSS custom properties into the document. Returns a cleanup function.

### `isUnifyAvailable(): boolean`

Returns `true` if Unify semantic tokens are detected on the document root.

### `unifyTokenMap: Record<string, string>`

The raw mapping of reablocks CSS property names to Unify token names. Useful for building custom adapters.

## For non-Unify users

**Nothing changes.** If you don't import the Unify adapter CSS, reablocks works exactly as before. The adapter is purely additive — it's an optional CSS file that overrides the default token values.

The default reablocks theme uses its own built-in color palette which is visually similar to Unify (they share many of the same base colors). Non-Unify users continue to:

1. Import `reablocks/index.css`
2. Use `<ThemeProvider theme={theme}>` (or `extendTheme()` for customization)
3. Override individual component themes via the `theme` prop

## Theme switching (dark/light)

Reablocks uses CSS classes to switch themes:

```tsx
// Dark theme (default)
<div className="theme-dark">...</div>

// Light theme
<div className="theme-light">...</div>

// Or via data attribute
<div data-theme="light">...</div>
```

When using the Unify adapter, make sure your light theme Unify tokens are scoped to the same selectors:

```css
.theme-light,
[data-theme='light'] {
  /* Unify light.css variables */
}
```

The adapter's semantic mappings (`--primary`, `--panel`, etc.) don't change between themes — they always point to the same Unify semantic token names. The Unify semantic tokens themselves resolve to different primitive values based on the active theme.

## Customizing the adapter

### Overriding specific tokens

Add overrides after the adapter import:

```css
@import 'reablocks/adapters/unify.css';

/* Custom overrides */
:root {
  --primary: #your-custom-primary;
  --panel: #your-custom-panel-bg;
}
```

### Using Unify component tokens

The Unify design system also provides component-level tokens (e.g., `--buttons-colors-core-icon-primary-background-resting`). These are more granular than what the adapter maps. To use them, create a custom reablocks theme:

```tsx
import { ThemeProvider, theme, extendTheme } from 'reablocks';

const unifyComponentTheme = extendTheme(theme, {
  components: {
    button: {
      colors: {
        primary: {
          filled: [
            'bg-[var(--buttons-colors-core-icon-primary-background-resting)]',
            'hover:bg-[var(--buttons-colors-core-icon-primary-background-hover)]',
            'text-[var(--buttons-colors-core-icon-primary-text-resting)]',
            'border-[var(--buttons-colors-core-icon-primary-stroke-resting)]'
          ].join(' ')
        }
      }
    }
  }
});

<ThemeProvider theme={unifyComponentTheme}>
  <App />
</ThemeProvider>
```

## Troubleshooting

### Colors not updating

Make sure the CSS import order is correct. The adapter must come **after** both the Unify tokens and the reablocks base CSS:

```css
/* 1. Unify tokens first */
@import './unify-tokens.css';
/* 2. Reablocks base styles */
@import 'reablocks/index.css';
/* 3. Adapter last (overrides reablocks defaults) */
@import 'reablocks/adapters/unify.css';
```

### Light theme not working

Verify your Unify light tokens are wrapped in the correct selector:

```css
.theme-light, [data-theme='light'] {
  /* light.css variables here */
}
```

### TypeScript types

The adapter utilities are fully typed and exported from the main `reablocks` package:

```tsx
import {
  createUnifyAdapter,
  isUnifyAvailable,
  unifyTokenMap
} from 'reablocks';
```
