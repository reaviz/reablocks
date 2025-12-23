import React from 'react';
import figma from '@figma/code-connect';
import { Text } from './Text';

/**
 * Main Text component with all prop variations
 */
figma.connect(
  Text,
  'https://figma.com/design/FIGMA_FILE_ID?node-id=TEXT_COMPONENT_NODE_ID',
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
      fontStyle: figma.enum('Font Style', {
        Default: 'default',
        Thin: 'thin',
        Bold: 'bold',
        'Extra Bold': 'extraBold',
        Italic: 'italic'
      }),
      variant: figma.enum('Variant', {
        Default: 'default',
        Mono: 'mono'
      }),
      children: figma.string('Text Content')
    },
    example: ({ color, fontStyle, variant, children }) => (
      <Text color={color} fontStyle={fontStyle} variant={variant}>
        {children}
      </Text>
    )
  }
);

/**
 * Text with primary color
 */
figma.connect(
  Text,
  'https://figma.com/design/FIGMA_FILE_ID?node-id=TEXT_PRIMARY_NODE_ID',
  {
    variant: { Color: 'Primary' },
    props: {
      children: figma.string('Text Content')
    },
    example: ({ children }) => <Text color="primary">{children}</Text>
  }
);

/**
 * Bold text variant
 */
figma.connect(
  Text,
  'https://figma.com/design/FIGMA_FILE_ID?node-id=TEXT_BOLD_NODE_ID',
  {
    variant: { 'Font Style': 'Bold' },
    props: {
      children: figma.string('Text Content')
    },
    example: ({ children }) => <Text fontStyle="bold">{children}</Text>
  }
);

/**
 * Monospace text variant
 */
figma.connect(
  Text,
  'https://figma.com/design/FIGMA_FILE_ID?node-id=TEXT_MONO_NODE_ID',
  {
    variant: { Variant: 'Mono' },
    props: {
      children: figma.string('Text Content')
    },
    example: ({ children }) => <Text variant="mono">{children}</Text>
  }
);
