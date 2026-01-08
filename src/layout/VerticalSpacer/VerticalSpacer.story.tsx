import React from 'react';

import { VerticalSpacer } from './VerticalSpacer';

export default {
  title: 'Components/Layout/Vertical Spacer',
  component: VerticalSpacer
};

export const Simple = () => (
  <div style={{ border: 'solid 1px red', padding: 20 }}>
    <div style={{ borderBottom: 'solid 1px blue' }}>Before</div>
    <VerticalSpacer space="xl" />
    <div style={{ borderTop: 'solid 1px blue' }}>After</div>
  </div>
);
