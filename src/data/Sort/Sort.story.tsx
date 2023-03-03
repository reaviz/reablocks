import React, { useState } from 'react';
import { Sort } from './Sort';
import { SortDirection } from './utils';

export default {
  title: 'Components/Data/Sort',
  component: Sort
};

export const Simple = () => {
  const [dir, setDir] = useState<SortDirection>('asc');
  return (
    <Sort direction={dir} onSort={setDir}>
      Age
    </Sort>
  );
};

export const Disabled = () => {
  const [dir, setDir] = useState<SortDirection>('asc');
  return (
    <Sort direction={dir} disabled onSort={setDir}>
      Age
    </Sort>
  );
};
