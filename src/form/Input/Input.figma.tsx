import React from 'react';
import figma from '@figma/code-connect';
import { Input } from './Input';

/**
 * -- FIGMA CODE CONNECT --
 *
 * Update the Figma file URL below with your actual Figma component URL.
 * The URL should point to the specific component node in your Figma file.
 *
 * To get the URL:
 * 1. Open your Figma file
 * 2. Select the Input component
 * 3. Right-click and select "Copy link to selection"
 * 4. Replace the placeholder URL below
 */

figma.connect(
  Input,
  'https://figma.com/design/FIGMA_FILE_ID?node-id=INPUT_NODE_ID',
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
      <Input
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
 * Variant: Default Input
 */
figma.connect(
  Input,
  'https://figma.com/design/FIGMA_FILE_ID?node-id=INPUT_DEFAULT_NODE_ID',
  {
    variant: { State: 'Default' },
    example: () => <Input placeholder="Enter text..." />
  }
);

/**
 * Variant: Input with Error
 */
figma.connect(
  Input,
  'https://figma.com/design/FIGMA_FILE_ID?node-id=INPUT_ERROR_NODE_ID',
  {
    variant: { State: 'Error' },
    example: () => <Input error placeholder="Invalid input" />
  }
);

/**
 * Variant: Disabled Input
 */
figma.connect(
  Input,
  'https://figma.com/design/FIGMA_FILE_ID?node-id=INPUT_DISABLED_NODE_ID',
  {
    variant: { State: 'Disabled' },
    example: () => <Input disabled placeholder="Disabled input" />
  }
);

/**
 * Variant: Full Width Input
 */
figma.connect(
  Input,
  'https://figma.com/design/FIGMA_FILE_ID?node-id=INPUT_FULLWIDTH_NODE_ID',
  {
    variant: { 'Full Width': true },
    example: () => <Input fullWidth placeholder="Full width input" />
  }
);

/**
 * Variant: Input with Adornments
 */
figma.connect(
  Input,
  'https://figma.com/design/FIGMA_FILE_ID?node-id=INPUT_ADORNMENT_NODE_ID',
  {
    variant: { 'Has Adornment': true },
    example: () => (
      <Input placeholder="Search..." startAdornment={<span>🔍</span>} />
    )
  }
);
