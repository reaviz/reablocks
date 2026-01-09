# CLAUDE.md - Reablocks AI Assistant Guide

## Project Overview

Reablocks is a React component library built on Tailwind CSS, providing 50+ UI components for building modern web applications. The library supports both dark and light themes and uses a powerful theming system that allows complete customization.

**Version:** 9.3.0
**License:** Apache-2.0
**Repository:** https://github.com/reaviz/reablocks

## Tech Stack

- **React** (>=16) - Component framework
- **TypeScript** - Type safety
- **Tailwind CSS 4** - Styling framework
- **Vite** - Build tool and dev server
- **Storybook 9** - Component development and documentation
- **Vitest** - Testing framework
- **Motion (Framer Motion)** - Animations
- **Floating UI** - Positioning for tooltips, popovers, etc.

## Directory Structure

```
src/
├── data/           # Data display components (DataSize, DateFormat, Duration, Ellipsis, Pager, Pluralize, Redact, Sort)
├── elements/       # Basic UI elements (Avatar, Badge, Button, Chip, CommandPalette, IconButton, Kbd, Loader, Skeleton)
├── form/           # Form components (Calendar, Checkbox, DateInput, Input, Radio, Range, Select, Textarea, Toggle)
├── layers/         # Overlay components (Backdrop, Callout, ConfirmDialog, ContextMenu, Dialog, Drawer, Menu, Notification, Popover, Tooltip)
├── layout/         # Layout components (Block, Breadcrumbs, Card, Collapse, Divider, List, Motion, Stack, Stepper, Tabs, Tree, VerticalSpacer)
├── typography/     # Typography components (PageTitle, PrimaryHeading, SecondaryHeading, SmallHeading, Sub, Text)
├── utils/          # Utilities (ExitListener, Overlay, Portal, Position, Theme system, hooks)
├── assets/         # SVG icons and assets
└── index.ts        # Main export file

docs/
├── blocks/         # Pre-built page templates (authentication, administration, foundation)
└── assets/         # Documentation assets
```

## Development Workflow

### Getting Started

```bash
npm install        # Install dependencies
npm start          # Start Storybook on port 9009
```

### Available Scripts

| Command | Description |
|---------|-------------|
| `npm start` | Start Storybook development server |
| `npm run build` | Full production build (JS + styles + docs) |
| `npm run build:js` | Build library with Vite |
| `npm run build:styles` | Build Tailwind CSS |
| `npm run build-storybook` | Build static Storybook |
| `npm run lint` | Run ESLint |
| `npm run lint:fix` | Fix ESLint issues |
| `npm run prettier` | Format code with Prettier |
| `npm test` | Run tests with Vitest |
| `npm run test:coverage` | Run tests with coverage |

### Requirements

- Node.js >= 22
- npm >= 10.8.2

## Code Conventions

### File Naming

- Components: `ComponentName.tsx`
- Themes: `ComponentNameTheme.ts`
- Stories: `ComponentName.story.tsx`
- Tests: `ComponentName.spec.ts` or `utils.spec.ts`
- Index files: `index.ts` (barrel exports)

### Import Paths

Use the `@/` alias for imports from the `src` directory:

```typescript
import { useComponentTheme } from '@/utils';
import { ButtonTheme } from '@/elements';
```

ESLint enforces no relative import paths (except same folder):

```typescript
// Good
import { Button } from '@/elements/Button';

// Allowed (same folder)
import { ButtonTheme } from './ButtonTheme';

// Bad
import { Button } from '../../elements/Button';
```

### Component Structure

Each component follows this pattern:

```typescript
'use client';  // For Next.js compatibility (when needed)

import React, { FC, forwardRef } from 'react';
import { twMerge } from 'tailwind-merge';
import { useComponentTheme } from '@/utils';
import { ComponentNameTheme } from './ComponentNameTheme';

export interface ComponentNameProps {
  /**
   * JSDoc comment for prop
   */
  propName?: string;

  /**
   * Theme for the component
   */
  theme?: ComponentNameTheme;
}

export const ComponentName: FC<ComponentNameProps> = ({
  propName = 'default',
  theme: customTheme,
  className,
  ...rest
}) => {
  const theme = useComponentTheme('componentName', customTheme);

  return (
    <div className={twMerge(theme.base, className)} {...rest}>
      {/* Component content */}
    </div>
  );
};
```

### Theme Structure

Every component has a corresponding theme interface and default theme:

```typescript
// ComponentNameTheme.ts
export interface ComponentNameTheme {
  base: string;
  variants: {
    primary: string;
    secondary: string;
    [key: string]: string;
  };
  sizes: {
    small: string;
    medium: string;
    large: string;
    [key: string]: string;
  };
}

export const componentNameTheme: ComponentNameTheme = {
  base: 'flex items-center',
  variants: {
    primary: 'bg-primary text-white',
    secondary: 'bg-secondary text-gray-900'
  },
  sizes: {
    small: 'text-sm p-2',
    medium: 'text-base p-4',
    large: 'text-lg p-6'
  }
};

// Also export a legacy theme for CSS variable-based theming
export const legacyComponentNameTheme: ComponentNameTheme = {
  // Uses CSS variables like var(--primary-background)
};
```

### Styling Guidelines

1. Use Tailwind utility classes exclusively
2. Use `twMerge` from `tailwind-merge` to merge class names
3. Support theme customization via theme prop
4. Use CSS custom properties for color theming (defined in `src/index.css`)
5. Support both dark and light themes using `dark:` and `light:` variants

### Storybook Stories

```typescript
// ComponentName.story.tsx
import { ComponentName } from './ComponentName';

export default {
  title: 'Components/Category/ComponentName',
  component: ComponentName
};

export const Default = () => <ComponentName />;

export const Variants = () => (
  <div style={{ display: 'flex', gap: 10 }}>
    <ComponentName variant="primary">Primary</ComponentName>
    <ComponentName variant="secondary">Secondary</ComponentName>
  </div>
);
```

## Theming System

### ThemeProvider

Wrap your app with `ThemeProvider`:

```typescript
import { ThemeProvider, theme } from 'reablocks';

function App() {
  return (
    <ThemeProvider> // without variant prop: default theme
      {/* Your app */}
    </ThemeProvider>
  );
}
```

### Extending Themes

```typescript
import { ThemeProvider, theme, extendTheme, PartialReablocksTheme } from 'reablocks';

const customTheme: PartialReablocksTheme = {
  components: {
    button: {
      base: 'rounded-lg',
      colors: {
        primary: {
          filled: 'bg-indigo-600 hover:bg-indigo-700'
        }
      }
    }
  }
};

function App() {
  return (
    <ThemeProvider theme={extendTheme(theme, customTheme)}>
      {/* Your app */}
    </ThemeProvider>
  );
}
```

### CSS Custom Properties

Theme colors are defined in `src/index.css` using CSS custom properties:

- `--primary`, `--primary-hover`, `--primary-active`
- `--secondary`, `--secondary-hover`
- `--success`, `--error`, `--warning`, `--info`
- `--panel`, `--panel-accent`
- `--surface`, `--surface-accent`
- `--text-primary`, `--text-secondary`

Light theme overrides are applied via `.theme-light` or `[data-theme='light']`.

## Testing

Tests use Vitest with jsdom environment:

```typescript
// example.spec.ts
import { describe, test, expect } from 'vitest';
import { myFunction } from './myFunction';

describe('myFunction', () => {
  test('should return expected result', () => {
    const result = myFunction('input');
    expect(result).toBe('expected');
  });
});
```

Run tests:
```bash
npm test                    # Watch mode
npm run test:coverage       # With coverage report
```

## Build Process

The build process consists of:

1. **JS Build** (`npm run build:js`): Vite builds the library in library mode
   - Outputs ESM (`dist/index.js`) and UMD (`dist/index.umd.cjs`)
   - Generates TypeScript declarations (`dist/index.d.ts`)
   - Copies story files to `dist/stories/` and `dist/blocks/`

2. **CSS Build** (`npm run build:styles`): Tailwind CLI builds styles
   - Input: `src/index.css`
   - Output: `dist/index.css`

3. **Docs Build** (`npm run build:docs`): Generates component documentation

## Pre-commit Hooks

The project uses Husky + lint-staged for pre-commit checks:

- ESLint runs on staged `.js`, `.ts`, `.tsx` files
- Prettier formats staged files

## CI/CD

GitHub Actions workflow (`.github/workflows/build.yml`):
- Runs on pull requests to `master`
- Node.js 22.x
- Steps: Install, Lint, Build, Build Storybook

## Key Dependencies

| Package | Purpose |
|---------|---------|
| `@floating-ui/react` | Tooltip/popover positioning |
| `motion` | Animations |
| `tailwind-merge` | Intelligent class merging |
| `classnames` | Conditional class names |
| `date-fns` | Date formatting |
| `focus-trap-react` | Focus management for modals |
| `fuse.js` | Fuzzy search |

## Common Patterns

### Forwarding Refs

```typescript
export const Component = forwardRef<HTMLDivElement, ComponentProps>(
  (props, ref) => {
    return <div ref={ref} {...props} />;
  }
);
```

### Using Motion for Animations

```typescript
import { motion } from 'motion/react';

<motion.div
  initial={{ opacity: 0 }}
  animate={{ opacity: 1 }}
  exit={{ opacity: 0 }}
>
  Content
</motion.div>
```

### Overlay Components

Overlay components (Dialog, Drawer, Tooltip, etc.) use the overlay system in `src/utils/Overlay/`:

- `ConnectedOverlay` - Positioned relative to trigger element
- `GlobalOverlay` - Positioned globally (modals, drawers)
- `OverlayPortal` - Portal wrapper for rendering outside DOM hierarchy

## Formatting

Prettier configuration:
- Semi: true
- Single quotes: true
- Trailing comma: none
- Arrow parens: avoid
- Bracket spacing: true
- Print width: 80
