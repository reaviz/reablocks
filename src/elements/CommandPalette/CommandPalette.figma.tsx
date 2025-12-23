import React from 'react';
import figma from '@figma/code-connect';
import { CommandPalette } from './CommandPalette';
import { CommandPaletteGroup } from './CommandPaletteGroup';
import { CommandPaletteItem } from './CommandPaletteItem';

/**
 * -- FIGMA CODE CONNECT --
 *
 * Update the Figma file URL below with your actual Figma component URL.
 * The URL should point to the specific component node in your Figma file.
 *
 * To get the URL:
 * 1. Open your Figma file
 * 2. Select the CommandPalette component
 * 3. Right-click and select "Copy link to selection"
 * 4. Replace the placeholder URL below
 */

figma.connect(
  CommandPalette,
  'https://figma.com/design/FIGMA_FILE_ID?node-id=COMMAND_PALETTE_NODE_ID',
  {
    props: {
      /**
       * Map Figma variants to React props.
       * The keys should match your Figma variant property names exactly.
       */
      placeholder: figma.string('Placeholder'),
      autoFocus: figma.boolean('Auto Focus'),
      emptyMessage: figma.string('Empty Message')
    },
    example: props => (
      <CommandPalette
        placeholder={props.placeholder}
        autoFocus={props.autoFocus}
        emptyMessage={props.emptyMessage}
      >
        <CommandPaletteGroup title="Actions">
          <CommandPaletteItem value="new">Create New</CommandPaletteItem>
          <CommandPaletteItem value="open">Open</CommandPaletteItem>
          <CommandPaletteItem value="save">Save</CommandPaletteItem>
        </CommandPaletteGroup>
      </CommandPalette>
    )
  }
);

/**
 * Variant: Command Palette with Groups
 */
figma.connect(
  CommandPalette,
  'https://figma.com/design/FIGMA_FILE_ID?node-id=COMMAND_PALETTE_GROUPS_NODE_ID',
  {
    variant: { Type: 'With Groups' },
    example: () => (
      <CommandPalette placeholder="Search commands...">
        <CommandPaletteGroup title="File">
          <CommandPaletteItem value="new">New File</CommandPaletteItem>
          <CommandPaletteItem value="open">Open File</CommandPaletteItem>
          <CommandPaletteItem value="save">Save</CommandPaletteItem>
        </CommandPaletteGroup>
        <CommandPaletteGroup title="Edit">
          <CommandPaletteItem value="undo">Undo</CommandPaletteItem>
          <CommandPaletteItem value="redo">Redo</CommandPaletteItem>
        </CommandPaletteGroup>
      </CommandPalette>
    )
  }
);

/**
 * Variant: Command Palette Empty State
 */
figma.connect(
  CommandPalette,
  'https://figma.com/design/FIGMA_FILE_ID?node-id=COMMAND_PALETTE_EMPTY_NODE_ID',
  {
    variant: { State: 'Empty' },
    example: () => (
      <CommandPalette
        placeholder="Type to search..."
        emptyMessage="No results found"
      />
    )
  }
);

/**
 * Variant: Simple Command Palette
 */
figma.connect(
  CommandPalette,
  'https://figma.com/design/FIGMA_FILE_ID?node-id=COMMAND_PALETTE_SIMPLE_NODE_ID',
  {
    variant: { Type: 'Simple' },
    example: () => (
      <CommandPalette placeholder="Search...">
        <CommandPaletteItem value="item1">First Item</CommandPaletteItem>
        <CommandPaletteItem value="item2">Second Item</CommandPaletteItem>
        <CommandPaletteItem value="item3">Third Item</CommandPaletteItem>
      </CommandPalette>
    )
  }
);
