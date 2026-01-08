import React from 'react';
import figma from '@figma/code-connect';
import { Pager } from './Pager';

/**
 * -- FIGMA CODE CONNECT --
 *
 * Update the Figma file URL below with your actual Figma component URL.
 * The URL should point to the specific component node in your Figma file.
 *
 * To get the URL:
 * 1. Open your Figma file
 * 2. Select the Pager/Pagination component
 * 3. Right-click and select "Copy link to selection"
 * 4. Replace the placeholder URL below
 */

figma.connect(
  Pager,
  'https://figma.com/design/FIGMA_FILE_ID?node-id=PAGER_NODE_ID',
  {
    props: {
      /**
       * Map Figma variants to React props.
       * The keys should match your Figma variant property names exactly.
       */
      page: figma.enum('Current Page', {
        '0': 0,
        '1': 1,
        '2': 2,
        '3': 3
      }),
      size: figma.enum('Items Per Page', {
        '10': 10,
        '20': 20,
        '50': 50,
        '100': 100
      }),
      displayMode: figma.enum('Display Mode', {
        Pages: 'pages',
        Items: 'items',
        All: 'all'
      })
    },
    example: props => (
      <Pager
        page={props.page}
        size={props.size}
        total={100}
        displayMode={props.displayMode}
        onPageChange={() => {}}
      />
    )
  }
);

/**
 * Variant: Page numbers only
 */
figma.connect(
  Pager,
  'https://figma.com/design/FIGMA_FILE_ID?node-id=PAGER_PAGES_NODE_ID',
  {
    variant: { 'Display Mode': 'Pages' },
    example: () => (
      <Pager
        page={0}
        size={10}
        total={100}
        displayMode="pages"
        onPageChange={() => {}}
      />
    )
  }
);

/**
 * Variant: Items count only
 */
figma.connect(
  Pager,
  'https://figma.com/design/FIGMA_FILE_ID?node-id=PAGER_ITEMS_NODE_ID',
  {
    variant: { 'Display Mode': 'Items' },
    example: () => (
      <Pager
        page={0}
        size={10}
        total={100}
        displayMode="items"
        onPageChange={() => {}}
      />
    )
  }
);

/**
 * Variant: Full pagination with items and pages
 */
figma.connect(
  Pager,
  'https://figma.com/design/FIGMA_FILE_ID?node-id=PAGER_ALL_NODE_ID',
  {
    variant: { 'Display Mode': 'All' },
    example: () => (
      <Pager
        page={2}
        size={20}
        total={250}
        displayMode="all"
        onPageChange={() => {}}
      />
    )
  }
);

/**
 * Variant: First page state
 */
figma.connect(
  Pager,
  'https://figma.com/design/FIGMA_FILE_ID?node-id=PAGER_FIRST_NODE_ID',
  {
    variant: { State: 'First Page' },
    example: () => (
      <Pager page={0} size={10} total={100} onPageChange={() => {}} />
    )
  }
);

/**
 * Variant: Last page state
 */
figma.connect(
  Pager,
  'https://figma.com/design/FIGMA_FILE_ID?node-id=PAGER_LAST_NODE_ID',
  {
    variant: { State: 'Last Page' },
    example: () => (
      <Pager page={9} size={10} total={100} onPageChange={() => {}} />
    )
  }
);

/**
 * Variant: Middle page state
 */
figma.connect(
  Pager,
  'https://figma.com/design/FIGMA_FILE_ID?node-id=PAGER_MIDDLE_NODE_ID',
  {
    variant: { State: 'Middle' },
    example: () => (
      <Pager page={5} size={10} total={200} onPageChange={() => {}} />
    )
  }
);
