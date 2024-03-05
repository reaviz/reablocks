import { Sub } from './Sub';
import React from 'react';

export default {
  title: 'Components/Typography/Sub',
  component: Sub,
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

export const Simple = () => <Sub>Hello world</Sub>;

export const Colors = () => (
  <div style={{ display: 'flex', flexDirection: 'column', gap: 5 }}>
    <Sub>Default</Sub>
    <Sub color="primary">Primary</Sub>
    <Sub color="secondary">Secondary</Sub>
    <Sub color="error">Error</Sub>
    <Sub color="success">Success</Sub>
    <Sub color="warning">Warning</Sub>
    <Sub color="info">Info</Sub>
  </div>
);

export const NoMargins = () => (
  <>
    <Sub disableMargins>Hello world</Sub>
    <Sub disableMargins>Hello world</Sub>
  </>
);

export const Monospace = () => <Sub variant="mono">Hello world</Sub>;
