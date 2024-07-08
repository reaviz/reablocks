import { useState } from 'react';
import { Card } from '../../layout/Card';
import { Calendar } from './Calendar';
import { CalendarRange } from './CalendarRange';
import { add, addMonths, endOfMonth, startOfMonth, sub } from 'date-fns';
import { Divider } from '../../layout/Divider';
import { Stack } from '../../layout/Stack';

export default {
  title: 'Components/Form/Calendar',
  component: Calendar
};

export const Simple = () => {
  const [date, setDate] = useState<Date>();

  return (
    <Card>
      <Calendar value={date} onChange={(date: Date) => setDate(date)} />
      <Divider />
      <Stack inline={false} justifyContent="center">
        {date?.toLocaleDateString() ?? 'No date selected'}
      </Stack>
    </Card>
  );
};

export const Today = () => {
  const [date, setDate] = useState<Date>();

  return (
    <Card>
      <Calendar
        showToday
        showDayOfWeek
        value={date}
        onChange={(date: Date) => setDate(date)}
      />
      <Divider />
      <Stack inline={false} justifyContent="center">
        {date?.toLocaleDateString() ?? 'No date selected'}
      </Stack>
    </Card>
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

export const NoAnimation = () => {
  const [date, setDate] = useState<Date>();

  return (
    <Card>
      <Calendar
        value={date}
        animated={false}
        onChange={(date: Date) => setDate(date)}
      />
      <Divider />
      <Stack justifyContent="center">
        {date?.toLocaleDateString() ?? 'No date selected'}
      </Stack>
    </Card>
  );
};

export const DefaultValue = () => {
  const [date, setDate] = useState<Date>(addMonths(new Date(), 1));

  return (
    <Card>
      <Calendar value={date} onChange={(date: Date) => setDate(date)} />
      <Divider />
      <Stack justifyContent="center">
        {date?.toLocaleDateString() ?? 'No date selected'}
      </Stack>
    </Card>
  );
};

const prevMonth = sub(new Date(), { months: 1 });
const nextMonth = add(new Date(), { months: 1 });

export const MinMax = () => {
  const [date, setDate] = useState<Date>(new Date());

  return (
    <Card>
      <Calendar
        value={date}
        min={prevMonth}
        max={nextMonth}
        onChange={(date: Date) => setDate(date)}
      />
      <Divider />
      <Stack justifyContent="center">
        {date?.toLocaleDateString() ?? 'No date selected'}
      </Stack>
    </Card>
  );
};

export const WithLabels = () => {
  const [date, setDate] = useState<Date>();

  return (
    <Card>
      <Calendar
        value={date}
        onChange={(date: Date) => setDate(date)}
        showDayOfWeek
      />
      <Divider />
      <Stack justifyContent="center">
        {date?.toLocaleDateString() ?? 'No date selected'}
      </Stack>
    </Card>
  );
};

export const Range = () => {
  const [range, setRange] = useState<[Date, Date]>();

  return (
    <Card>
      <Calendar
        value={range}
        onChange={val => setRange(val as [Date, Date | undefined])}
        isRange
        showDayOfWeek
        showToday
      />
      <Divider />
      <Stack justifyContent="center">
        {range
          ? `${range[0]?.toLocaleDateString()}-${range[1]?.toLocaleDateString()}`
          : 'No date selected'}
      </Stack>
    </Card>
  );
};

export const CurrentMonth = () => {
  const [range, setRange] = useState<[Date, Date]>([
    startOfMonth(new Date()),
    endOfMonth(new Date())
  ]);

  return (
    <Card>
      <Calendar
        value={range}
        onChange={val => setRange(val as [Date, Date | undefined])}
        isRange
        showDayOfWeek
        showToday
      />
      <Divider />
      <Stack justifyContent="center">
        {range
          ? `${range[0]?.toLocaleDateString()}-${range[1]?.toLocaleDateString()}`
          : 'No date selected'}
      </Stack>
    </Card>
  );
};

export const Multiview = () => {
  const [range, setRange] = useState<[Date, Date]>();

  return (
    <Card>
      <CalendarRange
        value={range}
        onChange={val => setRange(val as [Date, Date])}
        showDayOfWeek
      />
      <Divider />
      <Stack justifyContent="center">
        {range
          ? `${range[0]?.toLocaleDateString()}-${range[1]?.toLocaleDateString()}`
          : 'No date selected'}
      </Stack>
    </Card>
  );
};

export const MultiviewPast = () => {
  const [range, setRange] = useState<[Date, Date]>();

  return (
    <Card>
      <CalendarRange
        value={range}
        onChange={val => setRange(val as [Date, Date])}
        direction="past"
        showDayOfWeek
      />
      <Divider />
      <Stack justifyContent="center">
        {range
          ? `${range[0]?.toLocaleDateString()}-${range[1]?.toLocaleDateString()}`
          : 'No date selected'}
      </Stack>
    </Card>
  );
};
