import React, { useState } from 'react';
import { Card } from '../../layout/Card';
import { Calendar } from './Calendar';
import { add, addMonths, sub } from 'date-fns';

export default {
  title: 'Components/Form/Calendar',
  component: Calendar
};

export const Simple = () => {
  const [date, setDate] = useState<Date>();

  return (
    <>
      <Card>
        <Calendar value={date} onChange={(date: Date) => setDate(date)} />
        <br />
        {date?.toLocaleDateString() ?? 'No date selected'}
      </Card>
    </>
  );
};

export const Disabled = () => {
  const [date, setDate] = useState<Date>();

  return (
    <Card>
      <Calendar
        value={date}
        disabled
        onChange={(date: Date) => setDate(date)}
      />
    </Card>
  );
};

export const DefaultValue = () => {
  const [date, setDate] = useState<Date>(addMonths(new Date(), 1));

  return (
    <>
      <Card>
        <Calendar value={date} onChange={(date: Date) => setDate(date)} />
        <br />
        {date?.toLocaleDateString() ?? 'No date selected'}
      </Card>
    </>
  );
};

const prevMonth = sub(new Date(), { months: 1 });
const nextMonth = add(new Date(), { months: 1 });

export const MinMax = () => {
  const [date, setDate] = useState<Date>(new Date());

  return (
    <>
      <Card>
        <Calendar
          value={date}
          min={prevMonth}
          max={nextMonth}
          onChange={(date: Date) => setDate(date)}
        />
        <br />
        {date?.toLocaleDateString() ?? 'No date selected'}
      </Card>
    </>
  );
};

export const Range = () => {
  const [range, setRange] = useState<[Date, Date]>();

  return (
    <Card>
      <Calendar
        value={range}
        isRange
        onChange={val => setRange(val as [Date, Date])}
      />
      <br />
      {range
        ? `${range[0]?.toLocaleDateString()}-${range[1]?.toLocaleDateString()}`
        : 'No date selected'}
    </Card>
  );
};
