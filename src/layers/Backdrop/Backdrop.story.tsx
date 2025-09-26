import type { Meta, StoryObj } from '@storybook/react';

import { Backdrop } from './Backdrop';

const meta: Meta<typeof Backdrop> = {
  title: 'Components/Layers/Backdrop',
  component: Backdrop,
};

type Story = StoryObj<typeof Backdrop>;

export const Simple: Story = {
  args: {},
};

export default meta;
