import React from 'react';
import figma from '@figma/code-connect';
import { Sub } from './Sub';

/**
 * Main Sub component with all prop variations
 */
figma.connect(
  Sub,
  'https://figma.com/design/FIGMA_FILE_ID?node-id=SUB_COMPONENT_NODE_ID',
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
      children: figma.string('Sub Content')
    },
    example: ({ color, variant, disableMargins, children }) => (
      <Sub color={color} variant={variant} disableMargins={disableMargins}>
        {children}
      </Sub>
    )
  }
);

/**
 * Sub with primary color
 */
figma.connect(
  Sub,
  'https://figma.com/design/FIGMA_FILE_ID?node-id=SUB_PRIMARY_NODE_ID',
  {
    variant: { Color: 'Primary' },
    props: {
      children: figma.string('Sub Content')
    },
    example: ({ children }) => <Sub color="primary">{children}</Sub>
  }
);

/**
 * Sub without margins
 */
figma.connect(
  Sub,
  'https://figma.com/design/FIGMA_FILE_ID?node-id=SUB_NO_MARGINS_NODE_ID',
  {
    variant: { 'Disable Margins': true },
    props: {
      children: figma.string('Sub Content')
    },
    example: ({ children }) => <Sub disableMargins>{children}</Sub>
  }
);

/**
 * Sub with mono variant
 */
figma.connect(
  Sub,
  'https://figma.com/design/FIGMA_FILE_ID?node-id=SUB_MONO_NODE_ID',
  {
    variant: { Variant: 'Mono' },
    props: {
      children: figma.string('Sub Content')
    },
    example: ({ children }) => <Sub variant="mono">{children}</Sub>
  }
);
