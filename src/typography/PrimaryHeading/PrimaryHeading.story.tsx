import { PrimaryHeading } from './PrimaryHeading';

export default {
  title: 'Components/Typography/PrimaryHeading',
  component: PrimaryHeading
};

export const Simple = () => <PrimaryHeading>Hello world</PrimaryHeading>;

export const Colors = () => (
  <div style={{ display: 'flex', flexDirection: 'column' }}>
    <PrimaryHeading>Default</PrimaryHeading>
    <PrimaryHeading color="primary">Primary</PrimaryHeading>
    <PrimaryHeading color="secondary">Secondary</PrimaryHeading>
    <PrimaryHeading color="error">Error</PrimaryHeading>
    <PrimaryHeading color="success">Success</PrimaryHeading>
    <PrimaryHeading color="warning">Warning</PrimaryHeading>
    <PrimaryHeading color="info">Info</PrimaryHeading>
  </div>
);

export const NoMargins = () => (
  <>
    <PrimaryHeading disableMargins>Hello world</PrimaryHeading>
    <PrimaryHeading disableMargins>Hello world</PrimaryHeading>
  </>
);

export const Monospace = () => (
  <PrimaryHeading variant="mono">Hello world</PrimaryHeading>
);
