import React from 'react';
import figma from '@figma/code-connect';
import { Divider } from './Divider';

/**
 * -- FIGMA CODE CONNECT --
 *
 * Update the Figma file URL below with your actual Figma component URL.
 * The URL should point to the specific component node in your Figma file.
 *
 * To get the URL:
 * 1. Open your Figma file
 * 2. Select the Divider component
 * 3. Right-click and select "Copy link to selection"
 * 4. Replace the placeholder URL below
 */

figma.connect(
  Divider,
  'https://figma.com/design/FIGMA_FILE_ID?node-id=DIVIDER_NODE_ID',
  {
    props: {
      /**
       * Map Figma variants to React props.
       * The keys should match your Figma variant property names exactly.
       */
      disableMargins: figma.boolean('Disable Margins'),
      orientation: figma.enum('Orientation', {
        Horizontal: 'horizontal',
        Vertical: 'vertical'
      }),
      variant: figma.enum('Variant', {
        Primary: 'primary',
        Secondary: 'secondary'
      })
    },
    example: props => (
      <Divider
        disableMargins={props.disableMargins}
        orientation={props.orientation}
        variant={props.variant}
      />
    )
  }
);

/**
 * Variant: Horizontal Divider
 */
figma.connect(
  Divider,
  'https://figma.com/design/FIGMA_FILE_ID?node-id=DIVIDER_HORIZONTAL_NODE_ID',
  {
    variant: { Orientation: 'Horizontal' },
    example: () => <Divider orientation="horizontal" />
  }
);

/**
 * Variant: Vertical Divider
 */
figma.connect(
  Divider,
  'https://figma.com/design/FIGMA_FILE_ID?node-id=DIVIDER_VERTICAL_NODE_ID',
  {
    variant: { Orientation: 'Vertical' },
    example: () => <Divider orientation="vertical" />
  }
);

/**
 * Variant: Primary Divider
 */
figma.connect(
  Divider,
  'https://figma.com/design/FIGMA_FILE_ID?node-id=DIVIDER_PRIMARY_NODE_ID',
  {
    variant: { Variant: 'Primary' },
    example: () => <Divider variant="primary" />
  }
);

/**
 * Variant: Secondary Divider
 */
figma.connect(
  Divider,
  'https://figma.com/design/FIGMA_FILE_ID?node-id=DIVIDER_SECONDARY_NODE_ID',
  {
    variant: { Variant: 'Secondary' },
    example: () => <Divider variant="secondary" />
  }
);

/**
 * Variant: No Margins
 */
figma.connect(
  Divider,
  'https://figma.com/design/FIGMA_FILE_ID?node-id=DIVIDER_NO_MARGINS_NODE_ID',
  {
    variant: { 'Disable Margins': true },
    example: () => <Divider disableMargins />
  }
);
