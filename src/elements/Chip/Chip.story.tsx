import { useState } from 'react';
import { Chip } from './Chip';

export default {
  title: 'Components/Elements/Chip',
  component: Chip
};

export const Colors = () => (
  <div style={{ display: 'flex', gap: 10 }}>
    <Chip>Default</Chip>
    <Chip color="primary">Primary</Chip>
    <Chip color="secondary">Secondary</Chip>
    <Chip color="error">Error</Chip>
    <Chip color="success">Warning</Chip>
    <Chip color="warning">Warning</Chip>
    <Chip color="info">Info</Chip>
  </div>
);

export const Sizes = () => (
  <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
    <Chip size="small">Small</Chip>
    <Chip>Medium</Chip>
    <Chip size="large">Large</Chip>
  </div>
);

export const Variants = () => (
  <div style={{ display: 'flex', gap: 10 }}>
    <Chip variant="filled">Filled</Chip>
    <Chip variant="outline">Outline</Chip>
  </div>
);

export const Selectable = () => {
  const [state, setState] = useState(false);

  return (
    <Chip onClick={() => setState(!state)} selected={state}>
      Selectable
    </Chip>
  );
};
