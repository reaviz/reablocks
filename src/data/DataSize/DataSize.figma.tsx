import React from 'react';
import figma from '@figma/code-connect';
import { DataSize } from './DataSize';

/**
 * -- FIGMA CODE CONNECT --
 *
 * Update the Figma file URL below with your actual Figma component URL.
 * The URL should point to the specific component node in your Figma file.
 *
 * To get the URL:
 * 1. Open your Figma file
 * 2. Select the DataSize component
 * 3. Right-click and select "Copy link to selection"
 * 4. Replace the placeholder URL below
 */

figma.connect(
  DataSize,
  'https://figma.com/design/FIGMA_FILE_ID?node-id=DATASIZE_NODE_ID',
  {
    props: {
      /**
       * Map Figma variants to React props.
       * The keys should match your Figma variant property names exactly.
       */
      value: figma.enum('Size', {
        'Small (1KB)': 1024,
        'Medium (1MB)': 1048576,
        'Large (1GB)': 1073741824,
        'X-Large (1TB)': 1099511627776
      }),
      decimals: figma.enum('Decimals', {
        '0': 0,
        '1': 1,
        '2': 2,
        '3': 3
      }),
      emptyValue: figma.string('Empty Value')
    },
    example: props => (
      <DataSize
        value={props.value}
        decimals={props.decimals}
        emptyValue={props.emptyValue}
      />
    )
  }
);

/**
 * Variant: Small file size (Bytes/KiB)
 */
figma.connect(
  DataSize,
  'https://figma.com/design/FIGMA_FILE_ID?node-id=DATASIZE_SMALL_NODE_ID',
  {
    variant: { Size: 'Small' },
    example: () => <DataSize value={2048} />
  }
);

/**
 * Variant: Medium file size (MiB)
 */
figma.connect(
  DataSize,
  'https://figma.com/design/FIGMA_FILE_ID?node-id=DATASIZE_MEDIUM_NODE_ID',
  {
    variant: { Size: 'Medium' },
    example: () => <DataSize value={5242880} />
  }
);

/**
 * Variant: Large file size (GiB)
 */
figma.connect(
  DataSize,
  'https://figma.com/design/FIGMA_FILE_ID?node-id=DATASIZE_LARGE_NODE_ID',
  {
    variant: { Size: 'Large' },
    example: () => <DataSize value={3221225472} />
  }
);

/**
 * Variant: Custom decimal precision
 */
figma.connect(
  DataSize,
  'https://figma.com/design/FIGMA_FILE_ID?node-id=DATASIZE_PRECISION_NODE_ID',
  {
    variant: { Decimals: '3' },
    example: () => <DataSize value={1536000} decimals={3} />
  }
);

/**
 * Variant: Empty state
 */
figma.connect(
  DataSize,
  'https://figma.com/design/FIGMA_FILE_ID?node-id=DATASIZE_EMPTY_NODE_ID',
  {
    variant: { State: 'Empty' },
    example: () => <DataSize value={null} emptyValue="No data" />
  }
);
