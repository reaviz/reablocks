import { SmallHeading } from './SmallHeading';
import React from 'react';

export default {
  title: 'Components/Typography/SmallHeading',
  component: SmallHeading
};

export const Simple = () => <SmallHeading>Hello world</SmallHeading>;

export const Colors = () => (
  <div style={{ display: 'flex', flexDirection: 'column' }}>
    <SmallHeading>Default</SmallHeading>
    <SmallHeading color="primary">Primary</SmallHeading>
    <SmallHeading color="secondary">Secondary</SmallHeading>
    <SmallHeading color="error">Error</SmallHeading>
    <SmallHeading color="success">Success</SmallHeading>
    <SmallHeading color="warning">Warning</SmallHeading>
    <SmallHeading color="info">Info</SmallHeading>
  </div>
);

export const NoMargins = () => (
  <>
    <SmallHeading disableMargins>Hello world</SmallHeading>
    <SmallHeading disableMargins>Hello world</SmallHeading>
  </>
);

export const Monospace = () => (
  <SmallHeading variant="mono">Hello world</SmallHeading>
);
