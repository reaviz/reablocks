import {
  CalendarTheme,
  darkCalendarTheme,
  lightCalendarTheme
} from './CalendarTheme';

export interface CalendarRangeTheme
  extends Omit<CalendarTheme, 'months' | 'years'> {}

const baseTheme: Partial<CalendarRangeTheme> = {
  base: 'relative overflow-hidden',
  header: 'flex text-center justify-between mb-2 items-center',
  title: 'font-semibold flex grow justify-around',
  content: 'flex gap-4'
};

export const lightCalendarRangeTheme: CalendarRangeTheme = {
  base: baseTheme.base,
  header: baseTheme.header,
  title: baseTheme.title,
  content: baseTheme.content,
  days: lightCalendarTheme.days
};

export const darkCalendarRangeTheme: CalendarRangeTheme = {
  base: baseTheme.base,
  header: baseTheme.header,
  title: baseTheme.title,
  content: baseTheme.content,
  days: darkCalendarTheme.days
};
