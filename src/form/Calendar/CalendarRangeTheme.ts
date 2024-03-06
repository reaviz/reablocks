import { CalendarTheme } from './CalendarTheme';

export interface CalendarRangeTheme
  extends Omit<CalendarTheme, 'months' | 'years'> {}

const baseTheme: CalendarRangeTheme = {
  base: 'relative overflow-hidden',
  header: 'flex text-center justify-between mb-2 items-center',
  title: 'font-semibold flex grow justify-around',
  content: 'flex gap-4',

  days: {
    header:
      'text-center grid grid-cols-7 opacity-50 mb-1 border-t border-slate-500 pt-2',
    dayOfWeek: 'text-center font-bold',
    week: 'grid grid-cols-7',
    day: 'flex p-2',
    outside: 'text-gray-100/60',
    startRangeDate: 'rounded-tl-md rounded-tr-none rounded-br-none',
    cornerStartDateBottom: 'rounded-bl-none',
    endRangeDate: 'rounded-br-md rounded-bl-none rounded-tl-none',
    cornerEndDateTop: 'rounded-tr-none',
    range: 'rounded-none'
  }
};

export const lightCalendarRangeTheme: CalendarRangeTheme = {
  ...baseTheme
  // TODO: Add light theme colors
};

export const darkCalendarRangeTheme: CalendarRangeTheme = {
  ...baseTheme
  // TODO: Add dark theme colors
};
