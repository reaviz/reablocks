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
