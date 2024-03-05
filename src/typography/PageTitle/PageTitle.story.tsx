import { PageTitle } from './PageTitle';
import React from 'react';

export default {
  title: 'Components/Typography/PageTitle',
  component: PageTitle,
  decorators: [
    (Story, context) => (
      <div
        style={{
          color: context.globals.theme === 'light' ? 'black' : 'inherit'
        }}
      >
        <Story />
      </div>
    )
  ]
};

export const Simple = () => <PageTitle>Hello world</PageTitle>;

export const Colors = () => (
  <div style={{ display: 'flex', flexDirection: 'column' }}>
    <PageTitle>Default</PageTitle>
    <PageTitle color="primary">Primary</PageTitle>
    <PageTitle color="secondary">Secondary</PageTitle>
    <PageTitle color="error">Error</PageTitle>
    <PageTitle color="success">Success</PageTitle>
    <PageTitle color="warning">Warning</PageTitle>
    <PageTitle color="info">Info</PageTitle>
  </div>
);

export const NoMargins = () => (
  <>
    <PageTitle disableMargins>Hello world</PageTitle>
    <PageTitle disableMargins>Hello world</PageTitle>
  </>
);

export const Monospace = () => (
  <PageTitle variant="mono">Hello world</PageTitle>
);
