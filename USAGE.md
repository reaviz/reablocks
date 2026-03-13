# Reablocks Usage Guide

This guide covers two workflows for using reablocks:

1. **With the Unify Design System** — for teams using Unify tokens exported from Figma
2. **Without Unify** — using the default theme with custom overrides

---

## Using Reablocks with the Unify Design System

If your design team uses the [Unify Design System](https://unifydesignsystem.com) in Figma, you can bridge those design tokens directly into reablocks using the Figma plugin and CSS adapter.

### Step 1: Export tokens from Figma

Install the [Reablocks Figma Plugin](https://www.figma.com/community/plugin/1285928654186754176/reablocks-figma-plugin) in your Figma workspace.

1. Open your Figma design file
2. Press `Cmd + P` (or `Ctrl + P` on Windows) to open the quick menu
3. Search for **Reablocks Figma Plugin** and run it
4. Select your theme mode (e.g., Dark or Light) from the dropdown
5. Click **Generate**
6. The plugin generates four categories of CSS variables:
   - **Root variables** — base color palette and dimension primitives
   - **Mode variables** — semantic tokens for your selected theme (references root variables with `var()`)
   - **Component variables** — component-specific tokens (button sizes, input heights, etc.)
   - **Other variables** — typography (font families, sizes, line heights) and effects (shadows, blur)
7. Use the **Copy** buttons to grab each section

> **Note:** Your Figma color styles should follow naming conventions like `Primary`, `Brand`, `Primary/100`, or `Brand/title black 100` for proper token parsing.

### Step 2: Create your token CSS file

Paste the exported tokens into a CSS file in your project:

```css
/* unify-tokens.css */

/* Root variables (from "Copy Root Variables") */
:root {
  --color-neutrals-force-dusk-50: #f7f7fa;
  --color-neutrals-force-dusk-100: #e6e6f0;
  /* ... all root variables ... */
  --spacing-padding-xs: 8px;
  --spacing-padding-sm: 12px;
  --corner-radius-primary: 4px;
  /* etc. */
}

/* Mode variables (from "Copy Mode Variables") */
:root {
  /* Dark theme semantic tokens */
  --color-background-brand-base: var(--color-color-purple-brand-primary-a-1000);
  --color-background-neutral-canvas-base: var(--color-neutrals-darth-abyss-a-1000);
  --color-content-text-neutral-base: var(--color-neutrals-kyber-crystal-a-1000);
  --color-background-semantic-success-base: var(--color-color-green-emerald-saber-a-1000);
  --color-background-semantic-error-base: var(--color-color-red-secondary-red-a-1000);
  /* ... all mode variables ... */
}

/* For light theme support, re-export with the light mode selected
   and wrap in a theme selector: */
.theme-light,
[data-theme='light'] {
  --color-background-neutral-canvas-base: var(--color-neutrals-kyber-crystal-a-1000);
  --color-content-text-neutral-base: var(--color-neutrals-darth-abyss-a-1000);
  /* ... all light mode variables ... */
}
```

### Step 3: Import the CSS files

In your app's main CSS or entry file, import in this order:

```css
/* 1. Your Unify tokens (from Figma export) */
@import './unify-tokens.css';

/* 2. Reablocks base styles */
@import 'reablocks/index.css';

/* 3. The Unify adapter (bridges token names) */
@import 'reablocks/adapters/unify.css';
```

The adapter maps Unify semantic token names to the CSS custom properties that reablocks components consume:

| Reablocks Property | Unify Token | Purpose |
|---|---|---|
| `--primary` | `--color-background-brand-base` | Primary brand color |
| `--primary-hover` | `--color-background-brand-1` | Primary hover state |
| `--success` | `--color-background-semantic-success-base` | Success color |
| `--error` | `--color-background-semantic-error-base` | Error color |
| `--warning` | `--color-background-semantic-warning-base` | Warning color |
| `--info` | `--color-background-semantic-info-base` | Info color |
| `--panel` | `--color-background-neutral-canvas-base` | Page/panel background |
| `--text-primary` | `--color-content-text-neutral-base` | Primary text color |
| `--text-secondary` | `--color-content-text-neutral-3` | Secondary text color |

### Step 4: Use reablocks normally

No changes to your React code:

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

Components automatically pick up your Unify tokens through the CSS adapter. No theme prop changes needed.

### Using component-level Unify tokens

The Figma plugin also exports **component-level tokens** (e.g., `--buttons-colors-core-icon-primary-background-resting`). These are more granular than what the adapter maps. To use them, extend the theme:

```tsx
import { ThemeProvider, theme, extendTheme } from 'reablocks';

const customTheme = extendTheme(theme, {
  components: {
    button: {
      colors: {
        primary: {
          filled: [
            'bg-[var(--buttons-colors-core-icon-primary-background-resting)]',
            'hover:bg-[var(--buttons-colors-core-icon-primary-background-hover)]',
            'text-[var(--buttons-colors-core-icon-primary-text-resting)]'
          ].join(' ')
        }
      }
    }
  }
});

function App() {
  return (
    <ThemeProvider theme={customTheme}>
      <App />
    </ThemeProvider>
  );
}
```

### JavaScript API (optional)

For dynamic scenarios like Storybook decorators or runtime theme switching:

```tsx
import { createUnifyAdapter, isUnifyAvailable } from 'reablocks';

// Check if Unify tokens are loaded in the document
if (isUnifyAvailable()) {
  console.log('Unify tokens detected');
}

// Programmatically activate the adapter (instead of CSS import)
const cleanup = createUnifyAdapter();

// Later, deactivate it
cleanup();
```

---

## Using Reablocks Without Unify

Reablocks works out of the box with its own built-in color palette and theme. No Figma plugin or adapter needed.

### Quick Start

```bash
npm install reablocks
```

```tsx
// App.tsx
import 'reablocks/index.css';
import { ThemeProvider, theme } from 'reablocks';

function App() {
  return (
    <ThemeProvider theme={theme}>
      {/* Your app */}
    </ThemeProvider>
  );
}
```

That's it. All components use the default dark theme with the built-in color palette.

### Theme switching (dark/light)

Add a class or data attribute to toggle themes:

```tsx
// Dark theme (default)
<div className="theme-dark">
  <ThemeProvider theme={theme}>...</ThemeProvider>
</div>

// Light theme
<div className="theme-light">
  <ThemeProvider theme={theme}>...</ThemeProvider>
</div>

// Or via data attribute
<div data-theme="light">
  <ThemeProvider theme={theme}>...</ThemeProvider>
</div>
```

Both dark and light color values are built into `reablocks/index.css` and activate automatically based on these selectors.

### Customizing colors via CSS

The simplest way to customize is to override CSS custom properties. Add this **after** the reablocks CSS import:

```css
/* your-theme.css */
:root {
  /* Change the primary color to indigo */
  --primary: #6366f1;
  --primary-hover: #4f46e5;
  --primary-active: #4338ca;
  --primary-inactive: #a5b4fc;

  /* Change the panel background */
  --panel: #0f172a;
  --panel-accent: #1e293b;

  /* Change text colors */
  --text-primary: #f1f5f9;
  --text-secondary: #94a3b8;
}

/* Override light theme too */
.theme-light,
[data-theme='light'] {
  --primary: #4f46e5;
  --primary-hover: #4338ca;
  --panel: #ffffff;
  --panel-accent: #f1f5f9;
  --text-primary: #0f172a;
  --text-secondary: #475569;
}
```

Available CSS properties to override:

| Property | Default (Dark) | Purpose |
|---|---|---|
| `--primary` | `#105eff` | Primary brand color |
| `--primary-hover` | `#4c86ff` | Primary hover state |
| `--primary-active` | `#105eff` | Primary active state |
| `--primary-inactive` | `#c3d7ff` | Primary disabled state |
| `--secondary` | `#242433` | Secondary color |
| `--secondary-hover` | `#242433` | Secondary hover |
| `--success` | `#55be24` | Success state |
| `--error` | `#e00007` | Error state |
| `--warning` | `#f68500` | Warning state |
| `--info` | `#105eff` | Info state |
| `--panel` | `#02020f` | Page/panel background |
| `--panel-accent` | `#242433` | Raised surface |
| `--surface` | `#242433` | Surface background |
| `--text-primary` | `#f7f7fa` | Primary text |
| `--text-secondary` | `#77778c` | Secondary text |

### Customizing component themes via JavaScript

For deeper customization, use `extendTheme` to override Tailwind classes on individual components:

```tsx
import { ThemeProvider, theme, extendTheme } from 'reablocks';

const customTheme = extendTheme(theme, {
  components: {
    // Customize buttons
    button: {
      base: 'rounded-full font-semibold',
      colors: {
        primary: {
          filled: 'bg-indigo-600 hover:bg-indigo-700 text-white border-indigo-600'
        }
      }
    },
    // Customize inputs
    input: {
      base: 'rounded-lg',
      input: 'text-base'
    },
    // Customize cards
    card: {
      base: 'rounded-xl border border-gray-700 bg-gray-900'
    }
  }
});

function App() {
  return (
    <ThemeProvider theme={customTheme}>
      {/* Components now use your custom styles */}
    </ThemeProvider>
  );
}
```

`extendTheme` deep-merges your overrides with the default theme, so you only need to specify what you want to change.

### Customizing a single component instance

Pass a `theme` prop directly to any component to override just that instance:

```tsx
import { Button } from 'reablocks';

function MyButton() {
  return (
    <Button
      theme={{
        base: 'rounded-full px-8 py-3',
        colors: {
          primary: {
            filled: 'bg-gradient-to-r from-purple-500 to-pink-500 text-white'
          }
        }
      }}
    >
      Gradient Button
    </Button>
  );
}
```

### Building a complete custom theme

For a fully branded experience, override both CSS variables and component themes:

```css
/* brand-theme.css - import after reablocks/index.css */
:root {
  --primary: #7c3aed;
  --primary-hover: #6d28d9;
  --primary-active: #5b21b6;
  --secondary: #1e1b4b;
  --secondary-hover: #312e81;
  --success: #059669;
  --error: #dc2626;
  --warning: #d97706;
  --info: #2563eb;
  --panel: #0c0a1d;
  --panel-accent: #1e1b4b;
  --surface: #1e1b4b;
  --text-primary: #e0e7ff;
  --text-secondary: #818cf8;
}
```

```tsx
import 'reablocks/index.css';
import './brand-theme.css';
import { ThemeProvider, theme, extendTheme } from 'reablocks';

const brandTheme = extendTheme(theme, {
  components: {
    button: {
      base: 'rounded-lg font-medium tracking-wide uppercase text-sm',
      sizes: {
        small: 'px-3 py-1.5',
        medium: 'px-5 py-2.5',
        large: 'px-7 py-3.5'
      }
    },
    card: {
      base: 'rounded-2xl border border-violet-900/50 shadow-lg shadow-violet-500/10'
    },
    input: {
      base: 'rounded-lg border-violet-800 focus-within:border-violet-500'
    },
    badge: {
      base: 'rounded-full font-mono text-xs uppercase tracking-widest'
    }
  }
});

function App() {
  return (
    <ThemeProvider theme={brandTheme}>
      {/* Fully branded UI */}
    </ThemeProvider>
  );
}
```

### How the theme system works

Reablocks uses a layered approach:

```
CSS Custom Properties (:root)
  --primary, --panel, --text-primary, etc.
    |
    v
Tailwind Utility Classes
  bg-primary, text-text-primary, border-panel-accent, etc.
    |
    v
Component Themes (strings of Tailwind classes)
  button.colors.primary.filled = 'bg-primary hover:bg-primary-hover text-white'
    |
    v
ThemeProvider (React context)
  Distributes themes to all components via useComponentTheme()
    |
    v
Your Components
  <Button>, <Input>, <Card>, etc. render with the active theme
```

To customize at any level:
- **CSS variables** — change colors globally with zero JS changes
- **`extendTheme()`** — override Tailwind classes for specific components
- **Component `theme` prop** — override a single component instance
