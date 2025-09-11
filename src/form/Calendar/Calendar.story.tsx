import { useState } from 'react';
import { Card } from '@/layout';
import { Calendar } from '@/form';
import { CalendarRange } from '@/form';
import {
  add,
  addMonths,
  endOfMonth,
  format,
  startOfMonth,
  sub
} from 'date-fns';
import { Divider } from '@/layout';
import { Stack } from '@/layout';
import {
  COMBINED_PRESETS,
  FUTURE_PRESETS,
  FUTURE_RANGE_PRESETS,
  PAST_PRESETS,
  PAST_RANGE_PRESETS
} from '@/form';

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
        showTime
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

export const CustomAnimation = () => {
  const [date, setDate] = useState<Date>();

  const calendarAnimation = {
    initial: {
      opacity: 0,
      scale: 0.9,
      y: 20,
      filter: 'blur(5px)'
    },
    animate: {
      opacity: 1,
      scale: 1,
      y: 0,
      filter: 'blur(0px)',
      transition: {
        type: 'spring' as const,
        stiffness: 200,
        damping: 25,
        duration: 0.5
      }
    },
    exit: {
      opacity: 0,
      scale: 0.9,
      y: -20,
      filter: 'blur(5px)',
      transition: {
        duration: 0.3
      }
    }
  };

  const viewChangeAnimation = {
    initial: {
      opacity: 0,
      scale: 0.7,
      rotateY: -90
    },
    animate: {
      opacity: 1,
      scale: 1,
      rotateY: 0,
      transition: {
        type: 'spring' as const,
        stiffness: 250,
        damping: 25,
        duration: 0.5
      }
    },
    exit: {
      opacity: 0,
      scale: 0.7,
      rotateY: 90,
      transition: {
        duration: 0.3
      }
    }
  };

  return (
    <Card>
      <Calendar
        value={date}
        animation={calendarAnimation}
        animationViewChange={viewChangeAnimation}
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
          preset={COMBINED_PRESETS}
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

export const WithDatePastPresets = () => {
  const [date, setDate] = useState<Date | undefined>(new Date());

  return (
    <>
      <Card>
        <Calendar
          value={date}
          onChange={(newDate: Date) => setDate(newDate)}
          showDayOfWeek
          showToday
          preset={PAST_PRESETS}
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
          preset={FUTURE_PRESETS}
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
          showTime
          isRange
          preset={PAST_RANGE_PRESETS}
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
          direction="past"
          preset={FUTURE_RANGE_PRESETS}
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
