import { Meta, StoryObj } from '@storybook/react';
import React, { Fragment, useState } from 'react';
import { GlobalOverlay } from './GlobalOverlay';
import { motion } from 'framer-motion';
import { useOverlay } from '../useOverlay';

const meta: Meta<typeof GlobalOverlay> = {
  title: 'Components/Utils/Overlay/Global Overlay',
  component: GlobalOverlay
};

type Story = StoryObj<typeof GlobalOverlay>;

export const AutoOpen: Story = {
  render: () => {
    const [open, setOpen] = useState(true);

    return (
      <div
        style={{
          width: 300,
          height: 300
        }}
      >
        <div
          style={{
            width: 300,
            height: 300,
            border: 'solid 1px blue',
            padding: 50,
            position: 'relative',
            overflow: 'hidden'
          }}
        >
          Hello
          <GlobalOverlay open={open} onClose={() => setOpen(false)}>
            {({ overlayIndex }) => (
              <div
                style={{
                  background: 'blue',
                  zIndex: overlayIndex,
                  position: 'absolute',
                  width: 500,
                  height: 300
                }}
              >
                Hi - {overlayIndex}
              </div>
            )}
          </GlobalOverlay>
        </div>
      </div>
    );
  }
};

export const ClickToOpen: Story = {
  render: () => {
    const [open, setOpen] = useState(false);

    return (
      <div
        style={{
          width: 300,
          height: 300
        }}
      >
        <div
          style={{
            width: 300,
            height: 300,
            background: 'black',
            padding: 50,
            position: 'relative',
            overflow: 'hidden'
          }}
        >
          <button type="button" onClick={() => setOpen(true)}>
            Open
          </button>
          <GlobalOverlay
            open={open}
            closeOnBackdropClick={true}
            onClose={() => setOpen(false)}
          >
            {({ overlayIndex }) => (
              <div
                style={{
                  background: 'blue',
                  zIndex: overlayIndex,
                  position: 'absolute',
                  width: 500,
                  height: 300
                }}
              >
                Hi - {overlayIndex}
              </div>
            )}
          </GlobalOverlay>
        </div>
      </div>
    );
  }
};

export const PromptToClose: Story = {
  render: () => {
    const [open, setOpen] = useState(false);

    return (
      <div
        style={{
          width: 300,
          height: 300
        }}
      >
        <div
          style={{
            width: 300,
            height: 300,
            background: 'black',
            padding: 50,
            position: 'relative',
            overflow: 'hidden'
          }}
        >
          <button type="button" onClick={() => setOpen(true)}>
            Open
          </button>
          <GlobalOverlay
            open={open}
            closeOnBackdropClick={true}
            onClose={() => {
              const ok = window.confirm('Are you sure you want to close?');
              if (ok) {
                setOpen(false);
              }
            }}
          >
            {({ overlayIndex }) => (
              <div
                style={{
                  background: 'blue',
                  zIndex: overlayIndex,
                  position: 'absolute',
                  width: 500,
                  height: 300
                }}
              >
                Hi - {overlayIndex}
              </div>
            )}
          </GlobalOverlay>
        </div>
      </div>
    );
  }
};

export const DialogExample: Story = {
  render: () => {
    const [open, setOpen] = useState(false);
    return (
      <Fragment>
        <button type="button" onClick={() => setOpen(true)}>
          Open
        </button>
        <Dialog visible={open} header="Welcome!" onClose={() => setOpen(false)}>
          <MyDialog />
        </Dialog>
      </Fragment>
    );
  }
};

const Dialog = ({ visible, header, children, onClose }) => (
  <GlobalOverlay open={visible} onClose={onClose}>
    {({ overlayIndex }) => (
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          top: 0,
          bottom: 0,
          left: 0,
          right: 0,
          zIndex: overlayIndex,
          position: 'fixed',
          pointerEvents: 'none'
        }}
      >
        <motion.div
          initial={{ opacity: 0, y: '-20%' }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: '20%' }}
          transition={{ duration: 0.5, ease: [0.04, 0.62, 0.23, 0.98] }}
          style={{
            width: 300,
            top: 50,
            background: 'black',
            padding: 20,
            pointerEvents: 'auto'
          }}
        >
          <h1>
            {header}
            <button type="button" onClick={onClose}>
              X
            </button>
          </h1>
          {children}
        </motion.div>
      </div>
    )}
  </GlobalOverlay>
);

const MyDialog = () => {
  const { close } = useOverlay();
  return (
    <div>
      <h1>Whats up?</h1>
      <button type="button" onClick={close}>
        Close
      </button>
    </div>
  );
};

export default meta;
