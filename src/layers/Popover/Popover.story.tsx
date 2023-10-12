import React from 'react';
import { Popover } from './Popover';

export default {
  title: 'Components/Layers/Popover',
  component: Popover
};

export const Simple = () => (
  <div style={{ textAlign: 'center', width: '100%', margin: '50px' }}>
    <Popover
      content={
        <div style={{ textAlign: 'center' }}>
          <h3>WHATS UP????!</h3>
          <button type="button">Done</button>
        </div>
      }
    >
      <button type="button">Click me</button>
    </Popover>
  </div>
);
