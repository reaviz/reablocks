export interface CalendarTheme {
  base: string;
  header: string;
  title: string;
  content: string;
  days: {
    day: string;
    header: string;
  };
  months: {
    root: string;
  };
  years: {
    root: string;
  };
}

const baseTheme: CalendarTheme = {
  base: 'relative overflow-hidden',
  header: 'flex text-center justify-between mb-2 items-center',
  title: 'font-semibold',
  content: 'flex',

  days: {
    day: 'grid grid-cols-7',
    header: 'text-center grid grid-cols-7 opacity-50 mb-1'
  },

  months: {
    root: 'grid grid-cols-4 gap-2'
  },

  years: {
    root: 'grid grid-cols-4 gap-2'
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
