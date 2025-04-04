import { useState } from 'react';
import { Card } from '../../layout/Card';
import { Calendar } from './Calendar';
import { CalendarRange } from './CalendarRange';
import {
  add,
  addMonths,
  endOfMonth,
  startOfMonth,
  sub,
  subDays,
  subMonths,
  endOfDay,
  startOfDay,
  addDays,
  format
} from 'date-fns';
import { Divider } from '../../layout/Divider';
import { Stack } from '../../layout/Stack';
import { Button } from '../../elements/Button';

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
        headerDateFormat="MMMM yyyy"
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

export const MultiviewWithPresets = () => {
  const [range, setRange] = useState<[Date, Date]>();

  const presetRanges = [
    {
      label: 'Last 7 Days',
      value: [subDays(new Date(), 7), new Date()] as [Date, Date]
    },
    {
      label: 'Last 14 Days',
      value: [subDays(new Date(), 14), new Date()] as [Date, Date]
    },
    {
      label: 'Last 30 Days',
      value: [subDays(new Date(), 30), new Date()] as [Date, Date]
    },
    {
      label: 'Last 90 Days',
      value: [subDays(new Date(), 90), new Date()] as [Date, Date]
    },
    {
      label: 'This Month',
      value: [startOfMonth(new Date()), endOfMonth(new Date())] as [Date, Date]
    },
    {
      label: 'Last Month',
      value: [
        startOfMonth(subMonths(new Date(), 1)),
        endOfMonth(subMonths(new Date(), 1))
      ] as [Date, Date]
    }
  ];

  return (
    <Card>
      <Stack direction="row" className="gap-4">
        {/* Left side - Presets */}
        <Stack
          direction="column"
          className="gap-1 border-r border-gray-200 dark:border-gray-700 pr-4 min-w-[140px]"
        >
          {presetRanges.map(preset => (
            <Button
              key={preset.label}
              variant="text"
              size="sm"
              className="justify-start hover:bg-gray-100 dark:hover:bg-gray-800"
              onClick={() => setRange(preset.value)}
            >
              {preset.label}
            </Button>
          ))}
        </Stack>

        {/* Right side - Calendar and selected range */}
        <Stack direction="column" className="gap-4 flex-1">
          <CalendarRange
            value={range}
            onChange={val => setRange(val as [Date, Date])}
            showDayOfWeek
            headerDateFormat="MMMM yyyy"
          />
          <Divider />
          <Stack justifyContent="center">
            {range
              ? `${range[0]?.toLocaleDateString()} - ${range[1]?.toLocaleDateString()}`
              : 'No date selected'}
          </Stack>
        </Stack>
      </Stack>
    </Card>
  );
};

export const MultiviewWithFuturePresets = () => {
  const [range, setRange] = useState<[Date, Date]>();

  const presetRanges = [
    {
      label: 'Next 7 Days',
      value: [new Date(), addDays(new Date(), 7)] as [Date, Date]
    },
    {
      label: 'Next 14 Days',
      value: [new Date(), addDays(new Date(), 14)] as [Date, Date]
    },
    {
      label: 'Next 30 Days',
      value: [new Date(), addDays(new Date(), 30)] as [Date, Date]
    },
    {
      label: 'Next 90 Days',
      value: [new Date(), addDays(new Date(), 90)] as [Date, Date]
    },
    {
      label: 'Next Month',
      value: [
        startOfMonth(addMonths(new Date(), 1)),
        endOfMonth(addMonths(new Date(), 1))
      ] as [Date, Date]
    },
    {
      label: 'In 2 Months',
      value: [
        startOfMonth(addMonths(new Date(), 2)),
        endOfMonth(addMonths(new Date(), 2))
      ] as [Date, Date]
    }
  ];

  return (
    <Card>
      <Stack direction="row" className="gap-4">
        <Stack
          direction="column"
          className="gap-1 border-r border-gray-200 dark:border-gray-700 pr-4 min-w-[140px]"
        >
          {presetRanges.map(preset => (
            <Button
              key={preset.label}
              variant="text"
              size="sm"
              className="justify-start hover:bg-gray-100 dark:hover:bg-gray-800"
              onClick={() => setRange(preset.value)}
            >
              {preset.label}
            </Button>
          ))}
        </Stack>
        <Stack direction="column" className="gap-4 flex-1">
          <CalendarRange
            value={range}
            onChange={val => setRange(val as [Date, Date])}
            showDayOfWeek
            headerDateFormat="MMMM yyyy"
          />
          <Divider />
          <Stack justifyContent="center">
            {range
              ? `${range[0]?.toLocaleDateString()} - ${range[1]?.toLocaleDateString()}`
              : 'No date selected'}
          </Stack>
        </Stack>
      </Stack>
    </Card>
  );
};

export const MultiviewWithCombinedPresets = () => {
  const [range, setRange] = useState<[Date, Date]>();

  const presetRanges = [
    {
      label: 'Last Week',
      value: [subDays(new Date(), 7), new Date()] as [Date, Date]
    },
    {
      label: 'Next Week',
      value: [new Date(), addDays(new Date(), 7)] as [Date, Date]
    },
    {
      label: 'Last Month',
      value: [
        startOfMonth(subMonths(new Date(), 1)),
        endOfMonth(subMonths(new Date(), 1))
      ] as [Date, Date]
    },
    {
      label: 'This Month',
      value: [startOfMonth(new Date()), endOfMonth(new Date())] as [Date, Date]
    },
    {
      label: 'Next Month',
      value: [
        startOfMonth(addMonths(new Date(), 1)),
        endOfMonth(addMonths(new Date(), 1))
      ] as [Date, Date]
    },
    {
      label: 'Last Quarter',
      value: [subMonths(new Date(), 3), new Date()] as [Date, Date]
    },
    {
      label: 'Next Quarter',
      value: [new Date(), addMonths(new Date(), 3)] as [Date, Date]
    }
  ];

  return (
    <Card>
      <Stack direction="row" className="gap-4">
        <Stack
          direction="column"
          className="gap-1 border-r border-gray-200 dark:border-gray-700 pr-4 min-w-[140px]"
        >
          {presetRanges.map(preset => (
            <Button
              key={preset.label}
              variant="text"
              size="sm"
              className="justify-start hover:bg-gray-100 dark:hover:bg-gray-800"
              onClick={() => setRange(preset.value)}
            >
              {preset.label}
            </Button>
          ))}
        </Stack>
        <Stack direction="column" className="gap-4 flex-1">
          <CalendarRange
            value={range}
            onChange={val => setRange(val as [Date, Date])}
            showDayOfWeek
            headerDateFormat="MMMM yyyy"
          />
          <Divider />
          <Stack justifyContent="center">
            {range
              ? `${range[0]?.toLocaleDateString()} - ${range[1]?.toLocaleDateString()}`
              : 'No date selected'}
          </Stack>
        </Stack>
      </Stack>
    </Card>
  );
};

export const WithTime = () => {
  const [date, setDate] = useState<Date | undefined>(new Date());

  return (
    <Card>
      <Calendar
        value={date}
        onChange={(newDate: Date) => setDate(newDate)}
        showDayOfWeek
        showToday
        showTime
      />
      <Divider />
      <Stack justifyContent="center">
        {date ? format(date, 'yyyy-MM-dd HH:mm:ss') : 'No date selected'}
      </Stack>
    </Card>
  );
};
