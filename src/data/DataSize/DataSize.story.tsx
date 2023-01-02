import { Fragment } from 'react';
import { DataSize } from './DataSize';

export default {
  title: 'Components/Data/Data Size',
  component: DataSize
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
  </Fragment>
);

export const Empty = () => (
  <Fragment>
    <DataSize value={null} />
    <br />
    <DataSize value={undefined} />
    <br />
    <DataSize value={null} emptyValue="Nothing to see" />
    <br />
  </Fragment>
);
