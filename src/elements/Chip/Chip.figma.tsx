import React from 'react';
import figma from '@figma/code-connect';
import { Chip } from './Chip';

/**
 * -- FIGMA CODE CONNECT --
 *
 * Update the Figma file URL below with your actual Figma component URL.
 * The URL should point to the specific component node in your Figma file.
 *
 * To get the URL:
 * 1. Open your Figma file
 * 2. Select the Chip/Tag component
 * 3. Right-click and select "Copy link to selection"
 * 4. Replace the placeholder URL below
 *
 * Note: Chip is often referred to as "Tag" in design systems.
 * This component serves both purposes.
 */

figma.connect(
  Chip,
  'https://figma.com/design/FIGMA_FILE_ID?node-id=CHIP_NODE_ID',
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
        Warning: 'warning',
        Info: 'info'
      }),
      size: figma.enum('Size', {
        Small: 'small',
        Medium: 'medium',
        Large: 'large'
      }),
      variant: figma.enum('Variant', {
        Filled: 'filled',
        Outline: 'outline'
      }),
      disabled: figma.enum('State', {
        Disabled: true
      }),
      selected: figma.boolean('Selected'),
      children: figma.string('Label')
    },
    example: props => (
      <Chip
        color={props.color}
        size={props.size}
        variant={props.variant}
        disabled={props.disabled}
        selected={props.selected}
      >
        {props.children}
      </Chip>
    )
  }
);

/**
 * Variant: Default Chip/Tag
 */
figma.connect(
  Chip,
  'https://figma.com/design/FIGMA_FILE_ID?node-id=CHIP_DEFAULT_NODE_ID',
  {
    variant: { Color: 'Default', Variant: 'Filled' },
    example: () => <Chip>Label</Chip>
  }
);

/**
 * Variant: Primary Chip
 */
figma.connect(
  Chip,
  'https://figma.com/design/FIGMA_FILE_ID?node-id=CHIP_PRIMARY_NODE_ID',
  {
    variant: { Color: 'Primary' },
    example: () => <Chip color="primary">Primary</Chip>
  }
);

/**
 * Variant: Success Chip (for status indicators)
 */
figma.connect(
  Chip,
  'https://figma.com/design/FIGMA_FILE_ID?node-id=CHIP_SUCCESS_NODE_ID',
  {
    variant: { Color: 'Success' },
    example: () => <Chip color="success">Active</Chip>
  }
);

/**
 * Variant: Error/Danger Chip
 */
figma.connect(
  Chip,
  'https://figma.com/design/FIGMA_FILE_ID?node-id=CHIP_ERROR_NODE_ID',
  {
    variant: { Color: 'Error' },
    example: () => <Chip color="error">Error</Chip>
  }
);

/**
 * Variant: Warning Chip
 */
figma.connect(
  Chip,
  'https://figma.com/design/FIGMA_FILE_ID?node-id=CHIP_WARNING_NODE_ID',
  {
    variant: { Color: 'Warning' },
    example: () => <Chip color="warning">Pending</Chip>
  }
);

/**
 * Variant: Outline Chip
 */
figma.connect(
  Chip,
  'https://figma.com/design/FIGMA_FILE_ID?node-id=CHIP_OUTLINE_NODE_ID',
  {
    variant: { Variant: 'Outline' },
    example: () => <Chip variant="outline">Outlined</Chip>
  }
);

/**
 * Variant: Small Chip
 */
figma.connect(
  Chip,
  'https://figma.com/design/FIGMA_FILE_ID?node-id=CHIP_SMALL_NODE_ID',
  {
    variant: { Size: 'Small' },
    example: () => <Chip size="small">Small</Chip>
  }
);

/**
 * Variant: Selectable Chip
 */
figma.connect(
  Chip,
  'https://figma.com/design/FIGMA_FILE_ID?node-id=CHIP_SELECTABLE_NODE_ID',
  {
    variant: { Selectable: true },
    example: () => (
      <Chip color="primary" selected={false} onClick={() => {}}>
        Selectable
      </Chip>
    )
  }
);

/**
 * Variant: Disabled Chip
 */
figma.connect(
  Chip,
  'https://figma.com/design/FIGMA_FILE_ID?node-id=CHIP_DISABLED_NODE_ID',
  {
    variant: { State: 'Disabled' },
    example: () => <Chip disabled>Disabled</Chip>
  }
);
