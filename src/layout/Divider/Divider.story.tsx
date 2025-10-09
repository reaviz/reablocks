import React from 'react';

import { Divider } from './Divider';

export default {
  title: 'Components/Layout/Divider',
  component: Divider
};

export const Horizontal = () => (
  <>
    Above
    <Divider />
    Below
  </>
);

export const NoMargin = () => (
  <>
    Above
    <Divider disableMargins />
    Below
  </>
);

export const Vertical = () => (
  <div style={{ height: 400, display: 'flex' }}>
    Left
    <Divider orientation="vertical" />
    Right
  </div>
);

export const Variants = () => (
  <div style={{ width: 300 }}>
    Above
    <Divider variant="primary" />
    Middle
    <Divider variant="secondary" />
    Below
  </div>
);
