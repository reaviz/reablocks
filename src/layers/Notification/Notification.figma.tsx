import React from 'react';
import figma from '@figma/code-connect';
import { Notification } from './Notification';

/**
 * -- FIGMA CODE CONNECT --
 *
 * Update the Figma file URL below with your actual Figma component URL.
 * The URL should point to the specific component node in your Figma file.
 *
 * To get the URL:
 * 1. Open your Figma file
 * 2. Select the Notification component
 * 3. Right-click and select "Copy link to selection"
 * 4. Replace the placeholder URL below
 */

figma.connect(
  Notification,
  'https://figma.com/design/FIGMA_FILE_ID?node-id=NOTIFICATION_NODE_ID',
  {
    props: {
      /**
       * Map Figma variants to React props.
       * The keys should match your Figma variant property names exactly.
       */
      variant: figma.enum('Variant', {
        Default: 'default',
        Success: 'success',
        Warning: 'warning',
        Error: 'error',
        Info: 'info'
      }),
      showClose: figma.boolean('Show Close'),
      title: figma.string('Title'),
      body: figma.string('Body')
    },
    example: props => (
      <Notification
        id={1}
        variant={props.variant}
        showClose={props.showClose}
        title={props.title}
        body={props.body}
        timeout={5000}
        onClose={() => {}}
      />
    )
  }
);

/**
 * Variant: Success Notification
 */
figma.connect(
  Notification,
  'https://figma.com/design/FIGMA_FILE_ID?node-id=NOTIFICATION_SUCCESS_NODE_ID',
  {
    variant: { Variant: 'Success' },
    example: () => (
      <Notification
        id={1}
        variant="success"
        title="Success"
        body="Your changes have been saved successfully!"
        showClose={true}
        timeout={5000}
        onClose={() => {}}
      />
    )
  }
);

/**
 * Variant: Error Notification
 */
figma.connect(
  Notification,
  'https://figma.com/design/FIGMA_FILE_ID?node-id=NOTIFICATION_ERROR_NODE_ID',
  {
    variant: { Variant: 'Error' },
    example: () => (
      <Notification
        id={1}
        variant="error"
        title="Error"
        body="An error occurred. Please try again."
        showClose={true}
        timeout={5000}
        onClose={() => {}}
      />
    )
  }
);

/**
 * Variant: Warning Notification
 */
figma.connect(
  Notification,
  'https://figma.com/design/FIGMA_FILE_ID?node-id=NOTIFICATION_WARNING_NODE_ID',
  {
    variant: { Variant: 'Warning' },
    example: () => (
      <Notification
        id={1}
        variant="warning"
        title="Warning"
        body="Please review your changes before proceeding."
        showClose={true}
        timeout={5000}
        onClose={() => {}}
      />
    )
  }
);

/**
 * Variant: Info Notification
 */
figma.connect(
  Notification,
  'https://figma.com/design/FIGMA_FILE_ID?node-id=NOTIFICATION_INFO_NODE_ID',
  {
    variant: { Variant: 'Info' },
    example: () => (
      <Notification
        id={1}
        variant="info"
        title="Information"
        body="New features are available. Check them out!"
        showClose={true}
        timeout={5000}
        onClose={() => {}}
      />
    )
  }
);

/**
 * Variant: Notification with Action
 */
figma.connect(
  Notification,
  'https://figma.com/design/FIGMA_FILE_ID?node-id=NOTIFICATION_ACTION_NODE_ID',
  {
    variant: { 'Has Action': true },
    example: () => (
      <Notification
        id={1}
        variant="info"
        title="Update Available"
        body="A new version is available. Would you like to update?"
        action={<button>Update Now</button>}
        showClose={true}
        timeout={10000}
        onClose={() => {}}
      />
    )
  }
);

/**
 * Variant: Notification with Icon
 */
figma.connect(
  Notification,
  'https://figma.com/design/FIGMA_FILE_ID?node-id=NOTIFICATION_ICON_NODE_ID',
  {
    variant: { 'Has Icon': true },
    example: () => (
      <Notification
        id={1}
        variant="success"
        title="Upload Complete"
        body="Your file has been uploaded successfully."
        icon={<span>✓</span>}
        showClose={true}
        timeout={5000}
        onClose={() => {}}
      />
    )
  }
);

/**
 * Variant: Notification without Close Button
 */
figma.connect(
  Notification,
  'https://figma.com/design/FIGMA_FILE_ID?node-id=NOTIFICATION_NO_CLOSE_NODE_ID',
  {
    variant: { 'Show Close': false },
    example: () => (
      <Notification
        id={1}
        variant="info"
        title="Processing"
        body="Your request is being processed..."
        showClose={false}
        timeout={3000}
        onClose={() => {}}
      />
    )
  }
);
