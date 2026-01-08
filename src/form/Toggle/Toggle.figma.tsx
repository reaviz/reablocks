import React from 'react';
import figma from '@figma/code-connect';
import { Toggle } from './Toggle';

/**
 * -- FIGMA CODE CONNECT --
 *
 * Update the Figma file URL below with your actual Figma component URL.
 * The URL should point to the specific component node in your Figma file.
 *
 * To get the URL:
 * 1. Open your Figma file
 * 2. Select the Toggle component
 * 3. Right-click and select "Copy link to selection"
 * 4. Replace the placeholder URL below
 */

figma.connect(
  Toggle,
  'https://figma.com/design/FIGMA_FILE_ID?node-id=TOGGLE_NODE_ID',
  {
    props: {
      /**
       * Map Figma variants to React props.
       * The keys should match your Figma variant property names exactly.
       */
      size: figma.enum('Size', {
        Small: 'small',
        Medium: 'medium',
        Large: 'large'
      }),
      checked: figma.boolean('Checked'),
      disabled: figma.enum('State', {
        Disabled: true
      }),
      animated: figma.boolean('Animated')
    },
    example: props => (
      <Toggle
        size={props.size}
        checked={props.checked}
        disabled={props.disabled}
        animated={props.animated}
      />
    )
  }
);

/**
 * Variant: Unchecked Toggle
 */
figma.connect(
  Toggle,
  'https://figma.com/design/FIGMA_FILE_ID?node-id=TOGGLE_UNCHECKED_NODE_ID',
  {
    variant: { Checked: false },
    example: () => <Toggle checked={false} />
  }
);

/**
 * Variant: Checked Toggle
 */
figma.connect(
  Toggle,
  'https://figma.com/design/FIGMA_FILE_ID?node-id=TOGGLE_CHECKED_NODE_ID',
  {
    variant: { Checked: true },
    example: () => <Toggle checked={true} />
  }
);

/**
 * Variant: Disabled Toggle
 */
figma.connect(
  Toggle,
  'https://figma.com/design/FIGMA_FILE_ID?node-id=TOGGLE_DISABLED_NODE_ID',
  {
    variant: { State: 'Disabled' },
    example: () => <Toggle checked={false} disabled />
  }
);

/**
 * Variant: Small Toggle
 */
figma.connect(
  Toggle,
  'https://figma.com/design/FIGMA_FILE_ID?node-id=TOGGLE_SMALL_NODE_ID',
  {
    variant: { Size: 'Small' },
    example: () => <Toggle checked={false} size="small" />
  }
);

/**
 * Variant: Large Toggle
 */
figma.connect(
  Toggle,
  'https://figma.com/design/FIGMA_FILE_ID?node-id=TOGGLE_LARGE_NODE_ID',
  {
    variant: { Size: 'Large' },
    example: () => <Toggle checked={false} size="large" />
  }
);
