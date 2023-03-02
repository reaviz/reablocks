import { RangeDouble } from './RangeDouble';
import React, { useState } from 'react';
import { RangeSingle } from './RangeSingle';
import { debounce } from 'lodash';

export default {
  title: 'Components/Form/Range',
  component: Range
};

export const Double = () => {
  const [state, setState] = useState<[number, number]>([20, 40]);

  const debounceRange = () =>
    debounce((min: number, max: number) => setState([min, max]));

  return (
    <RangeDouble
      onChange={debounceRange}
      min={10}
      max={50}
      value={state}
      style={{ width: 250 }}
    />
  );
};

export const DoubleDisabled = () => {
  const [state, setState] = useState<[number, number]>([20, 40]);
  return (
    <RangeDouble
      onChange={setState}
      min={10}
      max={50}
      value={state}
      disabled
      style={{ width: 250 }}
    />
  );
};

export const Single = () => {
  const [state, setState] = useState<number>(20);
  return (
    <RangeSingle
      onChange={setState}
      min={10}
      max={50}
      value={state}
      style={{ width: 250 }}
    />
  );
};

export const SingleDisabled = () => {
  const [state, setState] = useState<number>(20);
  return (
    <RangeSingle
      onChange={setState}
      min={10}
      max={50}
      value={state}
      disabled
      style={{ width: 250 }}
    />
  );
};
