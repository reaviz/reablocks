import React from 'react';
import figma from '@figma/code-connect';
import { Avatar } from './Avatar';

/**
 * -- FIGMA CODE CONNECT --
 *
 * Update the Figma file URL below with your actual Figma component URL.
 * The URL should point to the specific component node in your Figma file.
 *
 * To get the URL:
 * 1. Open your Figma file
 * 2. Select the Avatar component
 * 3. Right-click and select "Copy link to selection"
 * 4. Replace the placeholder URL below
 */

figma.connect(
  Avatar,
  'https://figma.com/design/FIGMA_FILE_ID?node-id=AVATAR_NODE_ID',
  {
    props: {
      /**
       * Map Figma variants to React props.
       * The keys should match your Figma variant property names exactly.
       */
      variant: figma.enum('Variant', {
        Filled: 'filled',
        Outline: 'outline'
      }),
      size: figma.enum('Size', {
        Small: 24,
        Medium: 32,
        Large: 48,
        XLarge: 64
      }),
      rounded: figma.boolean('Rounded'),
      name: figma.string('Name'),
      src: figma.string('Image URL')
    },
    example: props => (
      <Avatar
        variant={props.variant}
        size={props.size}
        rounded={props.rounded}
        name={props.name}
        src={props.src}
      />
    )
  }
);

/**
 * Variant: Avatar with Image
 */
figma.connect(
  Avatar,
  'https://figma.com/design/FIGMA_FILE_ID?node-id=AVATAR_IMAGE_NODE_ID',
  {
    variant: { Type: 'Image' },
    example: () => (
      <Avatar name="John Doe" src="https://i.pravatar.cc/150?img=1" size={48} />
    )
  }
);

/**
 * Variant: Avatar with Initials
 */
figma.connect(
  Avatar,
  'https://figma.com/design/FIGMA_FILE_ID?node-id=AVATAR_INITIALS_NODE_ID',
  {
    variant: { Type: 'Initials' },
    example: () => <Avatar name="John Doe" size={48} />
  }
);

/**
 * Variant: Avatar Outline
 */
figma.connect(
  Avatar,
  'https://figma.com/design/FIGMA_FILE_ID?node-id=AVATAR_OUTLINE_NODE_ID',
  {
    variant: { Variant: 'Outline' },
    example: () => <Avatar name="John Doe" variant="outline" size={48} />
  }
);

/**
 * Variant: Large Avatar
 */
figma.connect(
  Avatar,
  'https://figma.com/design/FIGMA_FILE_ID?node-id=AVATAR_LARGE_NODE_ID',
  {
    variant: { Size: 'Large' },
    example: () => <Avatar name="John Doe" size={64} />
  }
);
