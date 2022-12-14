import React, { useState } from 'react';
import { Chip } from './Chip';

export default {
  title: 'Components/Elements/Chip',
  component: Chip
};

export const Colors = () => (
  <div>
    <Chip>Default</Chip>
    <Chip color="primary">Primary</Chip>
    <Chip color="secondary">Secondary</Chip>
    <Chip color="error">Error</Chip>
    <Chip color="warning">Warning</Chip>
    <Chip color="info">Info</Chip>
  </div>
);

export const Variants = () => (
  <>
    <Chip variant="filled">Filled</Chip>
    <Chip variant="outline">Outline</Chip>
  </>
);

export const Sizes = () => (
  <div>
    <Chip size="small">Small</Chip>
    <Chip>Medium</Chip>
    <Chip size="large">Large</Chip>
  </div>
);
