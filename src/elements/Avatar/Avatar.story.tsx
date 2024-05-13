import React from 'react';
import { Meta } from '@storybook/react';
import { Avatar } from './Avatar';

export default {
  title: 'Components/Elements/Avatar',
  component: Avatar
} as Meta;
const ComponentsBlock = args => (
  <div
    className="bg-panel p-20"
    style={{
      display: 'flex',
      gap: '1em',
      flexDirection: 'column',
      alignItems: 'start'
    }}
  >
    <div
      style={{
        display: 'flex',
        gap: '1em',
        flexDirection: 'row',
        justifyContent: 'start',
        alignItems: 'center'
      }}
    >
      <Avatar {...args} interactable tabIndex={1} />
      <span>Active</span>
    </div>
    <div
      style={{
        display: 'flex',
        gap: '1em',
        flexDirection: 'row',
        justifyContent: 'start',
        alignItems: 'center'
      }}
    >
      <Avatar {...args} disabled />
      <span>Disabled</span>
    </div>
  </div>
);

export const Outline = args => <ComponentsBlock {...args} />;
Outline.args = {
  name: 'John Doe',
  size: 50,
  variant: 'outline'
};

export const Filled = args => <ComponentsBlock {...args} />;
Filled.args = {
  name: 'John Doe',
  size: 50,
  variant: 'filled'
};

export const Colored = args => <ComponentsBlock {...args} />;
Colored.args = {
  name: 'John Doe',
  size: 50,
  variant: 'colored'
};
export const Image = args => <ComponentsBlock {...args} />;
Image.args = {
  src: 'https://goodcode.us/static/austin-d1a2c5249336c31662b8ee6d4e169b2b.jpg',
  size: 50
};

export const Sizes = args => (
  <div style={{ display: 'flex', gap: '1em' }}>
    <Avatar {...args} size={50} />
    <Avatar {...args} size={75} />
    <Avatar {...args} size={100} />
  </div>
);
Sizes.args = {
  src: 'https://goodcode.us/static/austin-d1a2c5249336c31662b8ee6d4e169b2b.jpg'
};
