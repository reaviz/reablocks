import React, { useState } from 'react';
import { DebouncedInput } from './DebouncedInput';

export default {
  title: 'Components/Form/Debounced Input',
  component: DebouncedInput
};

export const Basic = () => {
  const [instantInput, setInstantInput] = useState('');
  const [slowInput, setSlowInput] = useState('');
  return (
    <>
      <DebouncedInput value={instantInput} onValueChange={setInstantInput} />
      Instant input value: {instantInput}
      <br />
      <DebouncedInput
        value={slowInput}
        onValueChange={setSlowInput}
        debounce={500}
      />
      Delayed input value: {slowInput}
    </>
  );
};
