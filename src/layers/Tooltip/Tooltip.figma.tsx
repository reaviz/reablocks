import React from 'react';
import figma from '@figma/code-connect';
import { Tooltip } from './Tooltip';

/**
 * -- FIGMA CODE CONNECT --
 *
 * Update the Figma file URL below with your actual Figma component URL.
 * The URL should point to the specific component node in your Figma file.
 *
 * To get the URL:
 * 1. Open your Figma file
 * 2. Select the Tooltip component
 * 3. Right-click and select "Copy link to selection"
 * 4. Replace the placeholder URL below
 */

figma.connect(
  Tooltip,
  'https://figma.com/design/FIGMA_FILE_ID?node-id=TOOLTIP_NODE_ID',
  {
    props: {
      /**
       * Map Figma variants to React props.
       * The keys should match your Figma variant property names exactly.
       */
      placement: figma.enum('Placement', {
        Top: 'top',
        'Top Start': 'top-start',
        'Top End': 'top-end',
        Bottom: 'bottom',
        'Bottom Start': 'bottom-start',
        'Bottom End': 'bottom-end',
        Left: 'left',
        'Left Start': 'left-start',
        'Left End': 'left-end',
        Right: 'right',
        'Right Start': 'right-start',
        'Right End': 'right-end'
      }),
      trigger: figma.enum('Trigger', {
        Hover: 'hover',
        Click: 'click',
        Focus: 'focus'
      }),
      disabled: figma.boolean('Disabled'),
      closeOnClick: figma.boolean('Close On Click'),
      closeOnEscape: figma.boolean('Close On Escape'),
      followCursor: figma.boolean('Follow Cursor'),
      content: figma.string('Content')
    },
    example: props => (
      <Tooltip
        placement={props.placement}
        trigger={props.trigger}
        disabled={props.disabled}
        closeOnClick={props.closeOnClick}
        closeOnEscape={props.closeOnEscape}
        followCursor={props.followCursor}
        content={props.content}
      >
        <button>Hover me</button>
      </Tooltip>
    )
  }
);

/**
 * Variant: Top Tooltip
 */
figma.connect(
  Tooltip,
  'https://figma.com/design/FIGMA_FILE_ID?node-id=TOOLTIP_TOP_NODE_ID',
  {
    variant: { Placement: 'Top' },
    example: () => (
      <Tooltip placement="top" content="Tooltip on top">
        <button>Hover me</button>
      </Tooltip>
    )
  }
);

/**
 * Variant: Bottom Tooltip
 */
figma.connect(
  Tooltip,
  'https://figma.com/design/FIGMA_FILE_ID?node-id=TOOLTIP_BOTTOM_NODE_ID',
  {
    variant: { Placement: 'Bottom' },
    example: () => (
      <Tooltip placement="bottom" content="Tooltip on bottom">
        <button>Hover me</button>
      </Tooltip>
    )
  }
);

/**
 * Variant: Left Tooltip
 */
figma.connect(
  Tooltip,
  'https://figma.com/design/FIGMA_FILE_ID?node-id=TOOLTIP_LEFT_NODE_ID',
  {
    variant: { Placement: 'Left' },
    example: () => (
      <Tooltip placement="left" content="Tooltip on left">
        <button>Hover me</button>
      </Tooltip>
    )
  }
);

/**
 * Variant: Right Tooltip
 */
figma.connect(
  Tooltip,
  'https://figma.com/design/FIGMA_FILE_ID?node-id=TOOLTIP_RIGHT_NODE_ID',
  {
    variant: { Placement: 'Right' },
    example: () => (
      <Tooltip placement="right" content="Tooltip on right">
        <button>Hover me</button>
      </Tooltip>
    )
  }
);

/**
 * Variant: Click Trigger Tooltip
 */
figma.connect(
  Tooltip,
  'https://figma.com/design/FIGMA_FILE_ID?node-id=TOOLTIP_CLICK_NODE_ID',
  {
    variant: { Trigger: 'Click' },
    example: () => (
      <Tooltip trigger="click" content="Click to toggle">
        <button>Click me</button>
      </Tooltip>
    )
  }
);

/**
 * Variant: Follow Cursor Tooltip
 */
figma.connect(
  Tooltip,
  'https://figma.com/design/FIGMA_FILE_ID?node-id=TOOLTIP_FOLLOW_NODE_ID',
  {
    variant: { 'Follow Cursor': true },
    example: () => (
      <Tooltip followCursor content="I follow your cursor">
        <button>Move your mouse</button>
      </Tooltip>
    )
  }
);
