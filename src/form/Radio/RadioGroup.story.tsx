import React, { useState } from 'react';
import { RadioGroup } from './RadioGroup';
import { Radio } from './Radio';

export default {
  title: 'Components/Form/Radio/Group',
  component: RadioGroup
};

export const Simple = () => {
  const defaultValue = 'blue';
  const [selectedColor, setSelectedColor] = useState<string>(defaultValue);

  return (
    <>
      <RadioGroup onChange={setSelectedColor} selectedValue={defaultValue}>
        <Radio
          value="red"
          onChange={() =>
            console.log('Optionally do something else as well onRedSelected ')
          }
          label="Red"
        />
        <Radio
          value="blue"
          onChange={() =>
            console.log('Optionally do something else as well onBlueSelected ')
          }
          label="Blue"
        />
        <Radio
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
