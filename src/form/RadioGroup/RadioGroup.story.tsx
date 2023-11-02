import React, { useState } from 'react';
import { RadioGroup } from './RadioGroup';
import { Radio } from '../Radio/Radio';

export default {
  title: 'Components/Form/RadioGroup',
  component: RadioGroup
};

export const Vertical = () => {
  const defaultValue = 'blue';
  const [selectedColor, setSelectedColor] = useState<string>(defaultValue);

  return (
    <>
      <RadioGroup onChange={setSelectedColor} defaultValue={defaultValue}>
        <Radio
          checked={selectedColor === 'red'}
          value="red"
          onChange={() =>
            console.log('Optionally do something else as well onRedSelected ')
          }
          label="Red"
        />
        <Radio
          checked={selectedColor === 'blue'}
          value="blue"
          onChange={() =>
            console.log('Optionally do something else as well onBlueSelected ')
          }
          label="Blue"
        />
        <Radio
          checked={selectedColor === 'green'}
          value="green"
          onChange={() =>
            console.log('Optionally do something else as well onGreenSelected ')
          }
          label="Green"
        />
      </RadioGroup>
      <br />
      <div>Selected Color: {selectedColor}</div>
    </>
  );
};

export const Horizontal = () => {
  const defaultValue = 'red';
  const [selectedColor, setSelectedColor] = useState<string>(defaultValue);

  return (
    <>
      <RadioGroup
        onChange={setSelectedColor}
        defaultValue={defaultValue}
        direction="row"
      >
        <Radio
          checked={selectedColor === 'red'}
          value="red"
          onChange={() =>
            console.log('Optionally do something else as well onRedSelected ')
          }
          label="Red"
        />
        <Radio
          checked={selectedColor === 'blue'}
          value="blue"
          onChange={() =>
            console.log('Optionally do something else as well onBlueSelected ')
          }
          label="Blue"
        />
        <Radio
          checked={selectedColor === 'green'}
          value="green"
          onChange={() =>
            console.log('Optionally do something else as well onGreenSelected ')
          }
          label="Green"
        />
      </RadioGroup>
      <br />
      <div>Selected Color: {selectedColor}</div>
    </>
  );
};
