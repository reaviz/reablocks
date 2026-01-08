import React from 'react';
import figma from '@figma/code-connect';
import { SmallHeading } from './SmallHeading';

/**
 * Main SmallHeading component with all prop variations
 */
figma.connect(
  SmallHeading,
  'https://figma.com/design/FIGMA_FILE_ID?node-id=SMALL_HEADING_COMPONENT_NODE_ID',
  {
    props: {
      color: figma.enum('Color', {
        Default: 'default',
        Primary: 'primary',
        Secondary: 'secondary',
        Error: 'error',
        Success: 'success',
        Warning: 'warning',
        Info: 'info'
      }),
      variant: figma.enum('Variant', {
        Default: 'default',
        Mono: 'mono'
      }),
      disableMargins: figma.boolean('Disable Margins'),
      children: figma.string('Heading Content')
    },
    example: ({ color, variant, disableMargins, children }) => (
      <SmallHeading
        color={color}
        variant={variant}
        disableMargins={disableMargins}
      >
        {children}
      </SmallHeading>
    )
  }
);

/**
 * SmallHeading with primary color
 */
figma.connect(
  SmallHeading,
  'https://figma.com/design/FIGMA_FILE_ID?node-id=SMALL_HEADING_PRIMARY_NODE_ID',
  {
    variant: { Color: 'Primary' },
    props: {
      children: figma.string('Heading Content')
    },
    example: ({ children }) => (
      <SmallHeading color="primary">{children}</SmallHeading>
    )
  }
);

/**
 * SmallHeading without margins
 */
figma.connect(
  SmallHeading,
  'https://figma.com/design/FIGMA_FILE_ID?node-id=SMALL_HEADING_NO_MARGINS_NODE_ID',
  {
    variant: { 'Disable Margins': true },
    props: {
      children: figma.string('Heading Content')
    },
    example: ({ children }) => (
      <SmallHeading disableMargins>{children}</SmallHeading>
    )
  }
);

/**
 * SmallHeading with mono variant
 */
figma.connect(
  SmallHeading,
  'https://figma.com/design/FIGMA_FILE_ID?node-id=SMALL_HEADING_MONO_NODE_ID',
  {
    variant: { Variant: 'Mono' },
    props: {
      children: figma.string('Heading Content')
    },
    example: ({ children }) => (
      <SmallHeading variant="mono">{children}</SmallHeading>
    )
  }
);
