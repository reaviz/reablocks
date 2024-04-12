import { Meta, StoryObj } from '@storybook/react';
import React, { useState, useRef } from 'react';
import { ConnectedOverlay } from './ConnectedOverlay';
import { motion } from 'framer-motion';

const meta: Meta<typeof ConnectedOverlay> = {
  title: 'Components/Utils/Overlay/Connected Overlay',
  component: ConnectedOverlay
};

type Story = StoryObj<typeof ConnectedOverlay>;

export const Simple: Story = {
  render: () => {
    const [visible, setVisible] = useState(false);

    return (
      <div
        style={{
          width: 300,
          padding: 50,
          height: 300,
          border: 'solid 1px red'
        }}
      >
        <ConnectedOverlay
          open={visible}
          onOpen={() => setVisible(true)}
          onClose={() => setVisible(false)}
          content={({ overlayIndex }) => (
            <div
              style={{
                background: 'green',
                padding: 15
              }}
            >
              <h1>Hello + {overlayIndex}</h1>
            </div>
          )}
        >
          <button type="button">HiOOO!!!</button>
        </ConnectedOverlay>
      </div>
    );
  }
};

export const DefaultOpen: Story = {
  render: () => {
    const [visible, setVisible] = useState(true);

    return (
      <div
        style={{
          width: 300,
          padding: 50,
          height: 300,
          border: 'solid 1px red'
        }}
      >
        <ConnectedOverlay
          open={visible}
          onOpen={() => setVisible(true)}
          onClose={() => setVisible(false)}
          content={() => (
            <div
              style={{
                background: 'black',
                padding: 15
              }}
            >
              <h1>Hello</h1>
            </div>
          )}
        >
          <button type="button">HiOOO!!!</button>
        </ConnectedOverlay>
      </div>
    );
  }
};

const Tooltip = ({ children, content }) => {
  const timeout = React.useRef<any>();
  const [open, setOpen] = React.useState(false);

  return (
    <ConnectedOverlay
      trigger="hover"
      placement="top"
      style={{
        pointerEvents: 'none'
      }}
      open={open}
      content={() => (
        <motion.div
          style={{
            padding: 5,
            background: 'rgba(0, 0, 0, .5)',
            color: 'white',
            textAlign: 'center',
            borderRadius: 5
          }}
          initial={{ opacity: 0, scale: 0.3 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.3 }}
        >
          {content}
        </motion.div>
      )}
      onOpen={() => {
        clearTimeout(timeout.current);
        setOpen(true);
      }}
      onClose={() => {
        clearTimeout(timeout.current);
        timeout.current = setTimeout(() => setOpen(false), 100);
      }}
    >
      {children}
    </ConnectedOverlay>
  );
};

export const TooltipExample: Story = {
  render: () => (
    <div
      style={{
        width: 300,
        padding: 50,
        height: 300,
        border: 'solid 1px red'
      }}
    >
      <Tooltip content="Hello 1">
        <span style={{ padding: 10, background: 'blue' }}>Hover Me</span>
      </Tooltip>
      <br />
      <br />
      <br />
      <Tooltip content="Hello 2">
        <span style={{ padding: 10, background: 'blue' }}>Hover Me Too</span>
      </Tooltip>
    </div>
  )
};

const Menu = ({ children, open, reference, onClose }: any) => (
  <ConnectedOverlay
    trigger="click"
    placement="bottom-start"
    reference={reference}
    open={open}
    content={() => (
      <motion.div
        style={{
          padding: '5px 20px 5px 0',
          background: 'rgba(0, 0, 0, .5)',
          color: 'white',
          borderRadius: 5
        }}
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -10 }}
      >
        {children}
      </motion.div>
    )}
    onClose={onClose}
  />
);

export const MenuExample: Story = {
  render: () => {
    const buttonRef = useRef<any>(null);
    const [menuOpen, setMenuOpen] = useState<boolean>(false);

    return (
      <div
        style={{
          width: 150,
          padding: 50,
          height: 150,
          border: 'solid 1px red'
        }}
      >
        <button
          type="button"
          ref={buttonRef}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          Open
        </button>
        <Menu
          reference={buttonRef}
          open={menuOpen}
          onClose={() => setMenuOpen(false)}
        >
          <ul>
            <li onClick={() => setMenuOpen(false)}>One</li>
            <li onClick={() => setMenuOpen(false)}>Two</li>
            <li onClick={() => setMenuOpen(false)}>Three</li>
          </ul>
        </Menu>
      </div>
    );
  }
};

export const MenuInMenuExample: Story = {
  render: () => {
    const buttonRef = useRef<any>(null);
    const buttonInternalRef = useRef<any>(null);
    const [menuOpen, setMenuOpen] = useState<boolean>(false);
    const [menuSecondaryOpen, setMenuSecondaryOpen] = useState<boolean>(false);

    return (
      <div
        style={{
          width: 150,
          padding: 50,
          height: 150,
          border: 'solid 1px red'
        }}
      >
        <button
          type="button"
          ref={buttonRef}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          Open
        </button>
        <Menu
          reference={buttonRef}
          open={menuOpen}
          onClose={() => setMenuOpen(false)}
        >
          <h2>Menu In Menu</h2>
          <p>Click outside to close</p>
          <button
            type="button"
            ref={buttonInternalRef}
            onClick={() => setMenuSecondaryOpen(!menuSecondaryOpen)}
          >
            Open
          </button>
          <Menu
            reference={buttonInternalRef}
            open={menuSecondaryOpen}
            onClose={() => setMenuSecondaryOpen(false)}
          >
            <ul>
              <li onClick={() => setMenuSecondaryOpen(false)}>One</li>
              <li onClick={() => setMenuSecondaryOpen(false)}>Two</li>
              <li onClick={() => setMenuSecondaryOpen(false)}>Three</li>
            </ul>
          </Menu>
        </Menu>
      </div>
    );
  }
};

const ContextMenu = ({ children, content }) => {
  const timeout = React.useRef<any>();
  const [open, setOpen] = React.useState(false);

  return (
    <ConnectedOverlay
      trigger="contextmenu"
      placement="bottom"
      triggerElement="div"
      open={open}
      content={() => (
        <motion.div
          style={{
            padding: 5,
            background: 'rgba(0, 0, 0, .5)',
            color: 'white',
            borderRadius: 5
          }}
          initial={{ opacity: 0, y: -25 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -25 }}
        >
          {content}
        </motion.div>
      )}
      onOpen={() => {
        clearTimeout(timeout.current);
        setOpen(true);
      }}
      onClose={() => {
        clearTimeout(timeout.current);
        timeout.current = setTimeout(() => setOpen(false), 100);
      }}
    >
      {children}
    </ConnectedOverlay>
  );
};

export const ContextMenuExample: Story = {
  render: () => (
    <div
      style={{
        width: 300,
        padding: 50,
        height: 300,
        border: 'solid 1px red'
      }}
    >
      <ContextMenu
        content={
          <ul>
            <li>Foo</li>
            <li>Bar</li>
            <li>Baz</li>
          </ul>
        }
      >
        <span style={{ padding: 10, background: 'blue' }}>Hi!</span>
      </ContextMenu>
    </div>
  )
};

export default meta;
