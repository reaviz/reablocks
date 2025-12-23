import React from 'react';
import figma from '@figma/code-connect';
import { ConfirmDialog } from './ConfirmDialog';

/**
 * -- FIGMA CODE CONNECT --
 *
 * Update the Figma file URL below with your actual Figma component URL.
 * The URL should point to the specific component node in your Figma file.
 *
 * To get the URL:
 * 1. Open your Figma file
 * 2. Select the ConfirmDialog component
 * 3. Right-click and select "Copy link to selection"
 * 4. Replace the placeholder URL below
 */

figma.connect(
  ConfirmDialog,
  'https://figma.com/design/FIGMA_FILE_ID?node-id=CONFIRM_DIALOG_NODE_ID',
  {
    props: {
      /**
       * Map Figma variants to React props.
       * The keys should match your Figma variant property names exactly.
       */
      open: figma.boolean('Open'),
      header: figma.string('Header'),
      content: figma.string('Content'),
      confirmLabel: figma.string('Confirm Label'),
      cancelLabel: figma.string('Cancel Label')
    },
    example: props => (
      <ConfirmDialog
        open={props.open}
        header={props.header}
        content={props.content}
        confirmLabel={props.confirmLabel}
        cancelLabel={props.cancelLabel}
        onConfirm={() => {}}
        onCancel={() => {}}
      />
    )
  }
);

/**
 * Variant: Delete Confirmation
 */
figma.connect(
  ConfirmDialog,
  'https://figma.com/design/FIGMA_FILE_ID?node-id=CONFIRM_DIALOG_DELETE_NODE_ID',
  {
    variant: { Type: 'Delete' },
    example: () => (
      <ConfirmDialog
        open={true}
        header="Delete Item"
        content="Are you sure you want to delete this item? This action cannot be undone."
        confirmLabel="Delete"
        cancelLabel="Cancel"
        onConfirm={() => {}}
        onCancel={() => {}}
      />
    )
  }
);

/**
 * Variant: Save Changes Confirmation
 */
figma.connect(
  ConfirmDialog,
  'https://figma.com/design/FIGMA_FILE_ID?node-id=CONFIRM_DIALOG_SAVE_NODE_ID',
  {
    variant: { Type: 'Save' },
    example: () => (
      <ConfirmDialog
        open={true}
        header="Save Changes"
        content="You have unsaved changes. Would you like to save them before leaving?"
        confirmLabel="Save"
        cancelLabel="Discard"
        onConfirm={() => {}}
        onCancel={() => {}}
      />
    )
  }
);

/**
 * Variant: Logout Confirmation
 */
figma.connect(
  ConfirmDialog,
  'https://figma.com/design/FIGMA_FILE_ID?node-id=CONFIRM_DIALOG_LOGOUT_NODE_ID',
  {
    variant: { Type: 'Logout' },
    example: () => (
      <ConfirmDialog
        open={true}
        header="Confirm Logout"
        content="Are you sure you want to log out?"
        confirmLabel="Logout"
        cancelLabel="Stay"
        onConfirm={() => {}}
        onCancel={() => {}}
      />
    )
  }
);

/**
 * Variant: Generic Confirmation
 */
figma.connect(
  ConfirmDialog,
  'https://figma.com/design/FIGMA_FILE_ID?node-id=CONFIRM_DIALOG_GENERIC_NODE_ID',
  {
    variant: { Type: 'Generic' },
    example: () => (
      <ConfirmDialog
        open={true}
        header="Confirm Action"
        content="Are you sure you want to proceed with this action?"
        onConfirm={() => {}}
        onCancel={() => {}}
      />
    )
  }
);
