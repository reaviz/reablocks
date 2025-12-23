import React from 'react';
import figma from '@figma/code-connect';
import { SecondaryHeading } from './SecondaryHeading';

/**
 * Main SecondaryHeading component with all prop variations
 */
figma.connect(
  SecondaryHeading,
  'https://figma.com/design/FIGMA_FILE_ID?node-id=SECONDARY_HEADING_COMPONENT_NODE_ID',
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
      <SecondaryHeading
        color={color}
        variant={variant}
        disableMargins={disableMargins}
      >
        {children}
      </SecondaryHeading>
    )
  }
);

/**
 * SecondaryHeading with primary color
 */
figma.connect(
  SecondaryHeading,
  'https://figma.com/design/FIGMA_FILE_ID?node-id=SECONDARY_HEADING_PRIMARY_NODE_ID',
  {
    variant: { Color: 'Primary' },
    props: {
      children: figma.string('Heading Content')
    },
    example: ({ children }) => (
      <SecondaryHeading color="primary">{children}</SecondaryHeading>
    )
  }
);

/**
 * SecondaryHeading without margins
 */
figma.connect(
  SecondaryHeading,
  'https://figma.com/design/FIGMA_FILE_ID?node-id=SECONDARY_HEADING_NO_MARGINS_NODE_ID',
  {
    variant: { 'Disable Margins': true },
    props: {
      children: figma.string('Heading Content')
    },
    example: ({ children }) => (
      <SecondaryHeading disableMargins>{children}</SecondaryHeading>
    )
  }
);

/**
 * SecondaryHeading with mono variant
 */
figma.connect(
  SecondaryHeading,
  'https://figma.com/design/FIGMA_FILE_ID?node-id=SECONDARY_HEADING_MONO_NODE_ID',
  {
    variant: { Variant: 'Mono' },
    props: {
      children: figma.string('Heading Content')
    },
    example: ({ children }) => (
      <SecondaryHeading variant="mono">{children}</SecondaryHeading>
    )
  }
);
