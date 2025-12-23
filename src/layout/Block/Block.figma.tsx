import React from 'react';
import figma from '@figma/code-connect';
import { Block } from './Block';

/**
 * -- FIGMA CODE CONNECT --
 *
 * Update the Figma file URL below with your actual Figma component URL.
 * The URL should point to the specific component node in your Figma file.
 *
 * To get the URL:
 * 1. Open your Figma file
 * 2. Select the Block component
 * 3. Right-click and select "Copy link to selection"
 * 4. Replace the placeholder URL below
 */

figma.connect(
  Block,
  'https://figma.com/design/FIGMA_FILE_ID?node-id=BLOCK_NODE_ID',
  {
    props: {
      /**
       * Map Figma variants to React props.
       * The keys should match your Figma variant property names exactly.
       */
      label: figma.string('Label'),
      disableMargin: figma.boolean('Disable Margin'),
      required: figma.boolean('Required'),
      direction: figma.enum('Direction', {
        Vertical: 'vertical',
        Horizontal: 'horizontal'
      }),
      alignment: figma.enum('Alignment', {
        Start: 'start',
        Center: 'center',
        End: 'end'
      })
    },
    example: props => (
      <Block
        label={props.label}
        disableMargin={props.disableMargin}
        required={props.required}
        direction={props.direction}
        alignment={props.alignment}
      >
        Block content goes here
      </Block>
    )
  }
);

/**
 * Variant: Vertical Block with Label
 */
figma.connect(
  Block,
  'https://figma.com/design/FIGMA_FILE_ID?node-id=BLOCK_VERTICAL_NODE_ID',
  {
    variant: { Direction: 'Vertical' },
    example: () => (
      <Block label="Label" direction="vertical">
        <p>Content in vertical layout</p>
      </Block>
    )
  }
);

/**
 * Variant: Horizontal Block
 */
figma.connect(
  Block,
  'https://figma.com/design/FIGMA_FILE_ID?node-id=BLOCK_HORIZONTAL_NODE_ID',
  {
    variant: { Direction: 'Horizontal' },
    example: () => (
      <Block label="Label" direction="horizontal">
        <input type="text" />
      </Block>
    )
  }
);

/**
 * Variant: Required Block
 */
figma.connect(
  Block,
  'https://figma.com/design/FIGMA_FILE_ID?node-id=BLOCK_REQUIRED_NODE_ID',
  {
    variant: { Required: true },
    example: () => (
      <Block label="Required Field" required>
        <input type="text" />
      </Block>
    )
  }
);

/**
 * Variant: Block without Margin
 */
figma.connect(
  Block,
  'https://figma.com/design/FIGMA_FILE_ID?node-id=BLOCK_NO_MARGIN_NODE_ID',
  {
    variant: { 'Disable Margin': true },
    example: () => (
      <Block label="No Margin Block" disableMargin>
        <p>Content without bottom margin</p>
      </Block>
    )
  }
);
