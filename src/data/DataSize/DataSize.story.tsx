import React, { Fragment } from 'react';
import { DataSize } from './DataSize';

export default {
  title: 'Components/Data/Data Size',
  component: DataSize,
  decorators: [
    (Story, context) => (
      <div
        style={{
          color: context.globals.theme === 'light' ? 'black' : 'inherit'
        }}
      >
        <Story />
      </div>
    )
  ]
};

export const Simple = () => (
  <Fragment>
    <DataSize value="99" />
    <br />
    <DataSize value="4500" />
    <br />
    <DataSize value="34343233" />
    <br />
    <DataSize value="434334434123" />
    <br />
    <DataSize value={324344535345232} />
    <br />
    <DataSize value={324344535345232482} />
    <br />
    <DataSize value={324344535345232482281} />
    <br />
    <DataSize value={32434453534523248228135} />
    <br />
    <DataSize value={32434453534523248228123412} />
  </Fragment>
);

export const CustomScale = () => {
  const scale = ['b', 'kb', 'mb', 'gb', 'tb', 'pb', 'eb', 'zb', 'yb'];
  return (
    <Fragment>
      <DataSize value="99" scale={scale} />
      <br />
      <DataSize value="4500" scale={scale} />
      <br />
      <DataSize value="34343233" scale={scale} />
      <br />
      <DataSize value="434334434123" scale={scale} />
      <br />
      <DataSize value={324344535345232} scale={scale} />
      <br />
      <DataSize value={324344535345232482} scale={scale} />
      <br />
      <DataSize value={324344535345232482281} scale={scale} />
      <br />
      <DataSize value={32434453534523248228135} scale={scale} />
      <br />
      <DataSize value={32434453534523248228123412} scale={scale} />
    </Fragment>
  );
};

export const CustomDecimals = () => (
  <Fragment>
    <DataSize value={34343233} decimals={0} />
    <br />
    <DataSize value={34343233} decimals={5} />
  </Fragment>
);

export const Empty = () => (
  <Fragment>
    <DataSize value={undefined} />
    <br />
    <DataSize value={null} emptyValue="Nothing to see" />
    <br />
  </Fragment>
);
