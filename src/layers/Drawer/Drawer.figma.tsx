import React from 'react';
import figma from '@figma/code-connect';
import { Drawer } from './Drawer';

/**
 * -- FIGMA CODE CONNECT --
 *
 * Update the Figma file URL below with your actual Figma component URL.
 * The URL should point to the specific component node in your Figma file.
 *
 * To get the URL:
 * 1. Open your Figma file
 * 2. Select the Drawer component
 * 3. Right-click and select "Copy link to selection"
 * 4. Replace the placeholder URL below
 */

figma.connect(
  Drawer,
  'https://figma.com/design/FIGMA_FILE_ID?node-id=DRAWER_NODE_ID',
  {
    props: {
      /**
       * Map Figma variants to React props.
       * The keys should match your Figma variant property names exactly.
       */
      position: figma.enum('Position', {
        Start: 'start',
        End: 'end',
        Top: 'top',
        Bottom: 'bottom'
      }),
      size: figma.enum('Size', {
        Small: '30%',
        Medium: '50%',
        Large: '80%',
        Full: '100%'
      }),
      open: figma.boolean('Open'),
      showCloseButton: figma.boolean('Show Close Button'),
      hasBackdrop: figma.boolean('Has Backdrop'),
      closeOnBackdropClick: figma.boolean('Close On Backdrop Click'),
      closeOnEscape: figma.boolean('Close On Escape'),
      disablePadding: figma.boolean('Disable Padding'),
      header: figma.string('Header')
    },
    example: props => (
      <Drawer
        position={props.position}
        size={props.size}
        open={props.open}
        showCloseButton={props.showCloseButton}
        hasBackdrop={props.hasBackdrop}
        closeOnBackdropClick={props.closeOnBackdropClick}
        closeOnEscape={props.closeOnEscape}
        disablePadding={props.disablePadding}
        header={props.header}
      >
        <div>Drawer content goes here</div>
      </Drawer>
    )
  }
);

/**
 * Variant: Right Side Drawer
 */
figma.connect(
  Drawer,
  'https://figma.com/design/FIGMA_FILE_ID?node-id=DRAWER_END_NODE_ID',
  {
    variant: { Position: 'End' },
    example: () => (
      <Drawer open={true} position="end" header="Settings" onClose={() => {}}>
        <div>Drawer slides in from the right</div>
      </Drawer>
    )
  }
);

/**
 * Variant: Left Side Drawer
 */
figma.connect(
  Drawer,
  'https://figma.com/design/FIGMA_FILE_ID?node-id=DRAWER_START_NODE_ID',
  {
    variant: { Position: 'Start' },
    example: () => (
      <Drawer
        open={true}
        position="start"
        header="Navigation"
        onClose={() => {}}
      >
        <div>Drawer slides in from the left</div>
      </Drawer>
    )
  }
);

/**
 * Variant: Bottom Drawer
 */
figma.connect(
  Drawer,
  'https://figma.com/design/FIGMA_FILE_ID?node-id=DRAWER_BOTTOM_NODE_ID',
  {
    variant: { Position: 'Bottom' },
    example: () => (
      <Drawer open={true} position="bottom" header="Actions" onClose={() => {}}>
        <div>Drawer slides up from the bottom</div>
      </Drawer>
    )
  }
);

/**
 * Variant: Top Drawer
 */
figma.connect(
  Drawer,
  'https://figma.com/design/FIGMA_FILE_ID?node-id=DRAWER_TOP_NODE_ID',
  {
    variant: { Position: 'Top' },
    example: () => (
      <Drawer
        open={true}
        position="top"
        header="Notifications"
        onClose={() => {}}
      >
        <div>Drawer slides down from the top</div>
      </Drawer>
    )
  }
);

/**
 * Variant: Large Drawer
 */
figma.connect(
  Drawer,
  'https://figma.com/design/FIGMA_FILE_ID?node-id=DRAWER_LARGE_NODE_ID',
  {
    variant: { Size: 'Large' },
    example: () => (
      <Drawer open={true} size="80%" header="Details" onClose={() => {}}>
        <div>Large drawer with more space</div>
      </Drawer>
    )
  }
);

/**
 * Variant: Drawer without Header
 */
figma.connect(
  Drawer,
  'https://figma.com/design/FIGMA_FILE_ID?node-id=DRAWER_NO_HEADER_NODE_ID',
  {
    variant: { 'Has Header': false },
    example: () => (
      <Drawer open={true} onClose={() => {}}>
        <div>Drawer content without header</div>
      </Drawer>
    )
  }
);
