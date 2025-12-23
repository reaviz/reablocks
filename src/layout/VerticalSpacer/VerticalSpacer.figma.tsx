import React from 'react';
import figma from '@figma/code-connect';
import { VerticalSpacer } from './VerticalSpacer';

/**
 * -- FIGMA CODE CONNECT --
 *
 * Update the Figma file URL below with your actual Figma component URL.
 * The URL should point to the specific component node in your Figma file.
 *
 * To get the URL:
 * 1. Open your Figma file
 * 2. Select the VerticalSpacer component
 * 3. Right-click and select "Copy link to selection"
 * 4. Replace the placeholder URL below
 */

figma.connect(
  VerticalSpacer,
  'https://figma.com/design/FIGMA_FILE_ID?node-id=VERTICAL_SPACER_NODE_ID',
  {
    props: {
      /**
       * Map Figma variants to React props.
       * The keys should match your Figma variant property names exactly.
       */
      space: figma.enum('Space', {
        'Extra Small': 'xs',
        Small: 'sm',
        Medium: 'md',
        Large: 'lg',
        'Extra Large': 'xl',
        'Extra Extra Large': 'xxl'
      })
    },
    example: props => <VerticalSpacer space={props.space} />
  }
);

/**
 * Variant: Extra Small Spacer
 */
figma.connect(
  VerticalSpacer,
  'https://figma.com/design/FIGMA_FILE_ID?node-id=VERTICAL_SPACER_XS_NODE_ID',
  {
    variant: { Space: 'Extra Small' },
    example: () => <VerticalSpacer space="xs" />
  }
);

/**
 * Variant: Small Spacer
 */
figma.connect(
  VerticalSpacer,
  'https://figma.com/design/FIGMA_FILE_ID?node-id=VERTICAL_SPACER_SM_NODE_ID',
  {
    variant: { Space: 'Small' },
    example: () => <VerticalSpacer space="sm" />
  }
);

/**
 * Variant: Medium Spacer
 */
figma.connect(
  VerticalSpacer,
  'https://figma.com/design/FIGMA_FILE_ID?node-id=VERTICAL_SPACER_MD_NODE_ID',
  {
    variant: { Space: 'Medium' },
    example: () => <VerticalSpacer space="md" />
  }
);

/**
 * Variant: Large Spacer
 */
figma.connect(
  VerticalSpacer,
  'https://figma.com/design/FIGMA_FILE_ID?node-id=VERTICAL_SPACER_LG_NODE_ID',
  {
    variant: { Space: 'Large' },
    example: () => <VerticalSpacer space="lg" />
  }
);

/**
 * Variant: Extra Large Spacer
 */
figma.connect(
  VerticalSpacer,
  'https://figma.com/design/FIGMA_FILE_ID?node-id=VERTICAL_SPACER_XL_NODE_ID',
  {
    variant: { Space: 'Extra Large' },
    example: () => <VerticalSpacer space="xl" />
  }
);

/**
 * Variant: Extra Extra Large Spacer
 */
figma.connect(
  VerticalSpacer,
  'https://figma.com/design/FIGMA_FILE_ID?node-id=VERTICAL_SPACER_XXL_NODE_ID',
  {
    variant: { Space: 'Extra Extra Large' },
    example: () => <VerticalSpacer space="xxl" />
  }
);
