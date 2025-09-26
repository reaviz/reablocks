import React from 'react';

import { DotsLoader } from './DotsLoader';

export default {
  title: 'Components/Elements/Loader/Dots',
  component: DotsLoader,
};

export const Simple = () => {
  return <DotsLoader />;
};

export const Sizes = () => (
  <div
    style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      gap: 10,
    }}
  >
    <DotsLoader size="small" />
    <DotsLoader size="medium" />
    <DotsLoader size="large" />
  </div>
);
