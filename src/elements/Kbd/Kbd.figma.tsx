import React from 'react';
import figma from '@figma/code-connect';
import { Kbd } from './Kbd';

/**
 * -- FIGMA CODE CONNECT --
 *
 * Update the Figma file URL below with your actual Figma component URL.
 * The URL should point to the specific component node in your Figma file.
 *
 * To get the URL:
 * 1. Open your Figma file
 * 2. Select the Kbd component
 * 3. Right-click and select "Copy link to selection"
 * 4. Replace the placeholder URL below
 */

figma.connect(
  Kbd,
  'https://figma.com/design/FIGMA_FILE_ID?node-id=KBD_NODE_ID',
  {
    props: {
      /**
       * Map Figma variants to React props.
       * The keys should match your Figma variant property names exactly.
       */
      keycode: figma.string('Keycode'),
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
        Outline: 'outline'
      }),
      size: figma.enum('Size', {
        Small: 'small',
        Medium: 'medium',
        Large: 'large'
      })
    },
    example: props => (
      <Kbd
        keycode={props.keycode}
        color={props.color}
        variant={props.variant}
        size={props.size}
      />
    )
  }
);

/**
 * Variant: Single Key
 */
figma.connect(
  Kbd,
  'https://figma.com/design/FIGMA_FILE_ID?node-id=KBD_SINGLE_NODE_ID',
  {
    variant: { Type: 'Single' },
    example: () => <Kbd keycode="Enter" />
  }
);

/**
 * Variant: Key Combination with Command
 */
figma.connect(
  Kbd,
  'https://figma.com/design/FIGMA_FILE_ID?node-id=KBD_COMMAND_NODE_ID',
  {
    variant: { Type: 'Combination', Modifier: 'Command' },
    example: () => <Kbd keycode="meta+s" />
  }
);

/**
 * Variant: Key Combination with Ctrl
 */
figma.connect(
  Kbd,
  'https://figma.com/design/FIGMA_FILE_ID?node-id=KBD_CTRL_NODE_ID',
  {
    variant: { Type: 'Combination', Modifier: 'Ctrl' },
    example: () => <Kbd keycode="ctrl+c" />
  }
);

/**
 * Variant: Key Combination with Shift
 */
figma.connect(
  Kbd,
  'https://figma.com/design/FIGMA_FILE_ID?node-id=KBD_SHIFT_NODE_ID',
  {
    variant: { Type: 'Combination', Modifier: 'Shift' },
    example: () => <Kbd keycode="shift+tab" />
  }
);

/**
 * Variant: Complex Combination
 */
figma.connect(
  Kbd,
  'https://figma.com/design/FIGMA_FILE_ID?node-id=KBD_COMPLEX_NODE_ID',
  {
    variant: { Type: 'Complex' },
    example: () => <Kbd keycode="ctrl+shift+p" />
  }
);
