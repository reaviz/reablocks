import React from 'react';
import figma from '@figma/code-connect';
import { Button } from './Button';

/**
 * -- FIGMA CODE CONNECT --
 *
 * Update the Figma file URL below with your actual Figma component URL.
 * The URL should point to the specific component node in your Figma file.
 *
 * To get the URL:
 * 1. Open your Figma file
 * 2. Select the Button component
 * 3. Right-click and select "Copy link to selection"
 * 4. Replace the placeholder URL below
 */

figma.connect(
  Button,
  'https://figma.com/design/FIGMA_FILE_ID?node-id=BUTTON_NODE_ID',
  {
    props: {
      /**
       * Map Figma variants to React props.
       * The keys should match your Figma variant property names exactly.
       */
      color: figma.enum('Color', {
        Default: 'default',
        Primary: 'primary',
        Secondary: 'secondary',
        Error: 'error',
        Success: 'success',
        Warning: 'warning'
      }),
      variant: figma.enum('Variant', {
        Filled: 'filled',
        Outline: 'outline',
        Text: 'text'
      }),
      size: figma.enum('Size', {
        Small: 'small',
        Medium: 'medium',
        Large: 'large'
      }),
      disabled: figma.enum('State', {
        Disabled: true
      }),
      fullWidth: figma.boolean('Full Width'),
      children: figma.string('Label')
    },
    example: props => (
      <Button
        color={props.color}
        variant={props.variant}
        size={props.size}
        disabled={props.disabled}
        fullWidth={props.fullWidth}
      >
        {props.children}
      </Button>
    )
  }
);

/**
 * Variant: Primary Button (common use case)
 */
figma.connect(
  Button,
  'https://figma.com/design/FIGMA_FILE_ID?node-id=BUTTON_PRIMARY_NODE_ID',
  {
    variant: { Variant: 'Filled', Color: 'Primary' },
    example: () => <Button color="primary">Click me</Button>
  }
);

/**
 * Variant: Secondary Button
 */
figma.connect(
  Button,
  'https://figma.com/design/FIGMA_FILE_ID?node-id=BUTTON_SECONDARY_NODE_ID',
  {
    variant: { Variant: 'Outline', Color: 'Secondary' },
    example: () => (
      <Button color="secondary" variant="outline">
        Secondary
      </Button>
    )
  }
);

/**
 * Variant: Danger/Error Button
 */
figma.connect(
  Button,
  'https://figma.com/design/FIGMA_FILE_ID?node-id=BUTTON_DANGER_NODE_ID',
  {
    variant: { Color: 'Error' },
    example: () => <Button color="error">Delete</Button>
  }
);

/**
 * Variant: Text Button
 */
figma.connect(
  Button,
  'https://figma.com/design/FIGMA_FILE_ID?node-id=BUTTON_TEXT_NODE_ID',
  {
    variant: { Variant: 'Text' },
    example: () => <Button variant="text">Learn more</Button>
  }
);
