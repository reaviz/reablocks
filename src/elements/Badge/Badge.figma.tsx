import React from 'react';
import figma from '@figma/code-connect';
import { Badge } from './Badge';

/**
 * -- FIGMA CODE CONNECT --
 *
 * Update the Figma file URL below with your actual Figma component URL.
 * The URL should point to the specific component node in your Figma file.
 *
 * To get the URL:
 * 1. Open your Figma file
 * 2. Select the Badge component
 * 3. Right-click and select "Copy link to selection"
 * 4. Replace the placeholder URL below
 */

figma.connect(
  Badge,
  'https://figma.com/design/FIGMA_FILE_ID?node-id=BADGE_NODE_ID',
  {
    props: {
      /**
       * Map Figma variants to React props.
       * The keys should match your Figma variant property names exactly.
       */
      color: figma.enum('Color', {
        Default: 'default',
        Primary: 'primary',
        Secondary: 'secondary',
        Error: 'error'
      }),
      placement: figma.enum('Placement', {
        'Top Start': 'top-start',
        'Top End': 'top-end',
        'Bottom Start': 'bottom-start',
        'Bottom End': 'bottom-end'
      }),
      hidden: figma.boolean('Hidden'),
      content: figma.string('Content')
    },
    example: props => (
      <Badge
        color={props.color}
        placement={props.placement}
        hidden={props.hidden}
        content={props.content}
      >
        <span>Content</span>
      </Badge>
    )
  }
);

/**
 * Variant: Default Badge
 */
figma.connect(
  Badge,
  'https://figma.com/design/FIGMA_FILE_ID?node-id=BADGE_DEFAULT_NODE_ID',
  {
    variant: { Color: 'Default' },
    example: () => (
      <Badge content="5">
        <span>Notifications</span>
      </Badge>
    )
  }
);

/**
 * Variant: Primary Badge
 */
figma.connect(
  Badge,
  'https://figma.com/design/FIGMA_FILE_ID?node-id=BADGE_PRIMARY_NODE_ID',
  {
    variant: { Color: 'Primary' },
    example: () => (
      <Badge color="primary" content="New">
        <span>Messages</span>
      </Badge>
    )
  }
);

/**
 * Variant: Error Badge (for alerts/warnings)
 */
figma.connect(
  Badge,
  'https://figma.com/design/FIGMA_FILE_ID?node-id=BADGE_ERROR_NODE_ID',
  {
    variant: { Color: 'Error' },
    example: () => (
      <Badge color="error" content="!">
        <span>Alerts</span>
      </Badge>
    )
  }
);

/**
 * Variant: Dot Badge (no content)
 */
figma.connect(
  Badge,
  'https://figma.com/design/FIGMA_FILE_ID?node-id=BADGE_DOT_NODE_ID',
  {
    variant: { 'Has Content': false },
    example: () => (
      <Badge color="primary">
        <span>Status</span>
      </Badge>
    )
  }
);

/**
 * Variant: Badge with different placements
 */
figma.connect(
  Badge,
  'https://figma.com/design/FIGMA_FILE_ID?node-id=BADGE_PLACEMENT_NODE_ID',
  {
    variant: { Placement: 'Bottom End' },
    example: () => (
      <Badge color="primary" placement="bottom-end" content="3">
        <span>Item</span>
      </Badge>
    )
  }
);
