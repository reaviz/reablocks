import React, { Fragment, useState } from 'react';
import { Radio } from './Radio';
import { Stack } from '@/layout';

export default {
  title: 'Components/Form/Radio',
  component: Radio
};

export const Simple = () => {
  const [state, setState] = useState(true);
  return <Radio checked={state} label="Label" onChange={setState} />;
};

export const Disabled = () => {
  const [state, setState] = useState(true);
  return (
    <Stack>
      <Radio disabled checked={false} label="Disabled" />
      <Radio disabled checked={state} onChange={setState} label="Disabled" />
    </Stack>
  );
};

export const Sizes = () => {
  const [selectedSize, setSelectedSize] = useState('small');

  const handleSizeChange = size => {
    setSelectedSize(size);
  };

  return (
    <Fragment>
      <Radio
        checked={selectedSize === 'small'}
        onChange={() => handleSizeChange('small')}
        size="small"
        label="Small"
      />
      <br />
      <Radio
        checked={selectedSize === 'medium'}
        onChange={() => handleSizeChange('medium')}
        size="medium"
        label="Medium"
      />
      <br />
      <Radio
        checked={selectedSize === 'large'}
        onChange={() => handleSizeChange('large')}
        size="large"
        label="Large"
      />
    </Fragment>
  );
};
