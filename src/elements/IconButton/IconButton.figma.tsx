import React from 'react';
import figma from '@figma/code-connect';
import { IconButton } from './IconButton';

/**
 * -- FIGMA CODE CONNECT --
 *
 * Update the Figma file URL below with your actual Figma component URL.
 * The URL should point to the specific component node in your Figma file.
 *
 * To get the URL:
 * 1. Open your Figma file
 * 2. Select the IconButton component
 * 3. Right-click and select "Copy link to selection"
 * 4. Replace the placeholder URL below
 */

figma.connect(
  IconButton,
  'https://figma.com/design/FIGMA_FILE_ID?node-id=ICON_BUTTON_NODE_ID',
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
        Error: 'error',
        Success: 'success',
        Warning: 'warning'
      }),
      variant: figma.enum('Variant', {
        Filled: 'filled',
        Outline: 'outline',
        Text: 'text'
      }),
      size: figma.enum('Size', {
        Small: 'small',
        Medium: 'medium',
        Large: 'large'
      }),
      disabled: figma.enum('State', {
        Disabled: true
      })
    },
    example: props => (
      <IconButton
        color={props.color}
        variant={props.variant}
        size={props.size}
        disabled={props.disabled}
      >
        <svg
          width="16"
          height="16"
          viewBox="0 0 16 16"
          fill="currentColor"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M8 0L10.5 5.5L16 8L10.5 10.5L8 16L5.5 10.5L0 8L5.5 5.5L8 0Z" />
        </svg>
      </IconButton>
    )
  }
);

/**
 * Variant: Primary Icon Button
 */
figma.connect(
  IconButton,
  'https://figma.com/design/FIGMA_FILE_ID?node-id=ICON_BUTTON_PRIMARY_NODE_ID',
  {
    variant: { Variant: 'Filled', Color: 'Primary' },
    example: () => (
      <IconButton color="primary">
        <svg
          width="16"
          height="16"
          viewBox="0 0 16 16"
          fill="currentColor"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M8 0L10.5 5.5L16 8L10.5 10.5L8 16L5.5 10.5L0 8L5.5 5.5L8 0Z" />
        </svg>
      </IconButton>
    )
  }
);

/**
 * Variant: Outline Icon Button
 */
figma.connect(
  IconButton,
  'https://figma.com/design/FIGMA_FILE_ID?node-id=ICON_BUTTON_OUTLINE_NODE_ID',
  {
    variant: { Variant: 'Outline' },
    example: () => (
      <IconButton variant="outline">
        <svg
          width="16"
          height="16"
          viewBox="0 0 16 16"
          fill="currentColor"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M8 0L10.5 5.5L16 8L10.5 10.5L8 16L5.5 10.5L0 8L5.5 5.5L8 0Z" />
        </svg>
      </IconButton>
    )
  }
);

/**
 * Variant: Text Icon Button
 */
figma.connect(
  IconButton,
  'https://figma.com/design/FIGMA_FILE_ID?node-id=ICON_BUTTON_TEXT_NODE_ID',
  {
    variant: { Variant: 'Text' },
    example: () => (
      <IconButton variant="text">
        <svg
          width="16"
          height="16"
          viewBox="0 0 16 16"
          fill="currentColor"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M8 0L10.5 5.5L16 8L10.5 10.5L8 16L5.5 10.5L0 8L5.5 5.5L8 0Z" />
        </svg>
      </IconButton>
    )
  }
);

/**
 * Variant: Small Icon Button
 */
figma.connect(
  IconButton,
  'https://figma.com/design/FIGMA_FILE_ID?node-id=ICON_BUTTON_SMALL_NODE_ID',
  {
    variant: { Size: 'Small' },
    example: () => (
      <IconButton size="small">
        <svg
          width="12"
          height="12"
          viewBox="0 0 16 16"
          fill="currentColor"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M8 0L10.5 5.5L16 8L10.5 10.5L8 16L5.5 10.5L0 8L5.5 5.5L8 0Z" />
        </svg>
      </IconButton>
    )
  }
);
