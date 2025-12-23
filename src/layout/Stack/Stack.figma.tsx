import React from 'react';
import figma from '@figma/code-connect';
import { Stack } from './Stack';

/**
 * -- FIGMA CODE CONNECT --
 *
 * Update the Figma file URL below with your actual Figma component URL.
 * The URL should point to the specific component node in your Figma file.
 *
 * To get the URL:
 * 1. Open your Figma file
 * 2. Select the Stack component
 * 3. Right-click and select "Copy link to selection"
 * 4. Replace the placeholder URL below
 */

figma.connect(
  Stack,
  'https://figma.com/design/FIGMA_FILE_ID?node-id=STACK_NODE_ID',
  {
    props: {
      /**
       * Map Figma variants to React props.
       * The keys should match your Figma variant property names exactly.
       */
      dense: figma.boolean('Dense'),
      inline: figma.boolean('Inline'),
      direction: figma.enum('Direction', {
        Row: 'row',
        Column: 'column',
        'Row Reverse': 'rowReverse',
        'Column Reverse': 'columnReverse'
      }),
      alignItems: figma.enum('Align Items', {
        Start: 'start',
        End: 'end',
        Center: 'center',
        Stretch: 'stretch'
      }),
      justifyContent: figma.enum('Justify Content', {
        Start: 'start',
        End: 'end',
        Center: 'center',
        'Space Between': 'spaceBetween'
      })
    },
    example: props => (
      <Stack
        dense={props.dense}
        inline={props.inline}
        direction={props.direction}
        alignItems={props.alignItems}
        justifyContent={props.justifyContent}
      >
        <div>Item 1</div>
        <div>Item 2</div>
        <div>Item 3</div>
      </Stack>
    )
  }
);

/**
 * Variant: Horizontal Stack (Row)
 */
figma.connect(
  Stack,
  'https://figma.com/design/FIGMA_FILE_ID?node-id=STACK_ROW_NODE_ID',
  {
    variant: { Direction: 'Row' },
    example: () => (
      <Stack direction="row">
        <div>Item 1</div>
        <div>Item 2</div>
        <div>Item 3</div>
      </Stack>
    )
  }
);

/**
 * Variant: Vertical Stack (Column)
 */
figma.connect(
  Stack,
  'https://figma.com/design/FIGMA_FILE_ID?node-id=STACK_COLUMN_NODE_ID',
  {
    variant: { Direction: 'Column' },
    example: () => (
      <Stack direction="column">
        <div>Item 1</div>
        <div>Item 2</div>
        <div>Item 3</div>
      </Stack>
    )
  }
);

/**
 * Variant: Dense Stack
 */
figma.connect(
  Stack,
  'https://figma.com/design/FIGMA_FILE_ID?node-id=STACK_DENSE_NODE_ID',
  {
    variant: { Dense: true },
    example: () => (
      <Stack dense>
        <div>Dense Item 1</div>
        <div>Dense Item 2</div>
        <div>Dense Item 3</div>
      </Stack>
    )
  }
);

/**
 * Variant: Center Aligned Stack
 */
figma.connect(
  Stack,
  'https://figma.com/design/FIGMA_FILE_ID?node-id=STACK_CENTER_NODE_ID',
  {
    variant: { 'Align Items': 'Center', 'Justify Content': 'Center' },
    example: () => (
      <Stack alignItems="center" justifyContent="center">
        <div>Centered Item 1</div>
        <div>Centered Item 2</div>
        <div>Centered Item 3</div>
      </Stack>
    )
  }
);

/**
 * Variant: Space Between Stack
 */
figma.connect(
  Stack,
  'https://figma.com/design/FIGMA_FILE_ID?node-id=STACK_SPACE_BETWEEN_NODE_ID',
  {
    variant: { 'Justify Content': 'Space Between' },
    example: () => (
      <Stack justifyContent="spaceBetween">
        <div>Start</div>
        <div>Middle</div>
        <div>End</div>
      </Stack>
    )
  }
);

/**
 * Variant: Inline Stack
 */
figma.connect(
  Stack,
  'https://figma.com/design/FIGMA_FILE_ID?node-id=STACK_INLINE_NODE_ID',
  {
    variant: { Inline: true },
    example: () => (
      <Stack inline>
        <span>Inline 1</span>
        <span>Inline 2</span>
        <span>Inline 3</span>
      </Stack>
    )
  }
);
