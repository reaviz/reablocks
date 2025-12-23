import React from 'react';
import figma from '@figma/code-connect';
import { Pluralize } from './Pluralize';

/**
 * -- FIGMA CODE CONNECT --
 *
 * Update the Figma file URL below with your actual Figma component URL.
 * The URL should point to the specific component node in your Figma file.
 *
 * To get the URL:
 * 1. Open your Figma file
 * 2. Select the Pluralize component
 * 3. Right-click and select "Copy link to selection"
 * 4. Replace the placeholder URL below
 */

figma.connect(
  Pluralize,
  'https://figma.com/design/FIGMA_FILE_ID?node-id=PLURALIZE_NODE_ID',
  {
    props: {
      /**
       * Map Figma variants to React props.
       * The keys should match your Figma variant property names exactly.
       */
      count: figma.enum('Count', {
        '0': 0,
        '1': 1,
        '2': 2,
        '5': 5,
        '10': 10,
        '100': 100
      }),
      singular: figma.string('Singular'),
      plural: figma.string('Plural'),
      zero: figma.string('Zero State'),
      showCount: figma.boolean('Show Count')
    },
    example: props => (
      <Pluralize
        count={props.count}
        singular={props.singular}
        plural={props.plural}
        zero={props.zero}
        showCount={props.showCount}
      />
    )
  }
);

/**
 * Variant: Singular (1 item)
 */
figma.connect(
  Pluralize,
  'https://figma.com/design/FIGMA_FILE_ID?node-id=PLURALIZE_SINGULAR_NODE_ID',
  {
    variant: { Count: '1' },
    example: () => <Pluralize count={1} singular="item" />
  }
);

/**
 * Variant: Plural (multiple items)
 */
figma.connect(
  Pluralize,
  'https://figma.com/design/FIGMA_FILE_ID?node-id=PLURALIZE_PLURAL_NODE_ID',
  {
    variant: { Count: '5' },
    example: () => <Pluralize count={5} singular="item" />
  }
);

/**
 * Variant: Zero state with custom message
 */
figma.connect(
  Pluralize,
  'https://figma.com/design/FIGMA_FILE_ID?node-id=PLURALIZE_ZERO_NODE_ID',
  {
    variant: { Count: '0' },
    example: () => <Pluralize count={0} singular="item" zero="no items" />
  }
);

/**
 * Variant: Without count display
 */
figma.connect(
  Pluralize,
  'https://figma.com/design/FIGMA_FILE_ID?node-id=PLURALIZE_NO_COUNT_NODE_ID',
  {
    variant: { 'Show Count': false },
    example: () => <Pluralize count={5} singular="item" showCount={false} />
  }
);

/**
 * Variant: Custom plural form
 */
figma.connect(
  Pluralize,
  'https://figma.com/design/FIGMA_FILE_ID?node-id=PLURALIZE_CUSTOM_NODE_ID',
  {
    variant: { Type: 'Custom' },
    example: () => (
      <Pluralize count={3} singular="person" plural="people" showCount />
    )
  }
);

/**
 * Variant: Large count
 */
figma.connect(
  Pluralize,
  'https://figma.com/design/FIGMA_FILE_ID?node-id=PLURALIZE_LARGE_NODE_ID',
  {
    variant: { Count: '100' },
    example: () => <Pluralize count={1000} singular="user" />
  }
);
