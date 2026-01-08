import React from 'react';
import figma from '@figma/code-connect';
import { Popover } from './Popover';

/**
 * -- FIGMA CODE CONNECT --
 *
 * Update the Figma file URL below with your actual Figma component URL.
 * The URL should point to the specific component node in your Figma file.
 *
 * To get the URL:
 * 1. Open your Figma file
 * 2. Select the Popover component
 * 3. Right-click and select "Copy link to selection"
 * 4. Replace the placeholder URL below
 */

figma.connect(
  Popover,
  'https://figma.com/design/FIGMA_FILE_ID?node-id=POPOVER_NODE_ID',
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
        Right: 'right'
      }),
      trigger: figma.enum('Trigger', {
        Click: 'click',
        Hover: 'hover',
        Focus: 'focus'
      }),
      closeOnEscape: figma.boolean('Close On Escape'),
      closeOnBodyClick: figma.boolean('Close On Body Click'),
      disablePadding: figma.boolean('Disable Padding')
    },
    example: props => (
      <Popover
        placement={props.placement}
        trigger={props.trigger}
        closeOnEscape={props.closeOnEscape}
        closeOnBodyClick={props.closeOnBodyClick}
        disablePadding={props.disablePadding}
        content={<div>Popover content</div>}
      >
        <button>Toggle Popover</button>
      </Popover>
    )
  }
);

/**
 * Variant: Click Trigger Popover
 */
figma.connect(
  Popover,
  'https://figma.com/design/FIGMA_FILE_ID?node-id=POPOVER_CLICK_NODE_ID',
  {
    variant: { Trigger: 'Click' },
    example: () => (
      <Popover trigger="click" content={<div>Click to toggle</div>}>
        <button>Click me</button>
      </Popover>
    )
  }
);

/**
 * Variant: Hover Trigger Popover
 */
figma.connect(
  Popover,
  'https://figma.com/design/FIGMA_FILE_ID?node-id=POPOVER_HOVER_NODE_ID',
  {
    variant: { Trigger: 'Hover' },
    example: () => (
      <Popover trigger="hover" content={<div>Hover to show</div>}>
        <button>Hover me</button>
      </Popover>
    )
  }
);

/**
 * Variant: Bottom Placement Popover
 */
figma.connect(
  Popover,
  'https://figma.com/design/FIGMA_FILE_ID?node-id=POPOVER_BOTTOM_NODE_ID',
  {
    variant: { Placement: 'Bottom' },
    example: () => (
      <Popover placement="bottom" content={<div>Popover content below</div>}>
        <button>Show below</button>
      </Popover>
    )
  }
);

/**
 * Variant: No Padding Popover
 */
figma.connect(
  Popover,
  'https://figma.com/design/FIGMA_FILE_ID?node-id=POPOVER_NO_PADDING_NODE_ID',
  {
    variant: { 'Disable Padding': true },
    example: () => (
      <Popover disablePadding content={<div>Full width content</div>}>
        <button>Show popover</button>
      </Popover>
    )
  }
);
