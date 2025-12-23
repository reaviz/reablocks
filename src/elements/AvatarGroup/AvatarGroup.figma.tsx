import React from 'react';
import figma from '@figma/code-connect';
import { AvatarGroup } from './AvatarGroup';
import { Avatar } from '@/elements/Avatar';

/**
 * -- FIGMA CODE CONNECT --
 *
 * Update the Figma file URL below with your actual Figma component URL.
 * The URL should point to the specific component node in your Figma file.
 *
 * To get the URL:
 * 1. Open your Figma file
 * 2. Select the AvatarGroup component
 * 3. Right-click and select "Copy link to selection"
 * 4. Replace the placeholder URL below
 */

figma.connect(
  AvatarGroup,
  'https://figma.com/design/FIGMA_FILE_ID?node-id=AVATAR_GROUP_NODE_ID',
  {
    props: {
      /**
       * Map Figma variants to React props.
       * The keys should match your Figma variant property names exactly.
       */
      size: figma.enum('Max Visible', {
        '3': 3,
        '5': 5,
        '10': 10
      })
    },
    example: props => (
      <AvatarGroup size={props.size}>
        <Avatar name="John Doe" />
        <Avatar name="Jane Smith" />
        <Avatar name="Bob Johnson" />
        <Avatar name="Alice Williams" />
        <Avatar name="Charlie Brown" />
      </AvatarGroup>
    )
  }
);

/**
 * Variant: Small Avatar Group (3 visible)
 */
figma.connect(
  AvatarGroup,
  'https://figma.com/design/FIGMA_FILE_ID?node-id=AVATAR_GROUP_SMALL_NODE_ID',
  {
    variant: { 'Max Visible': '3' },
    example: () => (
      <AvatarGroup size={3}>
        <Avatar name="John Doe" />
        <Avatar name="Jane Smith" />
        <Avatar name="Bob Johnson" />
        <Avatar name="Alice Williams" />
        <Avatar name="Charlie Brown" />
      </AvatarGroup>
    )
  }
);

/**
 * Variant: Medium Avatar Group (5 visible)
 */
figma.connect(
  AvatarGroup,
  'https://figma.com/design/FIGMA_FILE_ID?node-id=AVATAR_GROUP_MEDIUM_NODE_ID',
  {
    variant: { 'Max Visible': '5' },
    example: () => (
      <AvatarGroup size={5}>
        <Avatar name="John Doe" />
        <Avatar name="Jane Smith" />
        <Avatar name="Bob Johnson" />
        <Avatar name="Alice Williams" />
        <Avatar name="Charlie Brown" />
        <Avatar name="David Lee" />
        <Avatar name="Emma Davis" />
      </AvatarGroup>
    )
  }
);

/**
 * Variant: Large Avatar Group (10 visible)
 */
figma.connect(
  AvatarGroup,
  'https://figma.com/design/FIGMA_FILE_ID?node-id=AVATAR_GROUP_LARGE_NODE_ID',
  {
    variant: { 'Max Visible': '10' },
    example: () => (
      <AvatarGroup size={10}>
        <Avatar name="John Doe" />
        <Avatar name="Jane Smith" />
        <Avatar name="Bob Johnson" />
        <Avatar name="Alice Williams" />
        <Avatar name="Charlie Brown" />
      </AvatarGroup>
    )
  }
);
