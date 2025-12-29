import React from 'react';
import figma from '@figma/code-connect';
import { PageTitle } from './PageTitle';

/**
 * Main PageTitle component with all prop variations
 */
figma.connect(
  PageTitle,
  'https://figma.com/design/FIGMA_FILE_ID?node-id=PAGE_TITLE_COMPONENT_NODE_ID',
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
      children: figma.string('Title Content')
    },
    example: ({ color, variant, disableMargins, children }) => (
      <PageTitle
        color={color}
        variant={variant}
        disableMargins={disableMargins}
      >
        {children}
      </PageTitle>
    )
  }
);

/**
 * PageTitle with primary color
 */
figma.connect(
  PageTitle,
  'https://figma.com/design/FIGMA_FILE_ID?node-id=PAGE_TITLE_PRIMARY_NODE_ID',
  {
    variant: { Color: 'Primary' },
    props: {
      children: figma.string('Title Content')
    },
    example: ({ children }) => <PageTitle color="primary">{children}</PageTitle>
  }
);

/**
 * PageTitle without margins
 */
figma.connect(
  PageTitle,
  'https://figma.com/design/FIGMA_FILE_ID?node-id=PAGE_TITLE_NO_MARGINS_NODE_ID',
  {
    variant: { 'Disable Margins': true },
    props: {
      children: figma.string('Title Content')
    },
    example: ({ children }) => <PageTitle disableMargins>{children}</PageTitle>
  }
);

/**
 * PageTitle with mono variant
 */
figma.connect(
  PageTitle,
  'https://figma.com/design/FIGMA_FILE_ID?node-id=PAGE_TITLE_MONO_NODE_ID',
  {
    variant: { Variant: 'Mono' },
    props: {
      children: figma.string('Title Content')
    },
    example: ({ children }) => <PageTitle variant="mono">{children}</PageTitle>
  }
);
