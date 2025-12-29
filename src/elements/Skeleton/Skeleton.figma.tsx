import React from 'react';
import figma from '@figma/code-connect';
import { Skeleton } from './Skeleton';

/**
 * -- FIGMA CODE CONNECT --
 *
 * Update the Figma file URL below with your actual Figma component URL.
 * The URL should point to the specific component node in your Figma file.
 *
 * To get the URL:
 * 1. Open your Figma file
 * 2. Select the Skeleton component
 * 3. Right-click and select "Copy link to selection"
 * 4. Replace the placeholder URL below
 */

figma.connect(
  Skeleton,
  'https://figma.com/design/FIGMA_FILE_ID?node-id=SKELETON_NODE_ID',
  {
    props: {
      /**
       * Map Figma variants to React props.
       * The keys should match your Figma variant property names exactly.
       */
      variant: figma.enum('Variant', {
        Text: 'text',
        Rounded: 'rounded',
        Rectangle: 'rectangle',
        Square: 'square'
      }),
      animated: figma.boolean('Animated')
    },
    example: props => (
      <Skeleton variant={props.variant} animated={props.animated} />
    )
  }
);

/**
 * Variant: Text Skeleton
 */
figma.connect(
  Skeleton,
  'https://figma.com/design/FIGMA_FILE_ID?node-id=SKELETON_TEXT_NODE_ID',
  {
    variant: { Variant: 'Text' },
    example: () => <Skeleton variant="text" />
  }
);

/**
 * Variant: Rounded Skeleton (Avatar)
 */
figma.connect(
  Skeleton,
  'https://figma.com/design/FIGMA_FILE_ID?node-id=SKELETON_ROUNDED_NODE_ID',
  {
    variant: { Variant: 'Rounded' },
    example: () => <Skeleton variant="rounded" />
  }
);

/**
 * Variant: Rectangle Skeleton
 */
figma.connect(
  Skeleton,
  'https://figma.com/design/FIGMA_FILE_ID?node-id=SKELETON_RECTANGLE_NODE_ID',
  {
    variant: { Variant: 'Rectangle' },
    example: () => <Skeleton variant="rectangle" />
  }
);

/**
 * Variant: Square Skeleton
 */
figma.connect(
  Skeleton,
  'https://figma.com/design/FIGMA_FILE_ID?node-id=SKELETON_SQUARE_NODE_ID',
  {
    variant: { Variant: 'Square' },
    example: () => <Skeleton variant="square" />
  }
);

/**
 * Variant: Animated Skeleton
 */
figma.connect(
  Skeleton,
  'https://figma.com/design/FIGMA_FILE_ID?node-id=SKELETON_ANIMATED_NODE_ID',
  {
    variant: { Animated: 'True' },
    example: () => <Skeleton variant="text" animated />
  }
);

/**
 * Variant: Multiple Skeletons (Loading Card)
 */
figma.connect(
  Skeleton,
  'https://figma.com/design/FIGMA_FILE_ID?node-id=SKELETON_CARD_NODE_ID',
  {
    variant: { Type: 'Card' },
    example: () => (
      <div className="space-y-3">
        <Skeleton variant="rounded" />
        <Skeleton variant="text" />
        <Skeleton variant="text" />
        <Skeleton variant="rectangle" />
      </div>
    )
  }
);
