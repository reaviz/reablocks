import React from 'react';
import figma from '@figma/code-connect';
import { Sort } from './Sort';

/**
 * -- FIGMA CODE CONNECT --
 *
 * Update the Figma file URL below with your actual Figma component URL.
 * The URL should point to the specific component node in your Figma file.
 *
 * To get the URL:
 * 1. Open your Figma file
 * 2. Select the Sort component
 * 3. Right-click and select "Copy link to selection"
 * 4. Replace the placeholder URL below
 */

figma.connect(
  Sort,
  'https://figma.com/design/FIGMA_FILE_ID?node-id=SORT_NODE_ID',
  {
    props: {
      /**
       * Map Figma variants to React props.
       * The keys should match your Figma variant property names exactly.
       */
      direction: figma.enum('Direction', {
        Ascending: 'asc',
        Descending: 'desc',
        None: null
      }),
      disabled: figma.enum('State', {
        Disabled: true
      }),
      children: figma.string('Label')
    },
    example: props => (
      <Sort
        direction={props.direction}
        disabled={props.disabled}
        onSort={() => {}}
      >
        {props.children}
      </Sort>
    )
  }
);

/**
 * Variant: Unsorted state
 */
figma.connect(
  Sort,
  'https://figma.com/design/FIGMA_FILE_ID?node-id=SORT_UNSORTED_NODE_ID',
  {
    variant: { Direction: 'None' },
    example: () => <Sort onSort={() => {}}>Column Name</Sort>
  }
);

/**
 * Variant: Ascending sort
 */
figma.connect(
  Sort,
  'https://figma.com/design/FIGMA_FILE_ID?node-id=SORT_ASC_NODE_ID',
  {
    variant: { Direction: 'Ascending' },
    example: () => (
      <Sort direction="asc" onSort={() => {}}>
        Column Name
      </Sort>
    )
  }
);

/**
 * Variant: Descending sort
 */
figma.connect(
  Sort,
  'https://figma.com/design/FIGMA_FILE_ID?node-id=SORT_DESC_NODE_ID',
  {
    variant: { Direction: 'Descending' },
    example: () => (
      <Sort direction="desc" onSort={() => {}}>
        Column Name
      </Sort>
    )
  }
);

/**
 * Variant: Disabled sort
 */
figma.connect(
  Sort,
  'https://figma.com/design/FIGMA_FILE_ID?node-id=SORT_DISABLED_NODE_ID',
  {
    variant: { State: 'Disabled' },
    example: () => (
      <Sort disabled direction="asc" onSort={() => {}}>
        Column Name
      </Sort>
    )
  }
);
