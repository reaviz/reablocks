export interface CalendarTheme {
  base: string;
  header: string;
  title: string;
  content: string;
  days: {
    header: string;
    dayOfWeek: string;
    week: string;
    day: string;
    outside: string;
    startRangeDate: string;
    cornerStartDateBottom: string;
    endRangeDate: string;
    cornerEndDateTop: string;
    range: string;
  };
  months: {
    root: string;
    month: string;
  };
  years: {
    root: string;
    year: string;
  };
}

const baseTheme: CalendarTheme = {
  base: 'relative overflow-hidden',
  header: 'flex text-center justify-between mb-2 items-center',
  title: 'font-semibold',
  content: 'flex',

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
  },

  months: {
    root: 'grid grid-cols-4 gap-2',
    month: 'p-1.5'
  },

  years: {
    root: 'grid grid-cols-4 gap-2',
    year: 'p-1.5'
  }
};

export const lightCalendarTheme: CalendarTheme = {
  ...baseTheme
  // TODO: Add light theme colors
};

export const darkCalendarTheme: CalendarTheme = {
  ...baseTheme
  // TODO: Add dark theme colors
};
