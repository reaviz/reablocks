import React from 'react';
import figma from '@figma/code-connect';
import { List } from './List';
import { ListItem } from './ListItem/ListItem';

/**
 * -- FIGMA CODE CONNECT --
 *
 * Update the Figma file URL below with your actual Figma component URL.
 * The URL should point to the specific component node in your Figma file.
 *
 * To get the URL:
 * 1. Open your Figma file
 * 2. Select the List component
 * 3. Right-click and select "Copy link to selection"
 * 4. Replace the placeholder URL below
 */

figma.connect(
  List,
  'https://figma.com/design/FIGMA_FILE_ID?node-id=LIST_NODE_ID',
  {
    example: () => (
      <List>
        <ListItem>First item</ListItem>
        <ListItem>Second item</ListItem>
        <ListItem>Third item</ListItem>
      </List>
    )
  }
);

/**
 * Variant: Simple List
 */
figma.connect(
  List,
  'https://figma.com/design/FIGMA_FILE_ID?node-id=LIST_SIMPLE_NODE_ID',
  {
    variant: { Type: 'Simple' },
    example: () => (
      <List>
        <ListItem>Item 1</ListItem>
        <ListItem>Item 2</ListItem>
        <ListItem>Item 3</ListItem>
      </List>
    )
  }
);

/**
 * Variant: List with Active Item
 */
figma.connect(
  List,
  'https://figma.com/design/FIGMA_FILE_ID?node-id=LIST_ACTIVE_NODE_ID',
  {
    variant: { 'Has Active': true },
    example: () => (
      <List>
        <ListItem>Item 1</ListItem>
        <ListItem active>Active Item</ListItem>
        <ListItem>Item 3</ListItem>
      </List>
    )
  }
);

/**
 * Variant: Dense List
 */
figma.connect(
  List,
  'https://figma.com/design/FIGMA_FILE_ID?node-id=LIST_DENSE_NODE_ID',
  {
    variant: { Dense: true },
    example: () => (
      <List>
        <ListItem dense>Dense item 1</ListItem>
        <ListItem dense>Dense item 2</ListItem>
        <ListItem dense>Dense item 3</ListItem>
      </List>
    )
  }
);

/**
 * Variant: List with Start and End Adornments
 */
figma.connect(
  List,
  'https://figma.com/design/FIGMA_FILE_ID?node-id=LIST_ADORNMENTS_NODE_ID',
  {
    variant: { 'Has Adornments': true },
    example: () => (
      <List>
        <ListItem start={<span>🏠</span>} end={<span>→</span>}>
          Home
        </ListItem>
        <ListItem start={<span>⚙️</span>} end={<span>→</span>}>
          Settings
        </ListItem>
        <ListItem start={<span>👤</span>} end={<span>→</span>}>
          Profile
        </ListItem>
      </List>
    )
  }
);
