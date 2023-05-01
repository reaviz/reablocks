import { SecondaryHeading } from './SecondaryHeading';

export default {
  title: 'Components/Typography/SecondaryHeading',
  component: SecondaryHeading
};

export const Simple = () => <SecondaryHeading>Hello world</SecondaryHeading>;

export const Colors = () => (
  <div style={{ display: 'flex', flexDirection: 'column' }}>
    <SecondaryHeading>Default</SecondaryHeading>
    <SecondaryHeading color="primary">Primary</SecondaryHeading>
    <SecondaryHeading color="secondary">Secondary</SecondaryHeading>
    <SecondaryHeading color="error">Error</SecondaryHeading>
    <SecondaryHeading color="success">Success</SecondaryHeading>
    <SecondaryHeading color="warning">Warning</SecondaryHeading>
    <SecondaryHeading color="info">Info</SecondaryHeading>
  </div>
);

export const NoMargins = () => (
  <>
    <SecondaryHeading disableMargins>Hello world</SecondaryHeading>
    <SecondaryHeading disableMargins>Hello world</SecondaryHeading>
  </>
);

export const Monospace = () => (
  <SecondaryHeading variant="mono">Hello world</SecondaryHeading>
);
