import React from 'react';
import figma from '@figma/code-connect';
import { ContextMenu } from './ContextMenu';

/**
 * -- FIGMA CODE CONNECT --
 *
 * Update the Figma file URL below with your actual Figma component URL.
 * The URL should point to the specific component node in your Figma file.
 *
 * To get the URL:
 * 1. Open your Figma file
 * 2. Select the ContextMenu component
 * 3. Right-click and select "Copy link to selection"
 * 4. Replace the placeholder URL below
 */

figma.connect(
  ContextMenu,
  'https://figma.com/design/FIGMA_FILE_ID?node-id=CONTEXT_MENU_NODE_ID',
  {
    props: {
      /**
       * Map Figma variants to React props.
       * The keys should match your Figma variant property names exactly.
       */
      disabled: figma.boolean('Disabled'),
      autofocus: figma.boolean('Autofocus'),
      autoClose: figma.boolean('Auto Close'),
      closeOnEscape: figma.boolean('Close On Escape'),
      closeOnBodyClick: figma.boolean('Close On Body Click'),
      placement: figma.enum('Placement', {
        'Bottom Start': 'bottom-start',
        'Bottom End': 'bottom-end',
        'Top Start': 'top-start',
        'Top End': 'top-end'
      })
    },
    example: props => (
      <ContextMenu
        disabled={props.disabled}
        autofocus={props.autofocus}
        autoClose={props.autoClose}
        closeOnEscape={props.closeOnEscape}
        closeOnBodyClick={props.closeOnBodyClick}
        placement={props.placement}
        content={
          <ul>
            <li>Option 1</li>
            <li>Option 2</li>
            <li>Option 3</li>
          </ul>
        }
      >
        <div>Right-click me</div>
      </ContextMenu>
    )
  }
);

/**
 * Variant: Basic Context Menu
 */
figma.connect(
  ContextMenu,
  'https://figma.com/design/FIGMA_FILE_ID?node-id=CONTEXT_MENU_BASIC_NODE_ID',
  {
    variant: { Type: 'Basic' },
    example: () => (
      <ContextMenu
        content={
          <ul>
            <li>Copy</li>
            <li>Paste</li>
            <li>Delete</li>
          </ul>
        }
      >
        <div>Right-click for options</div>
      </ContextMenu>
    )
  }
);

/**
 * Variant: Context Menu with Icons
 */
figma.connect(
  ContextMenu,
  'https://figma.com/design/FIGMA_FILE_ID?node-id=CONTEXT_MENU_ICONS_NODE_ID',
  {
    variant: { 'Has Icons': true },
    example: () => (
      <ContextMenu
        content={
          <ul>
            <li>📋 Copy</li>
            <li>📄 Paste</li>
            <li>🗑️ Delete</li>
          </ul>
        }
      >
        <div>Right-click for actions</div>
      </ContextMenu>
    )
  }
);

/**
 * Variant: File Context Menu
 */
figma.connect(
  ContextMenu,
  'https://figma.com/design/FIGMA_FILE_ID?node-id=CONTEXT_MENU_FILE_NODE_ID',
  {
    variant: { Type: 'File' },
    example: () => (
      <ContextMenu
        content={
          <ul>
            <li>Open</li>
            <li>Rename</li>
            <li>Download</li>
            <li>Delete</li>
          </ul>
        }
      >
        <div>Right-click file</div>
      </ContextMenu>
    )
  }
);

/**
 * Variant: Disabled Context Menu
 */
figma.connect(
  ContextMenu,
  'https://figma.com/design/FIGMA_FILE_ID?node-id=CONTEXT_MENU_DISABLED_NODE_ID',
  {
    variant: { State: 'Disabled' },
    example: () => (
      <ContextMenu
        disabled
        content={
          <ul>
            <li>Option 1</li>
            <li>Option 2</li>
          </ul>
        }
      >
        <div>Context menu disabled</div>
      </ContextMenu>
    )
  }
);
