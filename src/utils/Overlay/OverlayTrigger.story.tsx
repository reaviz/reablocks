import type { Meta, StoryObj } from '@storybook/react';

import { OverlayTrigger } from './OverlayTrigger';

const meta: Meta<typeof OverlayTrigger> = {
  title: 'Components/Utils/Overlay/Overlay Trigger',
  component: OverlayTrigger,
};

type Story = StoryObj<typeof OverlayTrigger>;

export const Simple: Story = {
  args: {},
};

export default meta;
