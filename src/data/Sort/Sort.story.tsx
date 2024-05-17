import React, { useState } from 'react';
import { Sort } from './Sort';
import { SortDirection } from './utils';

export default {
  title: 'Components/Data/Sort',
  component: Sort
};

const NeutralIcon = ({ className }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="50"
    height="50"
    viewBox="0 0 16 16"
    fill="none"
    className={className}
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M8.35107 2.64425L7.99972 2.29724L7.64837 2.64425L4.94837 5.31092L4.59263 5.66227L5.29533 6.37376L5.65107 6.02241L7.49972 4.19658V6.5H7.49962V7L7.49962 11.8034L5.65097 9.97759L5.29523 9.62624L4.59253 10.3377L4.94827 10.6891L7.64827 13.3557L7.99962 13.7028L8.35097 13.3557L11.051 10.6891L11.4067 10.3377L10.704 9.62624L10.3483 9.97759L8.49962 11.8034L8.49962 9.5H8.49972V9V4.19658L10.3484 6.02241L10.7041 6.37376L11.4068 5.66227L11.0511 5.31092L8.35107 2.64425Z"
      fill="#90919C"
    />
  </svg>
);

const CustomIcon = ({ className }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="50"
    height="50"
    viewBox="0 0 16 16"
    fill="none"
    className={className}
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M7.99989 13.2028L4.5928 9.83773L5.2955 9.12624L7.49989 11.3034L7.49989 3L8.49989 3L8.49989 11.3034L10.7043 9.12624L11.407 9.83773L7.99989 13.2028Z"
      fill="#90919C"
    />
  </svg>
);

export const Simple = () => {
  const [dir, setDir] = useState<SortDirection>('asc');
  return (
    <Sort direction={dir} onSort={setDir}>
      Age
    </Sort>
  );
};

export const CustomIcons = () => {
  const [dir, setDir] = useState<SortDirection>('asc');
  return (
    <Sort
      direction={dir}
      onSort={setDir}
      neutralIcon={NeutralIcon}
      icon={CustomIcon}
    >
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
