import React from 'react';
import figma from '@figma/code-connect';
import { DotsLoader } from './DotsLoader';

/**
 * -- FIGMA CODE CONNECT --
 *
 * Update the Figma file URL below with your actual Figma component URL.
 * The URL should point to the specific component node in your Figma file.
 *
 * To get the URL:
 * 1. Open your Figma file
 * 2. Select the DotsLoader component
 * 3. Right-click and select "Copy link to selection"
 * 4. Replace the placeholder URL below
 */

figma.connect(
  DotsLoader,
  'https://figma.com/design/FIGMA_FILE_ID?node-id=DOTS_LOADER_NODE_ID',
  {
    props: {
      /**
       * Map Figma variants to React props.
       * The keys should match your Figma variant property names exactly.
       */
      size: figma.enum('Size', {
        Small: 'small',
        Medium: 'medium',
        Large: 'large'
      }),
      speed: figma.enum('Speed', {
        Slow: 0.3,
        Normal: 0.2,
        Fast: 0.1
      })
    },
    example: props => <DotsLoader size={props.size} speed={props.speed} />
  }
);

/**
 * Variant: Small Loader
 */
figma.connect(
  DotsLoader,
  'https://figma.com/design/FIGMA_FILE_ID?node-id=DOTS_LOADER_SMALL_NODE_ID',
  {
    variant: { Size: 'Small' },
    example: () => <DotsLoader size="small" />
  }
);

/**
 * Variant: Medium Loader (default)
 */
figma.connect(
  DotsLoader,
  'https://figma.com/design/FIGMA_FILE_ID?node-id=DOTS_LOADER_MEDIUM_NODE_ID',
  {
    variant: { Size: 'Medium' },
    example: () => <DotsLoader size="medium" />
  }
);

/**
 * Variant: Large Loader
 */
figma.connect(
  DotsLoader,
  'https://figma.com/design/FIGMA_FILE_ID?node-id=DOTS_LOADER_LARGE_NODE_ID',
  {
    variant: { Size: 'Large' },
    example: () => <DotsLoader size="large" />
  }
);

/**
 * Variant: Fast Animation
 */
figma.connect(
  DotsLoader,
  'https://figma.com/design/FIGMA_FILE_ID?node-id=DOTS_LOADER_FAST_NODE_ID',
  {
    variant: { Speed: 'Fast' },
    example: () => <DotsLoader speed={0.1} />
  }
);
