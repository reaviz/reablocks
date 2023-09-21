import { Text } from './Text';

export default {
  title: 'Components/Typography/Text',
  component: Text
};

export const Simple = () => <Text>Hello world</Text>;

export const Colors = () => (
  <div style={{ display: 'flex', flexDirection: 'column', gap: 5 }}>
    <Text>Default</Text>
    <Text color="primary">Primary</Text>
    <Text color="secondary">Secondary</Text>
    <Text color="error">Error</Text>
    <Text color="success">Success</Text>
    <Text color="warning">Warning</Text>
    <Text color="info">Info</Text>
  </div>
);

export const Monospace = () => <Text variant="mono">Hello world</Text>;

export const Bold = () => <Text fontStyle="bold">Bold</Text>;

export const ExtraBold = () => <Text fontStyle="extraBold">Extra Bold</Text>;

export const Thin = () => <Text fontStyle="thin">Thin</Text>;

export const Italic = () => <Text fontStyle="italic">Italic</Text>;

export const Weights = () => (
  <div style={{ display: 'flex', flexDirection: 'column' }}>
    <Text>Default - Hello world</Text>
    <Text fontWeight={100}>100 - Hello world</Text>
    <Text fontWeight={200}>200 - Hello world</Text>
    <Text fontWeight={300}>300 - Hello world</Text>
    <Text fontWeight={400}>400 - Hello world</Text>
    <Text fontWeight={500}>500 - Hello world</Text>
    <Text fontWeight={600}>600 - Hello world</Text>
    <Text fontWeight={700}>700 - Hello world</Text>
    <Text fontWeight={800}>800 - Hello world</Text>
    <Text fontWeight={900}>900 - Hello world</Text>
  </div>
);
