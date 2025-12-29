import React from 'react';
import figma from '@figma/code-connect';
import { Textarea } from './Textarea';

/**
 * -- FIGMA CODE CONNECT --
 *
 * Update the Figma file URL below with your actual Figma component URL.
 * The URL should point to the specific component node in your Figma file.
 *
 * To get the URL:
 * 1. Open your Figma file
 * 2. Select the Textarea component
 * 3. Right-click and select "Copy link to selection"
 * 4. Replace the placeholder URL below
 */

figma.connect(
  Textarea,
  'https://figma.com/design/FIGMA_FILE_ID?node-id=TEXTAREA_NODE_ID',
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
      disabled: figma.enum('State', {
        Disabled: true
      }),
      error: figma.enum('State', {
        Error: true
      }),
      fullWidth: figma.boolean('Full Width'),
      placeholder: figma.string('Placeholder')
    },
    example: props => (
      <Textarea
        size={props.size}
        disabled={props.disabled}
        error={props.error}
        fullWidth={props.fullWidth}
        placeholder={props.placeholder}
      />
    )
  }
);

/**
 * Variant: Default Textarea
 */
figma.connect(
  Textarea,
  'https://figma.com/design/FIGMA_FILE_ID?node-id=TEXTAREA_DEFAULT_NODE_ID',
  {
    variant: { State: 'Default' },
    example: () => <Textarea placeholder="Enter text..." />
  }
);

/**
 * Variant: Error State Textarea
 */
figma.connect(
  Textarea,
  'https://figma.com/design/FIGMA_FILE_ID?node-id=TEXTAREA_ERROR_NODE_ID',
  {
    variant: { State: 'Error' },
    example: () => <Textarea error placeholder="Invalid input" />
  }
);

/**
 * Variant: Disabled Textarea
 */
figma.connect(
  Textarea,
  'https://figma.com/design/FIGMA_FILE_ID?node-id=TEXTAREA_DISABLED_NODE_ID',
  {
    variant: { State: 'Disabled' },
    example: () => <Textarea disabled placeholder="Disabled textarea" />
  }
);

/**
 * Variant: Full Width Textarea
 */
figma.connect(
  Textarea,
  'https://figma.com/design/FIGMA_FILE_ID?node-id=TEXTAREA_FULLWIDTH_NODE_ID',
  {
    variant: { 'Full Width': true },
    example: () => <Textarea fullWidth placeholder="Full width textarea" />
  }
);

/**
 * Variant: Small Textarea
 */
figma.connect(
  Textarea,
  'https://figma.com/design/FIGMA_FILE_ID?node-id=TEXTAREA_SMALL_NODE_ID',
  {
    variant: { Size: 'Small' },
    example: () => <Textarea size="small" placeholder="Small textarea" />
  }
);

/**
 * Variant: Large Textarea
 */
figma.connect(
  Textarea,
  'https://figma.com/design/FIGMA_FILE_ID?node-id=TEXTAREA_LARGE_NODE_ID',
  {
    variant: { Size: 'Large' },
    example: () => <Textarea size="large" placeholder="Large textarea" />
  }
);
