import React from 'react';
import figma from '@figma/code-connect';
import { RangeSingle } from './RangeSingle';

/**
 * -- FIGMA CODE CONNECT --
 *
 * Update the Figma file URL below with your actual Figma component URL.
 * The URL should point to the specific component node in your Figma file.
 *
 * To get the URL:
 * 1. Open your Figma file
 * 2. Select the RangeSingle component
 * 3. Right-click and select "Copy link to selection"
 * 4. Replace the placeholder URL below
 */

figma.connect(
  RangeSingle,
  'https://figma.com/design/FIGMA_FILE_ID?node-id=RANGE_SINGLE_NODE_ID',
  {
    props: {
      /**
       * Map Figma variants to React props.
       * The keys should match your Figma variant property names exactly.
       */
      disabled: figma.enum('State', {
        Disabled: true
      }),
      showHighlight: figma.boolean('Show Highlight'),
      valueDisplay: figma.enum('Value Display', {
        Hover: 'hover',
        Always: 'always',
        Never: 'never'
      })
    },
    example: props => (
      <RangeSingle
        min={0}
        max={100}
        value={50}
        disabled={props.disabled}
        showHighlight={props.showHighlight}
        valueDisplay={props.valueDisplay}
        onChange={() => {}}
      />
    )
  }
);

/**
 * Variant: Default Range Slider
 */
figma.connect(
  RangeSingle,
  'https://figma.com/design/FIGMA_FILE_ID?node-id=RANGE_SINGLE_DEFAULT_NODE_ID',
  {
    variant: { State: 'Default' },
    example: () => (
      <RangeSingle min={0} max={100} value={50} onChange={() => {}} />
    )
  }
);

/**
 * Variant: Range with Highlight
 */
figma.connect(
  RangeSingle,
  'https://figma.com/design/FIGMA_FILE_ID?node-id=RANGE_SINGLE_HIGHLIGHT_NODE_ID',
  {
    variant: { 'Show Highlight': true },
    example: () => (
      <RangeSingle
        min={0}
        max={100}
        value={50}
        showHighlight
        onChange={() => {}}
      />
    )
  }
);

/**
 * Variant: Disabled Range Slider
 */
figma.connect(
  RangeSingle,
  'https://figma.com/design/FIGMA_FILE_ID?node-id=RANGE_SINGLE_DISABLED_NODE_ID',
  {
    variant: { State: 'Disabled' },
    example: () => (
      <RangeSingle min={0} max={100} value={50} disabled onChange={() => {}} />
    )
  }
);
