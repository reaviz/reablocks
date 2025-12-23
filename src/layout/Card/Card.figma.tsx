import React from 'react';
import figma from '@figma/code-connect';
import { Card } from './Card';

/**
 * -- FIGMA CODE CONNECT --
 *
 * Update the Figma file URL below with your actual Figma component URL.
 * The URL should point to the specific component node in your Figma file.
 *
 * To get the URL:
 * 1. Open your Figma file
 * 2. Select the Card component
 * 3. Right-click and select "Copy link to selection"
 * 4. Replace the placeholder URL below
 */

figma.connect(
  Card,
  'https://figma.com/design/FIGMA_FILE_ID?node-id=CARD_NODE_ID',
  {
    props: {
      /**
       * Map Figma variants to React props.
       * The keys should match your Figma variant property names exactly.
       */
      disablePadding: figma.boolean('Disable Padding'),
      header: figma.string('Header')
    },
    example: props => (
      <Card header={props.header} disablePadding={props.disablePadding}>
        Card content goes here
      </Card>
    )
  }
);

/**
 * Variant: Basic Card
 */
figma.connect(
  Card,
  'https://figma.com/design/FIGMA_FILE_ID?node-id=CARD_BASIC_NODE_ID',
  {
    variant: { 'Has Header': false },
    example: () => (
      <Card>
        <p>Card content goes here</p>
      </Card>
    )
  }
);

/**
 * Variant: Card with Header
 */
figma.connect(
  Card,
  'https://figma.com/design/FIGMA_FILE_ID?node-id=CARD_HEADER_NODE_ID',
  {
    variant: { 'Has Header': true },
    example: () => (
      <Card header="Card Title">
        <p>Card content with a header</p>
      </Card>
    )
  }
);

/**
 * Variant: Card without Padding
 */
figma.connect(
  Card,
  'https://figma.com/design/FIGMA_FILE_ID?node-id=CARD_NO_PADDING_NODE_ID',
  {
    variant: { 'Disable Padding': true },
    example: () => (
      <Card disablePadding>
        <img src="/image.jpg" alt="Full-bleed content" />
      </Card>
    )
  }
);

/**
 * Variant: Card with Custom Header Element
 */
figma.connect(
  Card,
  'https://figma.com/design/FIGMA_FILE_ID?node-id=CARD_CUSTOM_HEADER_NODE_ID',
  {
    variant: { 'Custom Header': true },
    example: () => (
      <Card
        header={
          <div className="flex justify-between items-center">
            <span>Title</span>
            <button>Action</button>
          </div>
        }
      >
        <p>Card with custom header element</p>
      </Card>
    )
  }
);
