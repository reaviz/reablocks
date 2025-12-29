import React from 'react';
import figma from '@figma/code-connect';
import { RangeDouble } from './RangeDouble';

/**
 * -- FIGMA CODE CONNECT --
 *
 * Update the Figma file URL below with your actual Figma component URL.
 * The URL should point to the specific component node in your Figma file.
 *
 * To get the URL:
 * 1. Open your Figma file
 * 2. Select the RangeDouble component
 * 3. Right-click and select "Copy link to selection"
 * 4. Replace the placeholder URL below
 */

figma.connect(
  RangeDouble,
  'https://figma.com/design/FIGMA_FILE_ID?node-id=RANGE_DOUBLE_NODE_ID',
  {
    props: {
      /**
       * Map Figma variants to React props.
       * The keys should match your Figma variant property names exactly.
       */
      disabled: figma.enum('State', {
        Disabled: true
      }),
      valueDisplay: figma.enum('Value Display', {
        Hover: 'hover',
        Always: 'always',
        Never: 'never'
      })
    },
    example: props => (
      <RangeDouble
        min={0}
        max={100}
        value={[25, 75]}
        disabled={props.disabled}
        valueDisplay={props.valueDisplay}
        onChange={() => {}}
      />
    )
  }
);

/**
 * Variant: Default Double Range Slider
 */
figma.connect(
  RangeDouble,
  'https://figma.com/design/FIGMA_FILE_ID?node-id=RANGE_DOUBLE_DEFAULT_NODE_ID',
  {
    variant: { State: 'Default' },
    example: () => (
      <RangeDouble min={0} max={100} value={[25, 75]} onChange={() => {}} />
    )
  }
);

/**
 * Variant: Disabled Double Range Slider
 */
figma.connect(
  RangeDouble,
  'https://figma.com/design/FIGMA_FILE_ID?node-id=RANGE_DOUBLE_DISABLED_NODE_ID',
  {
    variant: { State: 'Disabled' },
    example: () => (
      <RangeDouble
        min={0}
        max={100}
        value={[25, 75]}
        disabled
        onChange={() => {}}
      />
    )
  }
);
