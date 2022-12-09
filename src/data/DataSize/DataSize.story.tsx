import { Fragment } from 'react';
import { DataSize } from './DataSize';

export default {
  title: 'Data/Data Size',
  component: DataSize
};

export const Simple = () => (
  <Fragment>
    <DataSize size={null} />
    <br />
    <DataSize size="99" />
    <br />
    <DataSize size="4500" />
    <br />
    <DataSize size="34343233" />
    <br />
    <DataSize size="434334434123" />
    <br />
    <DataSize size={324344535345232} />
  </Fragment>
);
