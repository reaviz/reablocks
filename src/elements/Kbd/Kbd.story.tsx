import React from 'react';

import { Kbd } from './Kbd';

export default {
  title: 'Components/Elements/Kbd',
  component: Kbd,
};

export const Basic = () => (
  <>
    <Kbd keycode="mod+shift+k" />
  </>
);
