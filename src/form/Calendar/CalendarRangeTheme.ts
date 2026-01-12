import type { CalendarTheme } from '@/form/Calendar/CalendarTheme';
import {
  defaultCalendarTheme,
  unifyCalendarTheme
} from '@/form/Calendar/CalendarTheme';

export type CalendarRangeTheme = Omit<CalendarTheme, 'months' | 'years'>;

const baseDefaultTheme: Partial<CalendarRangeTheme> = {
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

const baseUnifyTheme: Partial<CalendarRangeTheme> = {
  base: 'relative overflow-hidden bg-calendar-colors-container-background-default',
  header: {
    base: 'flex text-center justify-between mb-2 items-center text-calendar-colors-header-text-default',
    prev: '',
    mid: '',
    next: ''
  },
  title: 'font-semibold flex grow justify-around',
  content: 'flex gap-4'
};

export const unifyCalendarRangeTheme: CalendarRangeTheme = {
  base: baseUnifyTheme.base!,
  header: baseUnifyTheme.header!,
  title: baseUnifyTheme.title!,
  content: baseUnifyTheme.content!,
  contentContainer: baseUnifyTheme.contentContainer || '',
  days: unifyCalendarTheme.days,
  time: unifyCalendarTheme.time,
  presets: {
    ...unifyCalendarTheme.presets,
    divider: 'mx-1 h-[calc(100%-30px)] self-end'
  }
};

export const defaultCalendarRangeTheme: CalendarRangeTheme = {
  base: baseDefaultTheme.base!,
  header: baseDefaultTheme.header!,
  title: baseDefaultTheme.title!,
  content: baseDefaultTheme.content!,
  contentContainer: baseDefaultTheme.contentContainer || '',
  days: defaultCalendarTheme.days,
  time: defaultCalendarTheme.time,
  presets: {
    ...defaultCalendarTheme.presets,
    divider: 'mx-1 h-[calc(100%-30px)] self-end'
  }
};
