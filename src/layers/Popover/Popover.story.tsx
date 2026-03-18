import React from 'react';
import { Popover } from './Popover';
import { Button } from '../../elements';

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
          <Button type="button">Done</Button>
        </div>
      }
    >
      <Button type="button">Click me</Button>
    </Popover>
  </div>
);
