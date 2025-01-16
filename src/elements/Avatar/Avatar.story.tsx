import React from 'react';
import { Meta } from '@storybook/react';
import { Avatar } from './Avatar';

export default {
  title: 'Components/Elements/Avatar',
  component: Avatar
} as Meta;

const Template = args => <Avatar {...args} />;

export const Simple = Template.bind({});
Simple.args = {
  name: 'John Doe',
  size: 50,
  rounded: false
};

export const Outline = Template.bind({});
Outline.args = {
  name: 'John Doe',
  size: 50,
  rounded: false,
  variant: 'outline'
};

export const RoundedWithImage = Template.bind({});
RoundedWithImage.args = {
  src: 'https://i.pravatar.cc/128',
  size: 50,
  rounded: true
};

export const LargeRounded = Template.bind({});
LargeRounded.args = {
  name: 'John Doe',
  size: 100,
  rounded: true
};

export const MultipleAvatars = args => (
  <div style={{ display: 'flex', gap: '1em' }}>
    <Avatar {...args} name="Alice" />
    <Avatar {...args} name="Bob Meyer Bogger" />
    <Avatar {...args} name="Charlie" onClick={() => console.log('here')} />
  </div>
);

MultipleAvatars.args = {
  size: 50,
  rounded: true
};
