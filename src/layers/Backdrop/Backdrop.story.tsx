import type { Meta, StoryObj } from '@storybook/react';

import { Backdrop } from './Backdrop';

const meta: Meta<typeof Backdrop> = {
  title: 'Examples/Backdrop',
  component: Backdrop
};

type Story = StoryObj<typeof Backdrop>;

export const Simple: Story = {
  args: {}
};

export default meta;
