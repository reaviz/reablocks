import React from 'react';
import figma from '@figma/code-connect';
import { PrimaryHeading } from './PrimaryHeading';

/**
 * Main PrimaryHeading component with all prop variations
 */
figma.connect(
  PrimaryHeading,
  'https://figma.com/design/FIGMA_FILE_ID?node-id=PRIMARY_HEADING_COMPONENT_NODE_ID',
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
      <PrimaryHeading
        color={color}
        variant={variant}
        disableMargins={disableMargins}
      >
        {children}
      </PrimaryHeading>
    )
  }
);

/**
 * PrimaryHeading with primary color
 */
figma.connect(
  PrimaryHeading,
  'https://figma.com/design/FIGMA_FILE_ID?node-id=PRIMARY_HEADING_PRIMARY_NODE_ID',
  {
    variant: { Color: 'Primary' },
    props: {
      children: figma.string('Heading Content')
    },
    example: ({ children }) => (
      <PrimaryHeading color="primary">{children}</PrimaryHeading>
    )
  }
);

/**
 * PrimaryHeading without margins
 */
figma.connect(
  PrimaryHeading,
  'https://figma.com/design/FIGMA_FILE_ID?node-id=PRIMARY_HEADING_NO_MARGINS_NODE_ID',
  {
    variant: { 'Disable Margins': true },
    props: {
      children: figma.string('Heading Content')
    },
    example: ({ children }) => (
      <PrimaryHeading disableMargins>{children}</PrimaryHeading>
    )
  }
);

/**
 * PrimaryHeading with mono variant
 */
figma.connect(
  PrimaryHeading,
  'https://figma.com/design/FIGMA_FILE_ID?node-id=PRIMARY_HEADING_MONO_NODE_ID',
  {
    variant: { Variant: 'Mono' },
    props: {
      children: figma.string('Heading Content')
    },
    example: ({ children }) => (
      <PrimaryHeading variant="mono">{children}</PrimaryHeading>
    )
  }
);
