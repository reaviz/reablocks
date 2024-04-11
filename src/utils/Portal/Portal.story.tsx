import { Meta, StoryObj } from '@storybook/react';
import React, { useState, useRef } from 'react';
import { Portal } from './Portal';

const meta: Meta<typeof Portal> = {
  title: 'Examples/Portal',
  component: Portal
};

type Story = StoryObj<typeof Portal>;

export const Simple: Story = {
  render: () => {
    const [show, setShow] = useState<boolean>(true);
    const countRef = useRef(0);

    function remount() {
      setTimeout(() => {
        console.log('mounting', show);
        setShow(s => !s);
        countRef.current++;

        if (countRef.current < 50) {
          remount();
        } else {
          countRef.current = 0;
        }
      }, 100);
    }

    return (
      <div>
        <button onClick={() => setShow(true)}>Mount</button>
        <button onClick={() => setShow(false)}>Unmount</button>
        <button onClick={() => remount()}>Remount Fast</button>
        {show && (
          <div
            style={{
              width: 225,
              height: 225,
              border: 'solid 2px red',
              padding: 50,
              position: 'relative',
              overflow: 'hidden'
            }}
          >
            Inside
            <Portal>Outside</Portal>
          </div>
        )}
      </div>
    );
  }
};

export default meta;
