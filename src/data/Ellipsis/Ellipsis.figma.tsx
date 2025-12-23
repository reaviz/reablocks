import React from 'react';
import figma from '@figma/code-connect';
import { Ellipsis } from './Ellipsis';

/**
 * -- FIGMA CODE CONNECT --
 *
 * Update the Figma file URL below with your actual Figma component URL.
 * The URL should point to the specific component node in your Figma file.
 *
 * To get the URL:
 * 1. Open your Figma file
 * 2. Select the Ellipsis component
 * 3. Right-click and select "Copy link to selection"
 * 4. Replace the placeholder URL below
 */

figma.connect(
  Ellipsis,
  'https://figma.com/design/FIGMA_FILE_ID?node-id=ELLIPSIS_NODE_ID',
  {
    props: {
      /**
       * Map Figma variants to React props.
       * The keys should match your Figma variant property names exactly.
       */
      value: figma.string('Text Content'),
      expandable: figma.boolean('Expandable'),
      removeLinebreaks: figma.boolean('Remove Line Breaks'),
      limit: figma.enum('Character Limit', {
        '128': 128,
        '256': 256,
        '512': 512,
        '1024': 1024
      }),
      lines: figma.enum('Max Lines', {
        '1': 1,
        '2': 2,
        '3': 3,
        '4': 4,
        '5': 5
      }),
      moreText: figma.string('More Text'),
      lessText: figma.string('Less Text')
    },
    example: props => (
      <Ellipsis
        value={props.value}
        expandable={props.expandable}
        removeLinebreaks={props.removeLinebreaks}
        limit={props.limit}
        lines={props.lines}
        moreText={props.moreText}
        lessText={props.lessText}
      />
    )
  }
);

/**
 * Variant: Basic Ellipsis with character limit
 */
figma.connect(
  Ellipsis,
  'https://figma.com/design/FIGMA_FILE_ID?node-id=ELLIPSIS_BASIC_NODE_ID',
  {
    variant: { Type: 'Character Limit' },
    example: () => (
      <Ellipsis
        value="This is a long text that will be truncated after a certain number of characters to maintain a clean and compact layout."
        limit={50}
      />
    )
  }
);

/**
 * Variant: Line-based Ellipsis
 */
figma.connect(
  Ellipsis,
  'https://figma.com/design/FIGMA_FILE_ID?node-id=ELLIPSIS_LINES_NODE_ID',
  {
    variant: { Type: 'Line Limit' },
    example: () => (
      <Ellipsis
        value="This is a long text that will be truncated after a certain number of lines. This allows for better control over multi-line text display."
        lines={2}
      />
    )
  }
);

/**
 * Variant: Non-expandable Ellipsis
 */
figma.connect(
  Ellipsis,
  'https://figma.com/design/FIGMA_FILE_ID?node-id=ELLIPSIS_STATIC_NODE_ID',
  {
    variant: { Expandable: false },
    example: () => (
      <Ellipsis
        value="This text cannot be expanded and will always remain truncated."
        limit={40}
        expandable={false}
      />
    )
  }
);

/**
 * Variant: Custom expand/collapse text
 */
figma.connect(
  Ellipsis,
  'https://figma.com/design/FIGMA_FILE_ID?node-id=ELLIPSIS_CUSTOM_NODE_ID',
  {
    variant: { Type: 'Custom Labels' },
    example: () => (
      <Ellipsis
        value="This is a long text with custom labels for expanding and collapsing the content."
        limit={50}
        moreText="Read more"
        lessText="Collapse"
      />
    )
  }
);
