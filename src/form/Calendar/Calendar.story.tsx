import React, { useState } from 'react';
import { Card } from '../../layout/Card';
import { Calendar } from './Calendar';
import { add, sub } from 'date-fns';

export default {
  title: 'Components/Form/Calendar',
  component: Calendar
};

export const Simple = () => {
  const [selection, setSelection] = useState<Date | null>(null);
  return (
    <>
      <Card>
        <Calendar
          value={selection}
          onChange={(date: Date) => setSelection(date)}
        />
      </Card>
      <br />
      {selection?.toLocaleDateString() ?? 'No date selected'}
    </>
  );
};

export const Disabled = () => {
  const [selection, setSelection] = useState<Date | null>(new Date());
  return (
    <Card>
      <Calendar
        value={selection}
        disabled
        onChange={(date: Date) => setSelection(date)}
      />
    </Card>
  );
};

export const DefaultValue = () => {
  const [selection, setSelection] = useState<Date | null>(new Date());
  return (
    <>
      <Card>
        <Calendar
          value={selection}
          onChange={(date: Date) => setSelection(date)}
        />
      </Card>
      <br />
      {selection?.toLocaleDateString() ?? 'No date selected'}
    </>
  );
};

const prevMonth = sub(new Date(), { months: 1 });
const nextMonth = add(new Date(), { months: 1 });

export const MinMax = () => {
  const [selection, setSelection] = useState<Date | null>(null);
  return (
    <>
      <Card>
        <Calendar
          value={selection}
          min={prevMonth}
          max={nextMonth}
          onChange={(date: Date) => setSelection(date)}
        />
      </Card>
      <br />
      {selection?.toLocaleDateString() ?? 'No date selected'}
    </>
  );
};

export const Range = () => {
  const [minValue, setMinValue] = useState<Date | null>(null);
  const [maxValue, setMaxValue] = useState<Date | null>(null);

  return (
    <Card>
      <Calendar
        minValue={minValue}
        maxValue={maxValue}
        isRange
        onChange={([min, max]: [Date, Date]) => {
          setMinValue(min);
          setMaxValue(max);
        }}
      />
    </Card>
  );
};
