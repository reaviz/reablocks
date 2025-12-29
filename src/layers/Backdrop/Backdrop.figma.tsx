import React from 'react';
import figma from '@figma/code-connect';
import { Backdrop } from './Backdrop';

/**
 * -- FIGMA CODE CONNECT --
 *
 * Update the Figma file URL below with your actual Figma component URL.
 * The URL should point to the specific component node in your Figma file.
 *
 * To get the URL:
 * 1. Open your Figma file
 * 2. Select the Backdrop component
 * 3. Right-click and select "Copy link to selection"
 * 4. Replace the placeholder URL below
 */

figma.connect(
  Backdrop,
  'https://figma.com/design/FIGMA_FILE_ID?node-id=BACKDROP_NODE_ID',
  {
    props: {
      /**
       * Map Figma variants to React props.
       * The keys should match your Figma variant property names exactly.
       */
      zIndex: figma.enum('Z-Index', {
        Low: 998,
        Medium: 1000,
        High: 1002
      }),
      portalIndex: figma.enum('Portal Index', {
        First: 0,
        Second: 1,
        Third: 2
      })
    },
    example: props => (
      <Backdrop
        zIndex={props.zIndex}
        portalIndex={props.portalIndex}
        onClick={() => {}}
      />
    )
  }
);

/**
 * Variant: Default Backdrop
 */
figma.connect(
  Backdrop,
  'https://figma.com/design/FIGMA_FILE_ID?node-id=BACKDROP_DEFAULT_NODE_ID',
  {
    variant: { Type: 'Default' },
    example: () => <Backdrop onClick={() => {}} />
  }
);

/**
 * Variant: High Z-Index Backdrop
 */
figma.connect(
  Backdrop,
  'https://figma.com/design/FIGMA_FILE_ID?node-id=BACKDROP_HIGH_Z_NODE_ID',
  {
    variant: { 'Z-Index': 'High' },
    example: () => <Backdrop zIndex={1002} onClick={() => {}} />
  }
);

/**
 * Variant: Nested Backdrop (Second Layer)
 */
figma.connect(
  Backdrop,
  'https://figma.com/design/FIGMA_FILE_ID?node-id=BACKDROP_NESTED_NODE_ID',
  {
    variant: { 'Portal Index': 'Second' },
    example: () => <Backdrop portalIndex={1} onClick={() => {}} />
  }
);

/**
 * Variant: Custom Opacity Backdrop
 */
figma.connect(
  Backdrop,
  'https://figma.com/design/FIGMA_FILE_ID?node-id=BACKDROP_CUSTOM_NODE_ID',
  {
    variant: { Type: 'Custom' },
    example: () => <Backdrop className="opacity-50" onClick={() => {}} />
  }
);
