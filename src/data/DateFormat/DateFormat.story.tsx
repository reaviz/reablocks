import React from 'react';

import { DateFormat } from './DateFormat';

export default {
  title: 'Components/Data/DateFormat',
  component: DateFormat
};

export const Simple = () => <DateFormat date={new Date()} />;

export const Empty = () => <DateFormat date={null} />;

export const Relative = () => {
  const currentDate = new Date();
  const oldDate = new Date(currentDate);
  oldDate.setDate(currentDate.getDate() - 93);
  return <DateFormat date={oldDate} fromNow />;
};

export const Toggling = () => (
  <DateFormat date={new Date()} fromNow allowToggle />
);

export const StringDate = () => <DateFormat date="2022-05-25T16:03:12.2085" />;
