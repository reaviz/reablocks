import React from 'react';
import figma from '@figma/code-connect';
import { Menu } from './Menu';

/**
 * -- FIGMA CODE CONNECT --
 *
 * Update the Figma file URL below with your actual Figma component URL.
 * The URL should point to the specific component node in your Figma file.
 *
 * To get the URL:
 * 1. Open your Figma file
 * 2. Select the Menu component
 * 3. Right-click and select "Copy link to selection"
 * 4. Replace the placeholder URL below
 */

figma.connect(
  Menu,
  'https://figma.com/design/FIGMA_FILE_ID?node-id=MENU_NODE_ID',
  {
    props: {
      /**
       * Map Figma variants to React props.
       * The keys should match your Figma variant property names exactly.
       */
      placement: figma.enum('Placement', {
        'Top Start': 'top-start',
        'Top End': 'top-end',
        'Bottom Start': 'bottom-start',
        'Bottom End': 'bottom-end',
        'Left Start': 'left-start',
        'Right Start': 'right-start'
      }),
      open: figma.boolean('Open'),
      closeOnBodyClick: figma.boolean('Close On Body Click'),
      closeOnEscape: figma.boolean('Close On Escape'),
      autofocus: figma.boolean('Autofocus'),
      autoWidth: figma.boolean('Auto Width'),
      appendToBody: figma.boolean('Append To Body')
    },
    example: props => (
      <Menu
        placement={props.placement}
        open={props.open}
        closeOnBodyClick={props.closeOnBodyClick}
        closeOnEscape={props.closeOnEscape}
        autofocus={props.autofocus}
        autoWidth={props.autoWidth}
        appendToBody={props.appendToBody}
      >
        <div>Menu content</div>
      </Menu>
    )
  }
);

/**
 * Variant: Dropdown Menu
 */
figma.connect(
  Menu,
  'https://figma.com/design/FIGMA_FILE_ID?node-id=MENU_DROPDOWN_NODE_ID',
  {
    variant: { Type: 'Dropdown' },
    example: () => (
      <Menu open={true} placement="bottom-start">
        <ul>
          <li>Option 1</li>
          <li>Option 2</li>
          <li>Option 3</li>
        </ul>
      </Menu>
    )
  }
);

/**
 * Variant: Menu with Auto Width
 */
figma.connect(
  Menu,
  'https://figma.com/design/FIGMA_FILE_ID?node-id=MENU_AUTO_WIDTH_NODE_ID',
  {
    variant: { 'Auto Width': true },
    example: () => (
      <Menu open={true} autoWidth placement="bottom-start">
        <ul>
          <li>Option 1</li>
          <li>Option 2</li>
        </ul>
      </Menu>
    )
  }
);

/**
 * Variant: Top Positioned Menu
 */
figma.connect(
  Menu,
  'https://figma.com/design/FIGMA_FILE_ID?node-id=MENU_TOP_NODE_ID',
  {
    variant: { Placement: 'Top Start' },
    example: () => (
      <Menu open={true} placement="top-start">
        <ul>
          <li>Option 1</li>
          <li>Option 2</li>
        </ul>
      </Menu>
    )
  }
);

/**
 * Variant: Right Positioned Menu
 */
figma.connect(
  Menu,
  'https://figma.com/design/FIGMA_FILE_ID?node-id=MENU_RIGHT_NODE_ID',
  {
    variant: { Placement: 'Right Start' },
    example: () => (
      <Menu open={true} placement="right-start">
        <ul>
          <li>Option 1</li>
          <li>Option 2</li>
        </ul>
      </Menu>
    )
  }
);
