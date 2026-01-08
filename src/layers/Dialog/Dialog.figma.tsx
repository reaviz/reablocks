import React from 'react';
import figma from '@figma/code-connect';
import { Dialog } from './Dialog';

/**
 * -- FIGMA CODE CONNECT --
 *
 * Update the Figma file URL below with your actual Figma component URL.
 * The URL should point to the specific component node in your Figma file.
 *
 * To get the URL:
 * 1. Open your Figma file
 * 2. Select the Dialog component
 * 3. Right-click and select "Copy link to selection"
 * 4. Replace the placeholder URL below
 */

figma.connect(
  Dialog,
  'https://figma.com/design/FIGMA_FILE_ID?node-id=DIALOG_NODE_ID',
  {
    props: {
      /**
       * Map Figma variants to React props.
       * The keys should match your Figma variant property names exactly.
       */
      open: figma.boolean('Open'),
      showCloseButton: figma.boolean('Show Close Button'),
      hasBackdrop: figma.boolean('Has Backdrop'),
      closeOnBackdropClick: figma.boolean('Close On Backdrop Click'),
      closeOnEscape: figma.boolean('Close On Escape'),
      disablePadding: figma.boolean('Disable Padding'),
      size: figma.enum('Size', {
        Small: '30%',
        Medium: '50%',
        Large: '70%',
        'Extra Large': '90%'
      }),
      header: figma.string('Header')
    },
    example: props => (
      <Dialog
        open={props.open}
        showCloseButton={props.showCloseButton}
        hasBackdrop={props.hasBackdrop}
        closeOnBackdropClick={props.closeOnBackdropClick}
        closeOnEscape={props.closeOnEscape}
        disablePadding={props.disablePadding}
        size={props.size}
        header={props.header}
      >
        <div>Dialog content goes here</div>
      </Dialog>
    )
  }
);

/**
 * Variant: Default Dialog
 */
figma.connect(
  Dialog,
  'https://figma.com/design/FIGMA_FILE_ID?node-id=DIALOG_DEFAULT_NODE_ID',
  {
    variant: { State: 'Default' },
    example: () => (
      <Dialog open={true} header="Dialog Title" onClose={() => {}}>
        <div>This is a basic dialog with default settings.</div>
      </Dialog>
    )
  }
);

/**
 * Variant: Dialog with Footer
 */
figma.connect(
  Dialog,
  'https://figma.com/design/FIGMA_FILE_ID?node-id=DIALOG_FOOTER_NODE_ID',
  {
    variant: { 'Has Footer': true },
    example: () => (
      <Dialog
        open={true}
        header="Confirm Action"
        footer={
          <div className="flex gap-2">
            <button>Cancel</button>
            <button>Confirm</button>
          </div>
        }
        onClose={() => {}}
      >
        <div>Are you sure you want to proceed?</div>
      </Dialog>
    )
  }
);

/**
 * Variant: Small Dialog
 */
figma.connect(
  Dialog,
  'https://figma.com/design/FIGMA_FILE_ID?node-id=DIALOG_SMALL_NODE_ID',
  {
    variant: { Size: 'Small' },
    example: () => (
      <Dialog open={true} size="30%" header="Small Dialog" onClose={() => {}}>
        <div>Compact dialog content</div>
      </Dialog>
    )
  }
);

/**
 * Variant: Large Dialog
 */
figma.connect(
  Dialog,
  'https://figma.com/design/FIGMA_FILE_ID?node-id=DIALOG_LARGE_NODE_ID',
  {
    variant: { Size: 'Large' },
    example: () => (
      <Dialog open={true} size="70%" header="Large Dialog" onClose={() => {}}>
        <div>Expanded dialog with more content space</div>
      </Dialog>
    )
  }
);

/**
 * Variant: Dialog without Close Button
 */
figma.connect(
  Dialog,
  'https://figma.com/design/FIGMA_FILE_ID?node-id=DIALOG_NO_CLOSE_NODE_ID',
  {
    variant: { 'Show Close Button': false },
    example: () => (
      <Dialog
        open={true}
        showCloseButton={false}
        header="Important Notice"
        onClose={() => {}}
      >
        <div>This dialog requires explicit action.</div>
      </Dialog>
    )
  }
);
