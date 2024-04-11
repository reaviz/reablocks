import { Meta, StoryObj } from '@storybook/react';
import { OverlayTrigger } from 'Overlay/OverlayTrigger';

const meta: Meta<typeof OverlayTrigger> = {
  title: 'Examples/Overlay/Overlay Trigger',
  component: OverlayTrigger
};

type Story = StoryObj<typeof OverlayTrigger>;

export const Simple: Story = {
  args: {}
};

export default meta;
