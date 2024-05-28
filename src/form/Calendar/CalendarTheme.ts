export interface CalendarTheme {
  base: string;
  header: {
    base: string;
    prev: string;
    mid: string;
    next: string;
  };
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
    selected: string;
    hover: string;
    today: string;
  };
  months: {
    root: string;
    month: string;
    selected: string;
  };
  years: {
    root: string;
    year: string;
    selected: string;
  };
}

const baseTheme: CalendarTheme = {
  base: 'relative overflow-hidden',
  header: {
    base: 'flex text-center justify-between mb-2 items-center',
    prev: 'text-xl leading-4',
    mid: '',
    next: 'text-xl leading-4'
  },
  title: 'font-semibold',
  content: 'flex',

  days: {
    header: 'text-center grid grid-cols-7 mb-1 pt-2 font-medium',
    dayOfWeek: 'text-center font-medium',
    week: 'grid grid-cols-7',
    day: 'font-normal flex p-2 border',
    outside: '',
    startRangeDate: 'rounded-tl-md rounded-tr-none rounded-br-none',
    cornerStartDateBottom: 'rounded-bl-none',
    endRangeDate: 'rounded-br-md rounded-bl-none rounded-tl-none',
    cornerEndDateTop: 'rounded-tr-none',
    range: 'rounded-none',
    selected: '',
    hover: 'rounded',
    today: 'rounded border'
  },

  months: {
    root: 'grid grid-cols-4 gap-2',
    month: 'p-1.5',
    selected: ''
  },

  years: {
    root: 'grid grid-cols-4 gap-2',
    year: 'p-1.5',
    selected: ''
  }
};

export const calendarTheme: CalendarTheme = {
  ...baseTheme,
  header: {
    ...baseTheme.header,
    base: [baseTheme.header.base, 'text-panel-secondary-content'].join(' ')
  },
  days: {
    ...baseTheme.days,
    day: [
      baseTheme.days.day,
      'border-transparent text-gray-400 hover:bg-primary-hover hover:text-black light:text-gray-700'
    ].join(' '),
    header: [baseTheme.days.header, 'text-gray-400 light:text-gray-600'].join(
      ' '
    ),
    outside: [
      baseTheme.days.outside,
      'text-gray-300/40 light:text-gray-400'
    ].join(' '),
    selected: [
      baseTheme.days.selected,
      'text-black border-transparent light:text-white light:border-transparent'
    ].join(' '),
    hover: [
      baseTheme.days.hover,
      'bg-primary-active text-black border-transparent light:text-white'
    ].join(' '),
    today: [
      baseTheme.days.today,
      'border-gray-300 text-gray-100 light:gray-900 light:border-gray-700'
    ].join(' ')
  },
  months: {
    ...baseTheme.months,
    month: [
      baseTheme.months.month,
      'hover:bg-primary-hover hover:text-black border-transparent text-gray-400 light:hover:text-white'
    ].join(' '),
    selected: [
      baseTheme.years.selected,
      'border-transparent text-black light:text-white'
    ].join(' ')
  },
  years: {
    ...baseTheme.years,
    year: [
      baseTheme.years.year,
      'hover:bg-primary-hover hover:text-black border-transparent text-gray-400 light:hover:text-white'
    ].join(' '),
    selected: [
      baseTheme.years.selected,
      'border-transparent text-black light:text-white'
    ].join(' ')
  }
};

export const legacyCalendarTheme: CalendarTheme = {
  ...baseTheme,
  header: {
    ...baseTheme.header,
    base: [
      baseTheme.header.base,
      'mb-[var(--spacing-sm)] mb-[var(--calendar-gap)]'
    ].join(' ')
  },
  days: {
    ...baseTheme.days,
    header: [baseTheme.days.header, 'gap-[var(--calendar-gap)]'].join(' '),
    outside: [baseTheme.days.outside, 'text-gray-100/60'].join(' ')
  }
};
