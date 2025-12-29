import React from 'react';
import figma from '@figma/code-connect';
import { Arrow } from './Arrow';

/**
 * -- FIGMA CODE CONNECT --
 *
 * Update the Figma file URL below with your actual Figma component URL.
 * The URL should point to the specific component node in your Figma file.
 *
 * To get the URL:
 * 1. Open your Figma file
 * 2. Select the Arrow component
 * 3. Right-click and select "Copy link to selection"
 * 4. Replace the placeholder URL below
 */

figma.connect(
  Arrow,
  'https://figma.com/design/FIGMA_FILE_ID?node-id=ARROW_NODE_ID',
  {
    props: {
      /**
       * Map Figma variants to React props.
       * The keys should match your Figma variant property names exactly.
       */
      direction: figma.enum('Direction', {
        Up: 'up',
        Right: 'right',
        Down: 'down',
        Left: 'left'
      })
    },
    example: props => <Arrow direction={props.direction} />
  }
);

/**
 * Variant: Arrow Down (common use case)
 */
figma.connect(
  Arrow,
  'https://figma.com/design/FIGMA_FILE_ID?node-id=ARROW_DOWN_NODE_ID',
  {
    variant: { Direction: 'Down' },
    example: () => <Arrow direction="down" />
  }
);

/**
 * Variant: Arrow Up
 */
figma.connect(
  Arrow,
  'https://figma.com/design/FIGMA_FILE_ID?node-id=ARROW_UP_NODE_ID',
  {
    variant: { Direction: 'Up' },
    example: () => <Arrow direction="up" />
  }
);

/**
 * Variant: Arrow Right
 */
figma.connect(
  Arrow,
  'https://figma.com/design/FIGMA_FILE_ID?node-id=ARROW_RIGHT_NODE_ID',
  {
    variant: { Direction: 'Right' },
    example: () => <Arrow direction="right" />
  }
);

/**
 * Variant: Arrow Left
 */
figma.connect(
  Arrow,
  'https://figma.com/design/FIGMA_FILE_ID?node-id=ARROW_LEFT_NODE_ID',
  {
    variant: { Direction: 'Left' },
    example: () => <Arrow direction="left" />
  }
);
