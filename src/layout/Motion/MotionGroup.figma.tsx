import React from 'react';
import figma from '@figma/code-connect';
import { MotionGroup } from './MotionGroup';
import { MotionItem } from './MotionItem';

/**
 * -- FIGMA CODE CONNECT --
 *
 * Update the Figma file URL below with your actual Figma component URL.
 * The URL should point to the specific component node in your Figma file.
 *
 * To get the URL:
 * 1. Open your Figma file
 * 2. Select the MotionGroup component
 * 3. Right-click and select "Copy link to selection"
 * 4. Replace the placeholder URL below
 */

figma.connect(
  MotionGroup,
  'https://figma.com/design/FIGMA_FILE_ID?node-id=MOTION_GROUP_NODE_ID',
  {
    example: () => (
      <MotionGroup>
        <MotionItem>
          <div>First animated item</div>
        </MotionItem>
        <MotionItem>
          <div>Second animated item</div>
        </MotionItem>
        <MotionItem>
          <div>Third animated item</div>
        </MotionItem>
      </MotionGroup>
    )
  }
);

/**
 * Variant: Vertical Motion Group
 */
figma.connect(
  MotionGroup,
  'https://figma.com/design/FIGMA_FILE_ID?node-id=MOTION_GROUP_VERTICAL_NODE_ID',
  {
    variant: { Direction: 'Vertical' },
    example: () => (
      <MotionGroup>
        <MotionItem direction="vertical">
          <div>Item 1</div>
        </MotionItem>
        <MotionItem direction="vertical">
          <div>Item 2</div>
        </MotionItem>
        <MotionItem direction="vertical">
          <div>Item 3</div>
        </MotionItem>
      </MotionGroup>
    )
  }
);

/**
 * Variant: Horizontal Motion Group
 */
figma.connect(
  MotionGroup,
  'https://figma.com/design/FIGMA_FILE_ID?node-id=MOTION_GROUP_HORIZONTAL_NODE_ID',
  {
    variant: { Direction: 'Horizontal' },
    example: () => (
      <MotionGroup>
        <MotionItem direction="horizontal">
          <div>Item 1</div>
        </MotionItem>
        <MotionItem direction="horizontal">
          <div>Item 2</div>
        </MotionItem>
        <MotionItem direction="horizontal">
          <div>Item 3</div>
        </MotionItem>
      </MotionGroup>
    )
  }
);

/**
 * Variant: Staggered Animation Group
 */
figma.connect(
  MotionGroup,
  'https://figma.com/design/FIGMA_FILE_ID?node-id=MOTION_GROUP_STAGGERED_NODE_ID',
  {
    variant: { Type: 'Staggered' },
    example: () => (
      <MotionGroup>
        <MotionItem>
          <div>First (appears first)</div>
        </MotionItem>
        <MotionItem>
          <div>Second (appears with delay)</div>
        </MotionItem>
        <MotionItem>
          <div>Third (appears with more delay)</div>
        </MotionItem>
      </MotionGroup>
    )
  }
);
