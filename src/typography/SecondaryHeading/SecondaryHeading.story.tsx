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

export const Weights = () => (
  <>
    <SecondaryHeading>Default - Hello world</SecondaryHeading>
    <SecondaryHeading fontWeight={100}>100 - Hello world</SecondaryHeading>
    <SecondaryHeading fontWeight={200}>200 - Hello world</SecondaryHeading>
    <SecondaryHeading fontWeight={300}>300 - Hello world</SecondaryHeading>
    <SecondaryHeading fontWeight={400}>400 - Hello world</SecondaryHeading>
    <SecondaryHeading fontWeight={500}>500 - Hello world</SecondaryHeading>
    <SecondaryHeading fontWeight={600}>600 - Hello world</SecondaryHeading>
    <SecondaryHeading fontWeight={700}>700 - Hello world</SecondaryHeading>
    <SecondaryHeading fontWeight={800}>800 - Hello world</SecondaryHeading>
    <SecondaryHeading fontWeight={900}>900 - Hello world</SecondaryHeading>
  </>
);
