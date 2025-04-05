import { useState } from 'react';
import {
  add,
  addDays,
  addMonths,
  endOfMonth,
  format,
  setHours,
  setMinutes,
  setSeconds,
  startOfMonth,
  sub
} from 'date-fns';
import { Stack } from '../../layout/Stack';
import { Button } from '../../elements/Button';
import { Card } from '../../layout/Card';
import { Divider } from '../../layout/Divider';
import { Calendar } from './Calendar';
import { CalendarRange } from './CalendarRange';

export default {
  title: 'Components/Form/Calendar',
  component: Calendar
};

export const Demo = () => {
  const [date, setDate] = useState<Date>();

  return (
    <>
      <Card>
        <Calendar
          value={date}
          onChange={(date: Date) => setDate(date)}
          showInputPreview
        />
      </Card>
      <Stack justifyContent="center" className="mt-4">
        {date?.toLocaleDateString() ?? 'No date selected'}
      </Stack>
    </>
  );
};

export const DemoWithTime = () => {
  const [date, setDate] = useState<Date>();

  return (
    <>
      <Card>
        <Calendar
          value={date}
          onChange={(date: Date) => setDate(date)}
          showInputPreview
          showTime
        />
      </Card>
      <Stack justifyContent="center" className="mt-4">
        {date?.toLocaleTimeString() ?? 'No date selected'}
      </Stack>
    </>
  );
};

export const Simple = () => {
  const [date, setDate] = useState<Date>();

  return (
    <>
      <Card>
        <Calendar value={date} onChange={(date: Date) => setDate(date)} />
      </Card>
      <Stack justifyContent="center" className="mt-4">
        {date?.toLocaleDateString() ?? 'No date selected'}
      </Stack>
    </>
  );
};

export const WithTime = () => {
  const [date, setDate] = useState<Date | undefined>(new Date());

  return (
    <>
      <Card>
        <Calendar
          value={date}
          onChange={(newDate: Date) => setDate(newDate)}
          showDayOfWeek
          showToday
          showTime
        />
      </Card>
      <Stack justifyContent="center" className="mt-4">
        {date ? format(date, 'yyyy-MM-dd HH:mm:ss') : 'No date selected'}
      </Stack>
    </>
  );
};

export const WithDatePresets = () => {
  const [date, setDate] = useState<Date | undefined>(new Date());

  return (
    <>
      <Card>
        <Calendar
          value={date}
          onChange={(newDate: Date) => setDate(newDate)}
          showDayOfWeek
          showToday
          preset="combined"
        />
      </Card>
      <Stack justifyContent="center" className="mt-4">
        {date ? format(date, 'yyyy-MM-dd') : 'No date selected'}
      </Stack>
    </>
  );
};

export const WithDatePresetsAndTime = () => {
  const [date, setDate] = useState<Date | undefined>(new Date());

  return (
    <>
      <Card>
        <Calendar
          value={date}
          onChange={(newDate: Date) => setDate(newDate)}
          showDayOfWeek
          showToday
          showTime
          preset="combined"
        />
      </Card>
      <Stack justifyContent="center" className="mt-4">
        {date ? format(date, 'yyyy-MM-dd HH:mm:ss') : 'No date selected'}
      </Stack>
    </>
  );
};

export const Today = () => {
  const [date, setDate] = useState<Date>();

  return (
    <>
      <Card>
        <Calendar
          showToday
          showDayOfWeek
          value={date}
          onChange={(date: Date) => setDate(date)}
        />
      </Card>
      <Stack justifyContent="center" className="mt-4">
        {date?.toLocaleDateString() ?? 'No date selected'}
      </Stack>
    </>
  );
};

export const Disabled = () => {
  const [date, setDate] = useState<Date>();

  return (
    <>
      <Card>
        <Calendar
          value={date}
          disabled
          onChange={(date: Date) => setDate(date)}
        />
      </Card>
      <Stack justifyContent="center" className="mt-4">
        {date?.toLocaleDateString() ?? 'No date selected'}
      </Stack>
    </>
  );
};

export const NoAnimation = () => {
  const [date, setDate] = useState<Date>();

  return (
    <>
      <Card>
        <Calendar
          value={date}
          animated={false}
          onChange={(date: Date) => setDate(date)}
        />
      </Card>
      <Stack justifyContent="center" className="mt-4">
        {date?.toLocaleDateString() ?? 'No date selected'}
      </Stack>
    </>
  );
};

export const DefaultValue = () => {
  const [date, setDate] = useState<Date>(addMonths(new Date(), 1));

  return (
    <>
      <Card>
        <Calendar value={date} onChange={(date: Date) => setDate(date)} />
      </Card>
      <Stack justifyContent="center" className="mt-4">
        {date?.toLocaleDateString() ?? 'No date selected'}
      </Stack>
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
      </Card>
      <Stack justifyContent="center" className="mt-4">
        {date?.toLocaleDateString() ?? 'No date selected'}
      </Stack>
    </>
  );
};

export const WithLabels = () => {
  const [date, setDate] = useState<Date>();

  return (
    <>
      <Card>
        <Calendar
          value={date}
          onChange={(date: Date) => setDate(date)}
          showDayOfWeek
        />
      </Card>
      <Stack justifyContent="center" className="mt-4">
        {date?.toLocaleDateString() ?? 'No date selected'}
      </Stack>
    </>
  );
};

export const Range = () => {
  const [range, setRange] = useState<[Date, Date]>();

  return (
    <>
      <Card>
        <Calendar
          value={range}
          onChange={val => setRange(val as [Date, Date | undefined])}
          isRange
          showDayOfWeek
          showToday
        />
      </Card>
      <Stack justifyContent="center" className="mt-4">
        {range
          ? `${range[0]?.toLocaleDateString()}-${range[1]?.toLocaleDateString()}`
          : 'No date selected'}
      </Stack>
    </>
  );
};

export const RangeWithTime = () => {
  const [range, setRange] = useState<[Date, Date]>();

  return (
    <>
      <Card>
        <Calendar
          value={range}
          onChange={val => setRange(val as [Date, Date | undefined])}
          isRange
          showDayOfWeek
          showToday
          showTime
        />
      </Card>
      <Stack justifyContent="center" className="mt-4">
        {range
          ? `${range[0]?.toLocaleDateString()} ${range[0]?.toLocaleTimeString()}-${range[1]?.toLocaleDateString()} ${range[1]?.toLocaleTimeString()}`
          : 'No date selected'}
      </Stack>
    </>
  );
};

export const CurrentMonth = () => {
  const [range, setRange] = useState<[Date, Date]>([
    startOfMonth(new Date()),
    endOfMonth(new Date())
  ]);

  return (
    <>
      <Card>
        <Calendar
          value={range}
          onChange={val => setRange(val as [Date, Date | undefined])}
          isRange
          showDayOfWeek
          showToday
        />
      </Card>
      <Stack justifyContent="center" className="mt-4">
        {range
          ? `${range[0]?.toLocaleDateString()}-${range[1]?.toLocaleDateString()}`
          : 'No date selected'}
      </Stack>
    </>
  );
};

export const Multiview = () => {
  const [range, setRange] = useState<[Date, Date]>();

  return (
    <>
      <Card>
        <CalendarRange
          value={range}
          onChange={val => setRange(val as [Date, Date])}
          showDayOfWeek
          headerDateFormat="MMMM yyyy"
        />
      </Card>
      <Stack justifyContent="center" className="mt-4">
        {range
          ? `${range[0]?.toLocaleDateString()}-${range[1]?.toLocaleDateString()}`
          : 'No date selected'}
      </Stack>
    </>
  );
};

export const MultiviewPast = () => {
  const [range, setRange] = useState<[Date, Date]>();

  return (
    <>
      <Card>
        <CalendarRange
          value={range}
          onChange={val => setRange(val as [Date, Date])}
          direction="past"
          showDayOfWeek
        />
      </Card>
      <Stack justifyContent="center" className="mt-4">
        {range
          ? `${range[0]?.toLocaleDateString()}-${range[1]?.toLocaleDateString()}`
          : 'No date selected'}
      </Stack>
    </>
  );
};

export const MultiviewWithPresets = () => {
  const [range, setRange] = useState<[Date, Date]>();

  return (
    <>
      <Card>
        <CalendarRange
          value={range}
          onChange={val => setRange(val as [Date, Date])}
          showDayOfWeek
          headerDateFormat="MMMM yyyy"
          direction="past"
          preset="past"
        />
      </Card>
      <Stack justifyContent="center" className="mt-4">
        {range
          ? `${range[0]?.toLocaleDateString()} - ${range[1]?.toLocaleDateString()}`
          : 'No date selected'}
      </Stack>
    </>
  );
};

export const MultiviewWithFuturePresets = () => {
  const [range, setRange] = useState<[Date, Date]>();

  return (
    <>
      <Card>
        <CalendarRange
          value={range}
          onChange={val => setRange(val as [Date, Date])}
          showDayOfWeek
          headerDateFormat="MMMM yyyy"
          direction="future"
          preset="future"
        />
      </Card>
      <Stack justifyContent="center" className="mt-4">
        {range
          ? `${range[0]?.toLocaleDateString()} - ${range[1]?.toLocaleDateString()}`
          : 'No date selected'}
      </Stack>
    </>
  );
};

export const MultiviewWithCombinedPresets = () => {
  const [range, setRange] = useState<[Date, Date]>();

  return (
    <>
      <Card>
        <CalendarRange
          value={range}
          onChange={val => setRange(val as [Date, Date])}
          showDayOfWeek
          headerDateFormat="MMMM yyyy"
          preset="combined"
        />
      </Card>
      <Stack justifyContent="center" className="mt-4">
        {range
          ? `${range[0]?.toLocaleDateString()} - ${range[1]?.toLocaleDateString()}`
          : 'No date selected'}
      </Stack>
    </>
  );
};

export const MultiviewWithInputPreview = () => {
  const [range, setRange] = useState<[Date, Date]>();

  return (
    <>
      <Card>
        <CalendarRange
          value={range}
          onChange={val => setRange(val as [Date, Date])}
          showDayOfWeek
          headerDateFormat="MMMM yyyy"
          showInputPreview
        />
      </Card>
      <Stack justifyContent="center" className="mt-4">
        {range
          ? `${range[0]?.toLocaleDateString()} - ${range[1]?.toLocaleDateString()}`
          : 'No date selected'}
      </Stack>
    </>
  );
};

export const MultiviewWithTimeAndInputPreview = () => {
  const [range, setRange] = useState<[Date, Date]>();

  return (
    <>
      <Card>
        <CalendarRange
          value={range}
          onChange={val => setRange(val as [Date, Date])}
          showDayOfWeek
          headerDateFormat="MMMM yyyy"
          showTime
          showInputPreview
        />
      </Card>
      <Stack justifyContent="center" className="mt-4">
        {range
          ? `${range[0]?.toLocaleDateString()} ${range[0]?.toLocaleTimeString()}-${range[1]?.toLocaleDateString()} ${range[1]?.toLocaleTimeString()}`
          : 'No date selected'}
      </Stack>
    </>
  );
};

export const WithCustomPresets = () => {
  const [date, setDate] = useState<Date | undefined>(new Date());

  const CustomContent = () => {
    const customPresets = [
      {
        label: 'Start of Business Day',
        value: setHours(setMinutes(setSeconds(new Date(), 0), 0), 9)
      },
      {
        label: 'End of Business Day',
        value: setHours(setMinutes(setSeconds(new Date(), 0), 0), 17)
      },
      {
        label: 'Next Business Day',
        value: setHours(setMinutes(setSeconds(addDays(new Date(), 1), 0), 0), 9)
      }
    ];

    return (
      <Stack
        direction="column"
        alignItems="center"
        className="h-full p-2 overflow-auto"
      >
        <div className="text-sm font-medium mb-4">Quick Actions</div>
        {customPresets.map(preset => (
          <Button
            key={preset.label}
            variant="text"
            size="sm"
            className="justify-start hover:bg-gray-100 dark:hover:bg-gray-800"
            onClick={() => setDate(preset.value)}
          >
            {preset.label}
          </Button>
        ))}
        <Divider className="my-4" />
        <div className="text-sm text-gray-500 dark:text-gray-400">
          {date ? format(date, 'PPP p') : 'No date selected'}
        </div>
      </Stack>
    );
  };

  return (
    <>
      <Card>
        <Calendar
          value={date}
          onChange={(newDate: Date) => setDate(newDate)}
          showDayOfWeek
          showToday
          showTime
          preset={<CustomContent />}
        />
      </Card>
    </>
  );
};

// monthsToDisplay usage
export const MonthsToDisplay = () => {
  const [range, setRange] = useState<[Date, Date]>();

  return (
    <>
      <Card>
        <CalendarRange
          value={range}
          onChange={val => setRange(val as [Date, Date])}
          showDayOfWeek
          headerDateFormat="MMMM yyyy"
          monthsToDisplay={3}
        />
        <Stack justifyContent="center" className="mt-4">
          {range
            ? `${range[0]?.toLocaleDateString()}-${range[1]?.toLocaleDateString()}`
            : 'No date selected'}
        </Stack>
      </Card>
    </>
  );
};
