import React from 'react';
import figma from '@figma/code-connect';
import { Collapse } from './Collapse';

/**
 * -- FIGMA CODE CONNECT --
 *
 * Update the Figma file URL below with your actual Figma component URL.
 * The URL should point to the specific component node in your Figma file.
 *
 * To get the URL:
 * 1. Open your Figma file
 * 2. Select the Collapse component
 * 3. Right-click and select "Copy link to selection"
 * 4. Replace the placeholder URL below
 */

figma.connect(
  Collapse,
  'https://figma.com/design/FIGMA_FILE_ID?node-id=COLLAPSE_NODE_ID',
  {
    props: {
      /**
       * Map Figma variants to React props.
       * The keys should match your Figma variant property names exactly.
       */
      expanded: figma.boolean('Expanded'),
      animated: figma.boolean('Animated')
    },
    example: props => (
      <Collapse expanded={props.expanded} animated={props.animated}>
        Collapsible content goes here
      </Collapse>
    )
  }
);

/**
 * Variant: Expanded Collapse
 */
figma.connect(
  Collapse,
  'https://figma.com/design/FIGMA_FILE_ID?node-id=COLLAPSE_EXPANDED_NODE_ID',
  {
    variant: { Expanded: true },
    example: () => (
      <Collapse expanded>
        <div>
          <p>This content is visible when expanded</p>
          <p>Multiple elements can be shown</p>
        </div>
      </Collapse>
    )
  }
);

/**
 * Variant: Collapsed State
 */
figma.connect(
  Collapse,
  'https://figma.com/design/FIGMA_FILE_ID?node-id=COLLAPSE_COLLAPSED_NODE_ID',
  {
    variant: { Expanded: false },
    example: () => (
      <Collapse expanded={false}>
        <p>This content is hidden when collapsed</p>
      </Collapse>
    )
  }
);

/**
 * Variant: Animated Collapse
 */
figma.connect(
  Collapse,
  'https://figma.com/design/FIGMA_FILE_ID?node-id=COLLAPSE_ANIMATED_NODE_ID',
  {
    variant: { Animated: true },
    example: () => (
      <Collapse expanded animated>
        <p>This content animates when expanding/collapsing</p>
      </Collapse>
    )
  }
);

/**
 * Variant: No Animation
 */
figma.connect(
  Collapse,
  'https://figma.com/design/FIGMA_FILE_ID?node-id=COLLAPSE_NO_ANIMATION_NODE_ID',
  {
    variant: { Animated: false },
    example: () => (
      <Collapse expanded animated={false}>
        <p>This content appears instantly without animation</p>
      </Collapse>
    )
  }
);
