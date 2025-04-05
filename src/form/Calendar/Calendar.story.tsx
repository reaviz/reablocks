import { useState } from 'react';
import {
  add,
  addDays,
  addMonths,
  endOfDay,
  endOfMonth,
  format,
  setHours,
  setMinutes,
  setSeconds,
  startOfDay,
  startOfMonth,
  startOfWeek,
  startOfYear,
  sub,
  subDays,
  subMonths,
  subWeeks,
  subYears
} from 'date-fns';
import { Stack } from '../../layout/Stack';
import { Button } from '../../elements/Button';
import { Card } from '../../layout/Card';
import { Divider } from '../../layout/Divider';
import { Calendar } from './Calendar';
import { CalendarRange } from './CalendarRange';
import { CalendarPresets } from './CalendarPresets';

export default {
  title: 'Components/Form/Calendar',
  component: Calendar
};

export const Demo = () => {
  const [date, setDate] = useState<Date>();

  return (
    <Card>
      <Calendar
        value={date}
        onChange={(date: Date) => setDate(date)}
        showInputPreview
      />
    </Card>
  );
};

export const DemoWithTime = () => {
  const [date, setDate] = useState<Date>();

  return (
    <Card>
      <Calendar
        value={date}
        onChange={(date: Date) => setDate(date)}
        showInputPreview
        showTime
      />
      <Divider />
      <Stack inline={false} justifyContent="center">
        {date?.toLocaleTimeString() ?? 'No date selected'}
      </Stack>
    </Card>
  );
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

export const WithDatePresets = () => {
  const [date, setDate] = useState<Date | undefined>(new Date());

  return (
    <Card>
      <Calendar
        value={date}
        onChange={(newDate: Date) => setDate(newDate)}
        showDayOfWeek
        showToday
        preset="combined"
      />
      <Divider />
      <Stack justifyContent="center">
        {date ? format(date, 'yyyy-MM-dd') : 'No date selected'}
      </Stack>
    </Card>
  );
};

export const WithDatePresetsAndTime = () => {
  const [date, setDate] = useState<Date | undefined>(new Date());

  return (
    <Card>
      <Calendar
        value={date}
        onChange={(newDate: Date) => setDate(newDate)}
        showDayOfWeek
        showToday
        showTime
        preset="combined"
      />
      <Divider />
      <Stack justifyContent="center">
        {date ? format(date, 'yyyy-MM-dd HH:mm:ss') : 'No date selected'}
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

  return (
    <Card>
      <CalendarRange
        value={range}
        onChange={val => setRange(val as [Date, Date])}
        showDayOfWeek
        headerDateFormat="MMMM yyyy"
        direction="past"
        preset="past"
      />
      <Divider />
      <Stack justifyContent="center">
        {range
          ? `${range[0]?.toLocaleDateString()} - ${range[1]?.toLocaleDateString()}`
          : 'No date selected'}
      </Stack>
    </Card>
  );
};

export const MultiviewWithFuturePresets = () => {
  const [range, setRange] = useState<[Date, Date]>();

  return (
    <Card>
      <CalendarRange
        value={range}
        onChange={val => setRange(val as [Date, Date])}
        showDayOfWeek
        headerDateFormat="MMMM yyyy"
        direction="future"
        preset="future"
      />
      <Divider />
      <Stack justifyContent="center">
        {range
          ? `${range[0]?.toLocaleDateString()} - ${range[1]?.toLocaleDateString()}`
          : 'No date selected'}
      </Stack>
    </Card>
  );
};

export const MultiviewWithCombinedPresets = () => {
  const [range, setRange] = useState<[Date, Date]>();

  return (
    <Card>
      <CalendarRange
        value={range}
        onChange={val => setRange(val as [Date, Date])}
        showDayOfWeek
        headerDateFormat="MMMM yyyy"
        preset="combined"
      />
      <Divider />
      <Stack justifyContent="center">
        {range
          ? `${range[0]?.toLocaleDateString()} - ${range[1]?.toLocaleDateString()}`
          : 'No date selected'}
      </Stack>
    </Card>
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
      <Stack direction="column" className="h-full p-2">
        <div className="text-sm font-medium mb-4">Quick Actions</div>
        {customPresets.map(preset => (
          <Button
            key={preset.label}
            variant="text"
            size="sm"
            className="justify-start mb-2 hover:bg-gray-100 dark:hover:bg-gray-800"
            onClick={() => setDate(preset.value)}
          >
            {preset.label}
          </Button>
        ))}
        <Divider className="my-4" />
        <div className="text-sm font-medium mb-2">Current Selection</div>
        <div className="text-sm text-gray-500 dark:text-gray-400">
          {date ? format(date, 'PPP p') : 'No date selected'}
        </div>
      </Stack>
    );
  };

  return (
    <Card>
      <Calendar
        value={date}
        onChange={(newDate: Date) => setDate(newDate)}
        showDayOfWeek
        showToday
        showTime
        preset={<CustomContent />}
      />
      <Divider />
      <Stack justifyContent="center">
        {date ? format(date, 'PPP p') : 'No date selected'}
      </Stack>
    </Card>
  );
};
