import React from 'react';
import { Spacer } from './Spacer';

export default {
  title: 'Components/Layout/Spacer',
  components: Spacer
};

export const Simple = () => (
  <Spacer>
    <button>Button</button>
    <div>div</div>
    <span>span</span>
  </Spacer>
);

export const Dense = () => (
  <Spacer dense>
    <button>Button</button>
    <div>div</div>
    <span>span</span>
  </Spacer>
);
