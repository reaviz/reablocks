# Figma Code Connect

This document explains how to use and extend Figma Code Connect in the reablocks component library.

## Overview

Figma Code Connect links our React components to their corresponding Figma design system components. When developers inspect a component in Figma Dev Mode, they see real, copy-paste-ready code instead of auto-generated guesses.

## Prerequisites

1. **Figma Access Token**: You need a Figma personal access token with `code_connect:write` scope
2. **Node.js**: v22 or higher
3. **Dependencies installed**: `npm install`

## Quick Start

### Setting up your Figma Access Token

Create a Figma personal access token:
1. Go to Figma → Settings → Personal access tokens
2. Create a new token with `code_connect:write` permission
3. Set it as an environment variable:

```bash
export FIGMA_ACCESS_TOKEN=your_token_here
```

### Available Commands

```bash
# Parse and validate all Code Connect files locally
npm run figma:parse

# Publish Code Connect mappings to Figma
npm run figma:connect

# Unpublish all Code Connect mappings
npm run figma:unpublish
```

## Connected Components

The following components have Code Connect configurations:

| Component | Location | Figma File |
|-----------|----------|------------|
| Button | `src/elements/Button/Button.figma.tsx` | Update with your URL |
| Input | `src/form/Input/Input.figma.tsx` | Update with your URL |
| Select | `src/form/Select/Select.figma.tsx` | Update with your URL |
| Badge | `src/elements/Badge/Badge.figma.tsx` | Update with your URL |
| Chip/Tag | `src/elements/Chip/Chip.figma.tsx` | Update with your URL |
| Card | `src/layout/Card/Card.figma.tsx` | Update with your URL |

## Adding a New Component

Follow these steps to connect a new component to Figma:

### Step 1: Create the Code Connect file

Create a `.figma.tsx` file alongside your component:

```
src/elements/MyComponent/
├── MyComponent.tsx
├── MyComponent.figma.tsx  ← Create this file
├── MyComponentTheme.ts
└── MyComponent.story.tsx
```

### Step 2: Get the Figma Node URL

1. Open your Figma file
2. Select the component you want to connect
3. Right-click and select "Copy link to selection"
4. The URL will look like: `https://figma.com/design/FILE_ID?node-id=NODE_ID`

### Step 3: Write the Code Connect configuration

```tsx
import figma from '@figma/code-connect';
import { MyComponent } from './MyComponent';

// Main component connection
figma.connect(MyComponent, 'https://figma.com/design/YOUR_FILE_ID?node-id=YOUR_NODE_ID', {
  props: {
    // Map Figma variant properties to React props
    variant: figma.enum('Variant', {
      'Primary': 'primary',
      'Secondary': 'secondary'
    }),
    size: figma.enum('Size', {
      'Small': 'small',
      'Medium': 'medium',
      'Large': 'large'
    }),
    disabled: figma.enum('State', {
      'Disabled': true
    }),
    // Boolean properties
    fullWidth: figma.boolean('Full Width'),
    // String/text properties
    children: figma.string('Label')
  },
  example: (props) => (
    <MyComponent
      variant={props.variant}
      size={props.size}
      disabled={props.disabled}
      fullWidth={props.fullWidth}
    >
      {props.children}
    </MyComponent>
  )
});
```

### Step 4: Add variant-specific examples (optional)

For common use cases, add specific variant connections:

```tsx
// Specific variant for primary button
figma.connect(MyComponent, 'https://figma.com/design/YOUR_FILE_ID?node-id=YOUR_NODE_ID', {
  variant: { Variant: 'Primary' },
  example: () => <MyComponent variant="primary">Click me</MyComponent>
});
```

### Step 5: Validate and publish

```bash
# Validate locally first
npm run figma:parse

# Publish to Figma
npm run figma:connect
```

## Prop Mapping Reference

### Enum Props

For Figma variant properties with multiple options:

```tsx
color: figma.enum('Color', {
  'Default': 'default',    // Figma value: 'Default' → React prop: 'default'
  'Primary': 'primary',
  'Secondary': 'secondary',
  'Error': 'error'
})
```

### Boolean Props

For simple toggle properties:

```tsx
fullWidth: figma.boolean('Full Width'),
disabled: figma.boolean('Disabled')
```

### String Props

For text content:

```tsx
placeholder: figma.string('Placeholder'),
children: figma.string('Label')
```

### Instance Props

For nested Figma instances:

```tsx
icon: figma.instance('Icon'),
startAdornment: figma.instance('Start Adornment')
```

### Children Props

For slot content:

```tsx
children: figma.children('Content')
```

## Variant Connections

You can create connections for specific Figma variants. This is useful for showing different example code for different states:

```tsx
// Default state
figma.connect(Button, 'URL', {
  variant: { State: 'Default' },
  example: () => <Button>Click me</Button>
});

// Disabled state
figma.connect(Button, 'URL', {
  variant: { State: 'Disabled' },
  example: () => <Button disabled>Disabled</Button>
});

// Combined variants
figma.connect(Button, 'URL', {
  variant: { Variant: 'Outline', Color: 'Primary' },
  example: () => <Button variant="outline" color="primary">Outline Primary</Button>
});
```

## Best Practices

### 1. Keep examples minimal

Only include props that are visible/relevant in the Figma variant:

```tsx
// Good - only includes relevant props
example: () => <Button color="primary">Submit</Button>

// Avoid - unnecessary props
example: () => (
  <Button
    color="primary"
    variant="filled"
    size="medium"
    disableAnimation={false}
  >
    Submit
  </Button>
)
```

### 2. Match Figma naming exactly

The enum keys must match Figma variant property values exactly (case-sensitive):

```tsx
// If Figma has variant property "Size" with values "Small", "Medium", "Large"
size: figma.enum('Size', {
  'Small': 'small',   // ✓ Matches Figma
  'small': 'small',   // ✗ Won't match
})
```

### 3. Use real import paths

The `figma.config.json` maps source paths to package imports:

```json
{
  "codeConnect": {
    "importPaths": {
      "src/*": "reablocks"
    }
  }
}
```

So `import { Button } from './Button'` becomes `import { Button } from 'reablocks'` in Dev Mode.

### 4. Document placeholder URLs

Use clear comments to indicate which URLs need to be updated:

```tsx
/**
 * TODO: Replace with actual Figma component URL
 * Get URL: Open Figma → Select component → Right-click → Copy link
 */
figma.connect(Component, 'https://figma.com/design/PLACEHOLDER?node-id=0:0', { ... });
```

## Troubleshooting

### "Component not found" error

- Verify the Figma URL is correct and the node exists
- Ensure you have access to the Figma file
- Check that the node-id parameter is present in the URL

### "Invalid token" error

- Regenerate your Figma access token
- Ensure it has `code_connect:write` permission
- Check the token is properly exported as `FIGMA_ACCESS_TOKEN`

### Props not mapping correctly

- Verify prop names match Figma exactly (case-sensitive)
- Use `npm run figma:parse` to validate locally before publishing
- Check Figma variant property names in the component's properties panel

### Example code not showing in Dev Mode

- Ensure the Code Connect is published (`npm run figma:connect`)
- Refresh the Figma file
- Check the component is properly linked (not a variant of another component)

## Configuration

The `figma.config.json` file controls Code Connect behavior:

```json
{
  "codeConnect": {
    "parser": "react",
    "include": ["src/**/*.figma.tsx"],
    "importPaths": {
      "src/*": "reablocks"
    }
  }
}
```

| Option | Description |
|--------|-------------|
| `parser` | The framework parser to use (`react`, `html`, `swift`, etc.) |
| `include` | Glob patterns for Code Connect files |
| `importPaths` | Maps source paths to package import paths |

## Resources

- [Figma Code Connect Documentation](https://www.figma.com/developers/code-connect)
- [Code Connect GitHub Repository](https://github.com/figma/code-connect)
- [reablocks Storybook](https://reablocks.dev)
