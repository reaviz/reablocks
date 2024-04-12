import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import { OverlayPortal } from './OverlayPortal';

const meta: Meta<typeof OverlayPortal> = {
  title: 'Examples/Overlay/Overlay Portal',
  component: OverlayPortal
};

type Story = StoryObj<typeof OverlayPortal>;

export const Simple: Story = {
  render: () => (
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
        Hello
        <OverlayPortal>
          {({ overlayIndex, portalIndex, backdropIndex }) => (
            <div>
              Hi - {overlayIndex} - {portalIndex} - {backdropIndex}
            </div>
          )}
        </OverlayPortal>
      </div>
    </div>
  )
};

export default meta;
