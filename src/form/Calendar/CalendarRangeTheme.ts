import { CalendarTheme, calendarTheme } from '@/form';

export interface CalendarRangeTheme
  extends Omit<CalendarTheme, 'months' | 'years'> {}

const baseTheme: Partial<CalendarRangeTheme> = {
  base: 'relative overflow-hidden',
  header: {
    base: 'flex text-center justify-between mb-2 items-center',
    prev: '',
    mid: '',
    next: ''
  },
  title: 'font-semibold flex grow justify-around',
  content: 'flex gap-4'
};

export const calendarRangeTheme: CalendarRangeTheme = {
  base: baseTheme.base,
  header: baseTheme.header,
  title: baseTheme.title,
  content: baseTheme.content,
  contentContainer: baseTheme.contentContainer,
  days: calendarTheme.days,
  time: calendarTheme.time,
  presets: {
    ...calendarTheme.presets,
    divider: 'mx-1 h-[calc(100%-30px)] self-end'
  }
};
