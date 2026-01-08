import React from 'react';
import figma from '@figma/code-connect';
import { Checkbox } from './Checkbox';

/**
 * -- FIGMA CODE CONNECT --
 *
 * Update the Figma file URL below with your actual Figma component URL.
 * The URL should point to the specific component node in your Figma file.
 *
 * To get the URL:
 * 1. Open your Figma file
 * 2. Select the Checkbox component
 * 3. Right-click and select "Copy link to selection"
 * 4. Replace the placeholder URL below
 */

figma.connect(
  Checkbox,
  'https://figma.com/design/FIGMA_FILE_ID?node-id=CHECKBOX_NODE_ID',
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
      intermediate: figma.boolean('Intermediate'),
      disabled: figma.enum('State', {
        Disabled: true
      }),
      label: figma.string('Label'),
      labelPosition: figma.enum('Label Position', {
        Start: 'start',
        End: 'end'
      })
    },
    example: props => (
      <Checkbox
        size={props.size}
        checked={props.checked}
        intermediate={props.intermediate}
        disabled={props.disabled}
        label={props.label}
        labelPosition={props.labelPosition}
      />
    )
  }
);

/**
 * Variant: Unchecked Checkbox
 */
figma.connect(
  Checkbox,
  'https://figma.com/design/FIGMA_FILE_ID?node-id=CHECKBOX_UNCHECKED_NODE_ID',
  {
    variant: { Checked: false },
    example: () => <Checkbox checked={false} label="Unchecked" />
  }
);

/**
 * Variant: Checked Checkbox
 */
figma.connect(
  Checkbox,
  'https://figma.com/design/FIGMA_FILE_ID?node-id=CHECKBOX_CHECKED_NODE_ID',
  {
    variant: { Checked: true },
    example: () => <Checkbox checked={true} label="Checked" />
  }
);

/**
 * Variant: Intermediate Checkbox
 */
figma.connect(
  Checkbox,
  'https://figma.com/design/FIGMA_FILE_ID?node-id=CHECKBOX_INTERMEDIATE_NODE_ID',
  {
    variant: { Intermediate: true },
    example: () => (
      <Checkbox checked={false} intermediate={true} label="Intermediate" />
    )
  }
);

/**
 * Variant: Disabled Checkbox
 */
figma.connect(
  Checkbox,
  'https://figma.com/design/FIGMA_FILE_ID?node-id=CHECKBOX_DISABLED_NODE_ID',
  {
    variant: { State: 'Disabled' },
    example: () => <Checkbox disabled label="Disabled" />
  }
);

/**
 * Variant: Small Checkbox
 */
figma.connect(
  Checkbox,
  'https://figma.com/design/FIGMA_FILE_ID?node-id=CHECKBOX_SMALL_NODE_ID',
  {
    variant: { Size: 'Small' },
    example: () => <Checkbox size="small" label="Small" />
  }
);

/**
 * Variant: Large Checkbox
 */
figma.connect(
  Checkbox,
  'https://figma.com/design/FIGMA_FILE_ID?node-id=CHECKBOX_LARGE_NODE_ID',
  {
    variant: { Size: 'Large' },
    example: () => <Checkbox size="large" label="Large" />
  }
);
