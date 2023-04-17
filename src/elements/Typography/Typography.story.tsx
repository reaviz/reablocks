import React from 'react';
import { Meta, Story } from '@storybook/react';
import { Title, Subtitle, Text } from './Typography';

export default {
  title: 'Typography',
  component: Title
} as Meta;

const Template: Story = args => <Title {...args} />;

export const DefaultTitle = Template.bind({});
DefaultTitle.args = {
  children: 'Hello, world!'
};

export const PrimaryTitle = Template.bind({});
PrimaryTitle.args = {
  children: 'Hello, world!',
  color: 'primary'
};

export const SecondaryTitle = Template.bind({});
SecondaryTitle.args = {
  children: 'Hello, world!',
  color: 'secondary'
};

export const DefaultSubtitle = Template.bind({});
DefaultSubtitle.args = {
  children: 'Hello, world!'
};

export const PrimarySubtitle = Template.bind({});
PrimarySubtitle.args = {
  children: 'Hello, world!',
  color: 'primary'
};

export const SecondarySubtitle = Template.bind({});
SecondarySubtitle.args = {
  children: 'Hello, world!',
  color: 'secondary'
};

export const DefaultText = Template.bind({});
DefaultText.args = {
  children: 'Hello, world!'
};

export const PrimaryText = Template.bind({});
PrimaryText.args = {
  children: 'Hello, world!',
  color: 'primary'
};

export const SecondaryText = Template.bind({});
SecondaryText.args = {
  children: 'Hello, world!',
  color: 'secondary'
};
