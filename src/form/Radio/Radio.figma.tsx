import React from 'react';
import figma from '@figma/code-connect';
import { Radio } from './Radio';

/**
 * -- FIGMA CODE CONNECT --
 *
 * Update the Figma file URL below with your actual Figma component URL.
 * The URL should point to the specific component node in your Figma file.
 *
 * To get the URL:
 * 1. Open your Figma file
 * 2. Select the Radio component
 * 3. Right-click and select "Copy link to selection"
 * 4. Replace the placeholder URL below
 */

figma.connect(
  Radio,
  'https://figma.com/design/FIGMA_FILE_ID?node-id=RADIO_NODE_ID',
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
      label: figma.string('Label')
    },
    example: props => (
      <Radio
        size={props.size}
        checked={props.checked}
        disabled={props.disabled}
        label={props.label}
      />
    )
  }
);

/**
 * Variant: Unchecked Radio
 */
figma.connect(
  Radio,
  'https://figma.com/design/FIGMA_FILE_ID?node-id=RADIO_UNCHECKED_NODE_ID',
  {
    variant: { Checked: false },
    example: () => <Radio checked={false} label="Option 1" />
  }
);

/**
 * Variant: Checked Radio
 */
figma.connect(
  Radio,
  'https://figma.com/design/FIGMA_FILE_ID?node-id=RADIO_CHECKED_NODE_ID',
  {
    variant: { Checked: true },
    example: () => <Radio checked={true} label="Option 1" />
  }
);

/**
 * Variant: Disabled Radio
 */
figma.connect(
  Radio,
  'https://figma.com/design/FIGMA_FILE_ID?node-id=RADIO_DISABLED_NODE_ID',
  {
    variant: { State: 'Disabled' },
    example: () => <Radio disabled label="Disabled Option" />
  }
);

/**
 * Variant: Small Radio
 */
figma.connect(
  Radio,
  'https://figma.com/design/FIGMA_FILE_ID?node-id=RADIO_SMALL_NODE_ID',
  {
    variant: { Size: 'Small' },
    example: () => <Radio size="small" label="Small" />
  }
);

/**
 * Variant: Large Radio
 */
figma.connect(
  Radio,
  'https://figma.com/design/FIGMA_FILE_ID?node-id=RADIO_LARGE_NODE_ID',
  {
    variant: { Size: 'Large' },
    example: () => <Radio size="large" label="Large" />
  }
);
