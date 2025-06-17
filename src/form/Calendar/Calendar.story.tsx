import { useState } from 'react';
import { Card } from '../../layout/Card';
import { Calendar } from './Calendar';
import { CalendarRange } from './CalendarRange';
import {
  add,
  addMonths,
  endOfMonth,
  format,
  startOfMonth,
  sub,
  subDays
} from 'date-fns';
import { Divider } from '../../layout/Divider';
import { Stack } from '../../layout/Stack';
import {
  getCombinedPresets,
  getFuturePresets,
  getPastPresets
} from './CalendarPresets';

const FOUR_DAYS_AGO = sub(new Date(), { days: 4 });
const FIVE_DAYS_FROM_NOW = add(new Date(), { days: 5 });

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

export const WithTime = () => {
  const [date, setDate] = useState<Date>();

  return (
    <Card>
      <Calendar
        showDayOfWeek
        showToday
        showTime
        value={date}
        onChange={(date: Date) => setDate(date)}
      />
      <Divider />
      <Stack inline={false} justifyContent="center">
        {date?.toLocaleString() ?? 'No date selected'}
      </Stack>
    </Card>
  );
};

export const WithTime12HourCycle = () => {
  const [date, setDate] = useState<Date>();

  return (
    <Card>
      <Calendar
        showDayOfWeek
        showToday
        showTime
        is12HourCycle
        value={date}
        onChange={(date: Date) => setDate(date)}
      />
      <Divider />
      <Stack inline={false} justifyContent="center">
        {date?.toLocaleString() ?? 'No date selected'}
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

export const MinMaxWithTime = () => {
  const [date, setDate] = useState<Date>(new Date());

  return (
    <Card>
      <Calendar
        showTime
        value={date}
        min={FOUR_DAYS_AGO}
        max={FIVE_DAYS_FROM_NOW}
        onChange={(date: Date) => setDate(date)}
      />
      <Divider />
      <Stack justifyContent="center">
        {date?.toLocaleString() ?? 'No date selected'}
      </Stack>
    </Card>
  );
};

export const MinMaxWith12HourCycle = () => {
  const [date, setDate] = useState<Date>(new Date());

  return (
    <Card>
      <Calendar
        showTime
        is12HourCycle
        value={date}
        min={FOUR_DAYS_AGO}
        max={FIVE_DAYS_FROM_NOW}
        onChange={(date: Date) => setDate(date)}
      />
      <Divider />
      <Stack justifyContent="center">
        {date?.toLocaleString() ?? 'No date selected'}
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

export const RangeWithTime = () => {
  const [range, setRange] = useState<[Date, Date]>();

  return (
    <Card>
      <Calendar
        value={range}
        onChange={val => setRange(val as [Date, Date | undefined])}
        isRange
        showDayOfWeek
        showToday
        showTime
      />
      <Divider />
      <Stack justifyContent="center">
        {range
          ? `${range[0]?.toLocaleString()}-${range[1]?.toLocaleString()}`
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
          showTime
          preset={getCombinedPresets(false, true)}
        />
      </Card>
      <Stack justifyContent="center" className="mt-4">
        {date ? format(date, 'yyyy-MM-dd') : 'No date selected'}
      </Stack>
    </>
  );
};

export const WithCustomDatePresets = () => {
  const [date, setDate] = useState<Date | undefined>(new Date());

  return (
    <>
      <Card>
        <Calendar
          value={date}
          onChange={(newDate: Date) => setDate(newDate)}
          showDayOfWeek
          showToday
          preset={[
            {
              label: 'Thanksgiving Day',
              value: () => {
                const thanksgiving = new Date(new Date().getFullYear(), 10, 1);
                // Find the first Monday in November (Thanksgiving is always on the 4th Thursday)
                while (thanksgiving.getDay() !== 1) {
                  thanksgiving.setDate(thanksgiving.getDate() - 1);
                }

                return thanksgiving;
              }
            },
            {
              label: 'Labor Day',
              value: () => {
                const laborDay = new Date(new Date().getFullYear(), 8, 1);
                // First Monday in September
                while (laborDay.getDay() !== 1) {
                  laborDay.setDate(laborDay.getDate() - 1);
                }

                return laborDay;
              }
            },
            {
              label: 'New Year',
              value: new Date(new Date().getFullYear(), 0, 1)
            },
            {
              label: 'Christmas',
              value: new Date(new Date().getFullYear(), 11, 25)
            }
          ]}
        />
      </Card>
      <Stack justifyContent="center" className="mt-4">
        {date ? format(date, 'yyyy-MM-dd') : 'No date selected'}
      </Stack>
    </>
  );
};

export const WithDateFuturePresets = () => {
  const [date, setDate] = useState<Date | undefined>(new Date());

  return (
    <>
      <Card>
        <Calendar
          value={date}
          onChange={(newDate: Date) => setDate(newDate)}
          showDayOfWeek
          showToday
          preset={getFuturePresets(false, false)}
        />
      </Card>
      <Stack justifyContent="center" className="mt-4">
        {date ? format(date, 'yyyy-MM-dd') : 'No date selected'}
      </Stack>
    </>
  );
};

export const RangeWithDatePastPresets = () => {
  const [range, setRange] = useState<[Date, Date]>();

  return (
    <>
      <Card>
        <Calendar
          value={range}
          onChange={(newDate: [Date, Date]) => setRange(newDate)}
          showDayOfWeek
          showToday
          isRange
          preset={getPastPresets(true, false)}
        />
      </Card>
      <Stack justifyContent="center">
        {range
          ? `${range[0]?.toLocaleDateString()}-${range[1]?.toLocaleDateString()}`
          : 'No date selected'}
      </Stack>
    </>
  );
};

export const MultiviewWithPastPresets = () => {
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
          preset={getPastPresets(true, false)}
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
          preset={getFuturePresets(true, false)}
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
          preset={getCombinedPresets(true, false)}
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
