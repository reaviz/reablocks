import React, { useState } from 'react';
import { DebouncedInput } from './DebouncedInput';

export default {
  title: 'Components/Form/Debounced Input',
  component: DebouncedInput
};

export const Basic = () => {
  const [value, setValue] = useState('');
  return (
    <>
      <DebouncedInput value={value} onValueChange={setValue} />
      <br />
      Value: {value}
    </>
  );
};
