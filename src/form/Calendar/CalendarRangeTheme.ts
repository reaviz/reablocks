import { CalendarTheme } from './CalendarTheme';

export interface CalendarRangeTheme
  extends Omit<CalendarTheme, 'months' | 'years'> {}

const baseTheme: CalendarRangeTheme = {
  base: 'relative overflow-hidden',
  header: 'flex text-center justify-between mb-2 items-center',
  title: 'font-semibold flex grow justify-around',
  content: 'flex gap-4',

  days: {
    header: 'text-center grid grid-cols-7 opacity-50 mb-1 border-t pt-2',
    dayOfWeek: 'text-center font-bold',
    week: 'grid grid-cols-7',
    day: 'flex p-2',
    outside: '',
    startRangeDate: 'rounded-tl-md rounded-tr-none rounded-br-none',
    cornerStartDateBottom: 'rounded-bl-none',
    endRangeDate: 'rounded-br-md rounded-bl-none rounded-tl-none',
    cornerEndDateTop: 'rounded-tr-none',
    range: 'rounded-none'
  }
};

export const lightCalendarRangeTheme: CalendarRangeTheme = {
  ...baseTheme,
  days: {
    ...baseTheme.days,
    header: [baseTheme.days.header, 'border-slate-700 text-black'].join(' '),
    outside: [baseTheme.days.outside, 'text-black/60'].join(' ')
  }
};

export const darkCalendarRangeTheme: CalendarRangeTheme = {
  ...baseTheme,
  days: {
    ...baseTheme.days,
    header: [baseTheme.days.header, 'border-slate-500 text-white'].join(' '),
    outside: [baseTheme.days.outside, 'text-gray-100/60'].join(' ')
  }
};
