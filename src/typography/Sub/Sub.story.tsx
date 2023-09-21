import { Sub } from './Sub';

export default {
  title: 'Components/Typography/Sub',
  component: Sub
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

export const Weights = () => (
  <>
    <Sub>Default - Hello world</Sub>
    <Sub fontWeight={100}>100 - Hello world</Sub>
    <Sub fontWeight={200}>200 - Hello world</Sub>
    <Sub fontWeight={300}>300 - Hello world</Sub>
    <Sub fontWeight={400}>400 - Hello world</Sub>
    <Sub fontWeight={500}>500 - Hello world</Sub>
    <Sub fontWeight={600}>600 - Hello world</Sub>
    <Sub fontWeight={700}>700 - Hello world</Sub>
    <Sub fontWeight={800}>800 - Hello world</Sub>
    <Sub fontWeight={900}>900 - Hello world</Sub>
  </>
);
