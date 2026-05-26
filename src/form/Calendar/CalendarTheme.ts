export interface CalendarTheme {
  /** CSS class applied to the root calendar container. */
  base: string;
  /** Class names for the calendar header (navigation and title). */
  header: {
    base: string;
    prev: string;
    mid: string;
    next: string;
  };
  /** CSS class applied to the calendar title. */
  title: string;
  /** CSS class applied to the main calendar content area. */
  content: string;
  /** Class names for day cells and related elements (header, week rows, range styling). */
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
  /** Class names for the months view. */
  months: {
    root: string;
    month: string;
    selected: string;
  };
  /** Class names for the years view. */
  years: {
    root: string;
    year: string;
    selected: string;
  };
  /** Class names for the time picker section. */
  time?: {
    base: string;
    wrapper: string;
    dividerTop: string;
    dividerLeft: string;
    header: string;
    column: {
      base: string;
      wrapper: string;
      label: string;
      list: string;
      scrollbar: string;
    };
    items: {
      wrapper: string;
      container: string;
      list: string;
      divider: string;
      item: {
        base: string;
        selected: string;
        disabled: string;
      };
    };
  };
  /** Class names for the preset options section. */
  presets?: {
    wrapper: string;
    divider: string;
    base: string;
    group: string;
    item: {
      base: string;
      active: string;
    };
  };
}

export const calendarTheme: CalendarTheme = {
  base: 'relative overflow-hidden',
  header: {
    base: 'flex text-center justify-between mb-2 items-center text-text-secondary',
    prev: 'text-xl leading-4',
    mid: '',
    next: 'text-xl leading-4'
  },
  title: 'text-base font-semibold leading-[normal]',
  content: 'flex',
  days: {
    header:
      'text-center grid grid-cols-7 mb-1 pt-2 font-medium text-text-secondary',
    dayOfWeek: 'text-center font-medium',
    week: 'grid grid-cols-7',
    day: 'font-normal flex p-2 border border-transparent text-text-secondary opacity-90 hover:bg-primary-hover hover:disabled:bg-transparent! hover:text-white disabled:text-text-secondary/60',
    outside: 'opacity-40 text-text-secondary',
    startRangeDate: 'rounded-tl-md rounded-tr-none rounded-br-none',
    cornerStartDateBottom: 'rounded-bl-none',
    endRangeDate: 'rounded-br-md rounded-bl-none rounded-tl-none',
    cornerEndDateTop: 'rounded-tr-none',
    range: 'rounded-none',
    selected: 'text-white border-transparent opacity-100',
    hover:
      'rounded-sm bg-primary-active text-white border-transparent opacity-100',
    today: 'rounded-sm border border-panel-accent text-text-primary'
  },
  months: {
    root: 'grid grid-cols-4 gap-2',
    month:
      'p-1.5 hover:bg-primary-hover hover:text-white border-transparent text-text-secondary',
    selected: 'border-transparent text-white'
  },
  years: {
    root: 'grid grid-cols-4 gap-2',
    year: 'p-1.5 hover:bg-primary-hover hover:text-white border-transparent text-text-secondary',
    selected: 'border-transparent text-white'
  },
  time: {
    base: 'flex flex-col h-full gap-0',
    wrapper: 'mt-4 bg-panel z-10 flex flex-row border-panel-accent',
    dividerTop: 'w-full',
    dividerLeft: 'h-auto mt-2.5 mx-1 bg-surface z-10',
    header: 'flex gap-4 px-0.5 pb-2.5 mb-2',
    column: {
      base: 'w-6',
      wrapper: 'overflow-y-auto h-52',
      label: 'text-center text-xs text-text-secondary',
      list: 'p-0 m-0 list-none',
      scrollbar:
        'scrollbar-thin scrollbar-thumb-panel-active scrollbar-track-transparent hover:scrollbar-thumb-text-secondary'
    },
    items: {
      wrapper: 'flex flex-row flex-auto gap-0.25 pt-1 h-46',
      container: 'h-full',
      list: 'relative h-full p-0 m-0 list-none overflow-y-auto [&::-webkit-scrollbar]:hidden scrollbar-none touch-pan-y',
      divider: 'mx-0',
      item: {
        base: 'py-0.5 px-1.5 text-center select-none cursor-pointer rounded transition-colors duration-150 text-text-secondary hover:bg-primary-hover hover:text-white',
        selected: 'bg-primary text-white',
        disabled: 'cursor-not-allowed opacity-50'
      }
    }
  },
  presets: {
    wrapper: 'bg-panel z-10',
    divider: 'mx-1 h-[calc(100%-26px)] self-end',
    base: 'relative h-59 max-w-52 pr-1 overflow-y-auto [&::-webkit-scrollbar]:hidden scrollbar-none touch-pan-y space-y-0',
    group: 'text-sm font-medium my-1 !pr-0 !pl-0 !text-text-secondary',
    item: {
      base: 'text-sm p-1.5 my-0.5 duration-0 hover:text-white hover:bg-primary-hover hover:rounded-sm',
      active: 'bg-primary text-white rounded-sm'
    }
  }
};
