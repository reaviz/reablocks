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
      <DateFormat date={date} />
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
