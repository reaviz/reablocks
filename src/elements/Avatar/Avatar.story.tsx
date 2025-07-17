import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import { Avatar } from './Avatar';

export default {
  title: 'Components/Elements/Avatar',
  component: Avatar
} satisfies Meta<typeof Avatar>;

export const Simple: StoryObj<typeof Avatar> = {
  args: {
    name: 'John Doe',
    size: 50,
    rounded: false
  }
};

export const Outline: StoryObj<typeof Avatar> = {
  args: {
    name: 'John Doe',
    size: 50,
    rounded: false,
    variant: 'outline'
  }
};

export const RoundedWithImage: StoryObj<typeof Avatar> = {
  args: {
    src: 'https://i.pravatar.cc/128',
    size: 50,
    rounded: true
  }
};

export const LargeRounded: StoryObj<typeof Avatar> = {
  args: {
    name: 'John Doe',
    size: 100,
    rounded: true
  }
};

export const MultipleAvatars: StoryObj<typeof Avatar> = {
  render: args => (
    <div style={{ display: 'flex', gap: '1em' }}>
      <Avatar {...args} name="Alice" />
      <Avatar {...args} name="Bob Meyer Bogger" />
      <Avatar {...args} name="Charlie" onClick={() => console.log('here')} />
    </div>
  ),
  args: {
    size: 50,
    rounded: true
  }
};
