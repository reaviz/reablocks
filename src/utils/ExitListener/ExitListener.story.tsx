import React from 'react';
import { useExitListener } from './useExitListener';
import { useRef, useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta = {
  title: 'Components/Utils/Exit Listener'
};

type Story = StoryObj;

export const Simple: Story = {
  render: () => {
    const ref = useRef(null);
    const [visible, setVisible] = useState(false);

    useExitListener({
      ref,
      onClickOutside: () => setVisible(false),
      onEscape: () => setVisible(false)
    });

    return (
      <div style={{ border: 'solid 1px red', padding: 50 }}>
        Outside
        <div style={{ padding: 50, width: 300 }}>
          <div style={{ padding: 25, border: '1px solid #000' }} ref={ref}>
            <button onClick={() => setVisible(true)}>Click me</button>
            {visible && (
              <div style={{ padding: 20, border: 'solid 1px blue' }}>
                Clicked
              </div>
            )}
          </div>
        </div>
      </div>
    );
  }
};

export default meta;
