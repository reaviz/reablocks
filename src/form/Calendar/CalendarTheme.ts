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
  inputPreview: {
    base: string;
    input: string;
    button: string;
  };
  time?: {
    base: string;
    wrapper: string;
    header: string;
    column: {
      base: string;
      wrapper: string;
      label: string;
      list: string;
      scrollbar: string;
    };
    item: {
      base: string;
      selected: string;
    };
  };
  presets: {
    base: string;
    content: string;
    group: {
      base: string;
      title: string;
    };
    button: {
      base: string;
      active: string;
    };
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
  title: 'font-semibold leading-[normal]',
  content: 'flex',

  inputPreview: {
    base: 'flex items-center gap-2',
    input: 'w-full',
    button: 'w-full'
  },

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
    hover: 'rounded-sm',
    today: 'rounded-sm border'
  },

  months: {
    root: 'grid grid-cols-4 gap-5 py-5.75 px-0.75',
    month: 'p-1.5',
    selected: ''
  },

  years: {
    root: 'grid grid-cols-4 gap-5 py-5.75 px-0.25',
    year: 'p-1.5',
    selected: ''
  },

  time: {
    base: 'flex gap-4 px-0.5',
    wrapper:
      'border-l border-gray-200 mt-6.5 dark:border-gray-700 ml-2 pl-1.5 border-gray-200',
    header:
      'flex gap-4 px-0.5 pb-2.5 mb-2 border-b border-gray-200 dark:border-gray-700 ',
    column: {
      base: 'w-6',
      wrapper: 'overflow-y-auto h-52',
      label: 'text-center text-xs text-gray-500',
      list: 'p-0 m-0 list-none',
      scrollbar:
        'scrollbar-thin scrollbar-thumb-gray-300 dark:scrollbar-thumb-gray-600 scrollbar-track-transparent hover:scrollbar-thumb-gray-400 dark:hover:scrollbar-thumb-gray-500'
    },
    item: {
      base: 'py-0.5 px-0.5 text-center cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-700 rounded transition-colors',
      selected:
        'font-semibold bg-primary-100 text-primary-700 dark:bg-primary-700 dark:text-primary-100'
    }
  },
  presets: {
    base: 'relative h-59 max-w-52 before:absolute before:right-0 before:top-5.75 before:bottom-0 before:w-px before:bg-gray-200 dark:before:bg-gray-700 pr-1',
    content: 'h-full overflow-y-auto',
    group: {
      base: 'mb-3',
      title: 'text-xs font-medium text-gray-500 dark:text-gray-400 mb-1 px-2'
    },
    button: {
      base: 'justify-start hover:bg-gray-100 dark:hover:bg-gray-800 w-full text-left',
      active:
        'bg-gray-100 dark:bg-gray-800 text-primary-600 dark:text-primary-400'
    }
  }
};

export const calendarTheme: CalendarTheme = {
  ...baseTheme,
  header: {
    ...baseTheme.header,
    base: [baseTheme.header.base, 'text-text-secondary'].join(' ')
  },
  days: {
    ...baseTheme.days,
    day: [
      baseTheme.days.day,
      'border-transparent text-text-secondary opacity-90 hover:bg-primary-hover hover:text-black'
    ].join(' '),
    header: [baseTheme.days.header, 'text-text-secondary'].join(' '),
    outside: [baseTheme.days.outside, 'opacity-40 text-text-secondary'].join(
      ' '
    ),
    selected: [
      baseTheme.days.selected,
      'bg-blue-500 text-white dark:bg-blue-600 dark:text-white border-transparent opacity-100'
    ].join(' '),
    hover: [
      baseTheme.days.hover,
      'bg-blue-500/10 text-blue-500 dark:text-blue-400 border-transparent opacity-100'
    ].join(' '),
    today: [baseTheme.days.today, 'border-panel-accent text-text-primary'].join(
      ' '
    )
  },
  months: {
    ...baseTheme.months,
    month: [
      baseTheme.months.month,
      'hover:bg-primary-hover hover:text-black border-transparent text-text-secondary light:hover:text-white'
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
      'hover:bg-primary-hover hover:text-black border-transparent text-text-secondary light:hover:text-white'
    ].join(' '),
    selected: [
      baseTheme.years.selected,
      'border-transparent text-black light:text-white'
    ].join(' ')
  },
  time: {
    ...baseTheme.time,
    wrapper: [baseTheme.time.wrapper, 'border-panel-border'].join(' '),
    item: {
      ...baseTheme.time.item,
      base: [baseTheme.time.item.base, 'px-1.5', 'text-text-secondary'].join(
        ' '
      ),
      selected: [
        baseTheme.time.item.selected,
        'bg-blue-500 text-white dark:bg-blue-600 dark:text-white'
      ].join(' ')
    }
  },
  presets: {
    ...baseTheme.presets,
    base: [baseTheme.presets.base, 'flex'].join(' ')
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
