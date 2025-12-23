import React from 'react';
import figma from '@figma/code-connect';
import { InfinityList } from './InfinityList';

/**
 * -- FIGMA CODE CONNECT --
 *
 * Update the Figma file URL below with your actual Figma component URL.
 * The URL should point to the specific component node in your Figma file.
 *
 * To get the URL:
 * 1. Open your Figma file
 * 2. Select the InfinityList component
 * 3. Right-click and select "Copy link to selection"
 * 4. Replace the placeholder URL below
 */

figma.connect(
  InfinityList,
  'https://figma.com/design/FIGMA_FILE_ID?node-id=INFINITYLIST_NODE_ID',
  {
    props: {
      /**
       * Map Figma variants to React props.
       * The keys should match your Figma variant property names exactly.
       */
      size: figma.enum('Initial Size', {
        '5': 5,
        '10': 10,
        '20': 20,
        '50': 50
      }),
      threshold: figma.enum('Threshold', {
        '1': 1,
        '3': 3,
        '5': 5,
        '10': 10
      }),
      nextSize: figma.enum('Next Size', {
        '5': 5,
        '10': 10,
        '20': 20
      })
    },
    example: props => (
      <InfinityList
        size={props.size}
        threshold={props.threshold}
        nextSize={props.nextSize}
      >
        {Array.from({ length: 100 }, (_, i) => (
          <div key={i}>Item {i + 1}</div>
        ))}
      </InfinityList>
    )
  }
);

/**
 * Variant: Default infinity list (10 items initially)
 */
figma.connect(
  InfinityList,
  'https://figma.com/design/FIGMA_FILE_ID?node-id=INFINITYLIST_DEFAULT_NODE_ID',
  {
    variant: { Type: 'Default' },
    example: () => (
      <InfinityList>
        {Array.from({ length: 50 }, (_, i) => (
          <div key={i}>Item {i + 1}</div>
        ))}
      </InfinityList>
    )
  }
);

/**
 * Variant: Small initial size (5 items)
 */
figma.connect(
  InfinityList,
  'https://figma.com/design/FIGMA_FILE_ID?node-id=INFINITYLIST_SMALL_NODE_ID',
  {
    variant: { 'Initial Size': '5' },
    example: () => (
      <InfinityList size={5}>
        {Array.from({ length: 30 }, (_, i) => (
          <div key={i}>Item {i + 1}</div>
        ))}
      </InfinityList>
    )
  }
);

/**
 * Variant: Large initial size (20 items)
 */
figma.connect(
  InfinityList,
  'https://figma.com/design/FIGMA_FILE_ID?node-id=INFINITYLIST_LARGE_NODE_ID',
  {
    variant: { 'Initial Size': '20' },
    example: () => (
      <InfinityList size={20}>
        {Array.from({ length: 100 }, (_, i) => (
          <div key={i}>Item {i + 1}</div>
        ))}
      </InfinityList>
    )
  }
);

/**
 * Variant: Custom threshold and next size
 */
figma.connect(
  InfinityList,
  'https://figma.com/design/FIGMA_FILE_ID?node-id=INFINITYLIST_CUSTOM_NODE_ID',
  {
    variant: { Type: 'Custom' },
    example: () => (
      <InfinityList size={10} threshold={5} nextSize={20}>
        {Array.from({ length: 100 }, (_, i) => (
          <div key={i}>Item {i + 1}</div>
        ))}
      </InfinityList>
    )
  }
);
