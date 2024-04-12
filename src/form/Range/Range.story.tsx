import { RangeDouble } from './RangeDouble';
import React, { useState } from 'react';
import { RangeSingle } from './RangeSingle';
import { debounce } from 'lodash';

export default {
  title: 'Components/Form/Range',
  component: Range
};

export const Single = () => {
  const [state, setState] = useState<number>(20);
  return (
    <RangeSingle
      onChange={setState}
      min={10}
      max={50}
      value={state}
      style={{ width: 250, marginTop: 30 }}
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
      style={{ width: 250, marginTop: 30 }}
    />
  );
};

export const SingleAlwaysDisplayValue = () => {
  const [state, setState] = useState<number>(20);
  return (
    <RangeSingle
      onChange={setState}
      min={10}
      max={50}
      value={state}
      valueDisplay="always"
      style={{ width: 250, marginTop: 30 }}
    />
  );
};

export const SingleFormatValue = () => {
  const [state, setState] = useState<number>(20);
  return (
    <RangeSingle
      onChange={setState}
      min={10}
      max={50}
      value={state}
      valueDisplay="always"
      valueFormat={value => `${value}%`}
      style={{ width: 250, marginTop: 30 }}
    />
  );
};

export const CustomFloatStep = () => {
  const [state, setState] = useState<number>(3.5);
  return (
    <RangeSingle
      onChange={setState}
      min={0.5}
      max={10}
      step={0.5}
      value={state}
      style={{ width: 250, marginTop: 30 }}
    />
  );
};

export const CustomIntegerStep = () => {
  const [state, setState] = useState<number>(75);
  return (
    <RangeSingle
      onChange={setState}
      min={50}
      max={250}
      step={25}
      value={state}
      style={{ width: 250, marginTop: 30 }}
    />
  );
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

export const DoubleFloatStep = () => {
  const [state, setState] = useState<[number, number]>([5, 10]);

  const debounceRange = () =>
    debounce((min: number, max: number) => setState([min, max]));

  return (
    <RangeDouble
      onChange={debounceRange}
      min={0.5}
      max={12.5}
      step={0.1}
      value={state}
      style={{ width: 250 }}
    />
  );
};

export const DoubleIntegerStep = () => {
  const [state, setState] = useState<[number, number]>([20, 40]);

  const debounceRange = () =>
    debounce((min: number, max: number) => setState([min, max]));

  return (
    <RangeDouble
      onChange={debounceRange}
      min={10}
      max={50}
      step={5}
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
