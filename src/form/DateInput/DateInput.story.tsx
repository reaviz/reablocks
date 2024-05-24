import { DateFormat } from '@/data';
import { Stack } from '@/layout';
import { useState } from 'react';
import { DateInput } from './DateInput';

export default {
  title: 'Components/Form/Date Input',
  component: DateInput
};

export const Simple = () => {
  const [date, setDate] = useState<Date>(new Date());

  return (
    <Stack direction="column">
      <DateFormat date={date} format="MM/dd/yyyy" />
      <DateInput value={date} onChange={setDate} />
    </Stack>
  );
};

export const Error = () => {
  const [date, setDate] = useState<Date>(new Date());

  return <DateInput error value={date} onChange={setDate} />;
};

export const Disabled = () => {
  const [date, setDate] = useState<Date>(new Date());

  return <DateInput disabled value={date} onChange={setDate} />;
};

export const Range = () => {
  const [date, setDate] = useState<[Date, Date]>([new Date(), new Date()]);

  return (
    <Stack className="w-[300px]" direction="column">
      <Stack>
        <DateFormat date={date[0]} format="MM/dd/yyyy" /> -{' '}
        <DateFormat date={date[1]} format="MM/dd/yyyy" />
      </Stack>
      <DateInput
        fullWidth
        isRange
        value={date}
        onChange={(value: [Date, Date]) => setDate(value)}
      />
    </Stack>
  );
};
