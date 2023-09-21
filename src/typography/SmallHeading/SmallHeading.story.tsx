import { SmallHeading } from './SmallHeading';

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

export const Weights = () => (
  <>
    <SmallHeading>Default - Hello world</SmallHeading>
    <SmallHeading fontWeight={100}>100 - Hello world</SmallHeading>
    <SmallHeading fontWeight={200}>200 - Hello world</SmallHeading>
    <SmallHeading fontWeight={300}>300 - Hello world</SmallHeading>
    <SmallHeading fontWeight={400}>400 - Hello world</SmallHeading>
    <SmallHeading fontWeight={500}>500 - Hello world</SmallHeading>
    <SmallHeading fontWeight={600}>600 - Hello world</SmallHeading>
    <SmallHeading fontWeight={700}>700 - Hello world</SmallHeading>
    <SmallHeading fontWeight={800}>800 - Hello world</SmallHeading>
    <SmallHeading fontWeight={900}>900 - Hello world</SmallHeading>
  </>
);
