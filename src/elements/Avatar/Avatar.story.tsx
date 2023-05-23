import React from 'react';
import { Story, Meta } from '@storybook/react';
import { Avatar, AvatarProps } from './Avatar';

export default {
  title: 'Components/Elements/Avatar',
  component: Avatar
} as Meta;

const Template: Story<AvatarProps> = args => <Avatar {...args} />;

export const Default = Template.bind({});
Default.args = {
  name: 'John Doe',
  size: 50,
  rounded: false
};

export const RoundedWithImage = Template.bind({});
RoundedWithImage.args = {
  src: 'https://lh3.googleusercontent.com/a-/AAuE7mAtQVUnylKNBtevO2lU0S-a4X-nu0IwMIyVl0Qe',
  size: 50,
  rounded: true
};

export const LargeRounded = Template.bind({});
LargeRounded.args = {
  name: 'John Doe',
  size: 100,
  rounded: true
};

export const MultipleAvatars: Story<AvatarProps> = args => (
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
