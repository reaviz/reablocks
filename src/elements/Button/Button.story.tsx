import { Button } from './Button';

export default {
  title: 'Components/Elements/Button',
  component: Button
};

export const Variants = () => (
  <div style={{ display: 'flex', gap: 10 }}>
    <Button variant="filled">Filled</Button>
    <Button variant="outline">Outline</Button>
    <Button variant="text">Text</Button>
  </div>
);

export const Colors = () => (
  <div style={{ display: 'flex', gap: 10 }}>
    <Button>Default</Button>
    <Button color="primary">Primary</Button>
    <Button color="secondary">Secondary</Button>
    <Button color="success">Success</Button>
    <Button color="warning">Warning</Button>
    <Button color="error">Error</Button>
    <Button disabled>Disabled</Button>
  </div>
);

export const Sizes = () => (
  <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
    <Button size="small">Small</Button>
    <Button size="medium">Medium</Button>
    <Button size="large">Large</Button>
  </div>
);
