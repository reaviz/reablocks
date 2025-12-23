import React from 'react';
import figma from '@figma/code-connect';
import { Callout } from './Callout';

/**
 * -- FIGMA CODE CONNECT --
 *
 * Update the Figma file URL below with your actual Figma component URL.
 * The URL should point to the specific component node in your Figma file.
 *
 * To get the URL:
 * 1. Open your Figma file
 * 2. Select the Callout component
 * 3. Right-click and select "Copy link to selection"
 * 4. Replace the placeholder URL below
 */

figma.connect(
  Callout,
  'https://figma.com/design/FIGMA_FILE_ID?node-id=CALLOUT_NODE_ID',
  {
    props: {
      /**
       * Map Figma variants to React props.
       * The keys should match your Figma variant property names exactly.
       */
      variant: figma.enum('Variant', {
        Default: 'default',
        Success: 'success',
        Error: 'error',
        Warning: 'warning',
        Info: 'info'
      }),
      text: figma.string('Text')
    },
    example: props => <Callout variant={props.variant} text={props.text} />
  }
);

/**
 * Variant: Success Callout
 */
figma.connect(
  Callout,
  'https://figma.com/design/FIGMA_FILE_ID?node-id=CALLOUT_SUCCESS_NODE_ID',
  {
    variant: { Variant: 'Success' },
    example: () => (
      <Callout variant="success" text="Operation completed successfully!" />
    )
  }
);

/**
 * Variant: Error Callout
 */
figma.connect(
  Callout,
  'https://figma.com/design/FIGMA_FILE_ID?node-id=CALLOUT_ERROR_NODE_ID',
  {
    variant: { Variant: 'Error' },
    example: () => (
      <Callout variant="error" text="An error occurred. Please try again." />
    )
  }
);

/**
 * Variant: Warning Callout
 */
figma.connect(
  Callout,
  'https://figma.com/design/FIGMA_FILE_ID?node-id=CALLOUT_WARNING_NODE_ID',
  {
    variant: { Variant: 'Warning' },
    example: () => (
      <Callout
        variant="warning"
        text="Please review your changes before proceeding."
      />
    )
  }
);

/**
 * Variant: Info Callout
 */
figma.connect(
  Callout,
  'https://figma.com/design/FIGMA_FILE_ID?node-id=CALLOUT_INFO_NODE_ID',
  {
    variant: { Variant: 'Info' },
    example: () => (
      <Callout
        variant="info"
        text="Did you know? You can customize this message."
      />
    )
  }
);
