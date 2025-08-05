export interface CalendarTheme {
  base: string;
  header: {
    base: string;
    prev: string;
    mid: string;
    next: string;
    divider?: string;
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
  time: {
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
  presets: {
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
  base: 'relative overflow-hidden border rounded-sm border-calendar-colors-container-stroke-default [&>hr]:bg-calendar-colors-container-stroke-default',
  header: {
    base: 'flex gap-2 text-center justify-between py-3 px-2 items-center',
    prev: 'text-xl leading-4 min-w-8 text-center text-buttons-colors-core-icon-ghost-assets-resting hover:text-buttons-colors-core-icon-ghost-assets-hover focus-visible:text-buttons-colors-core-icon-ghost-assets-hover',
    mid: 'group',
    next: 'text-xl leading-4 min-w-8 text-center text-buttons-colors-core-icon-ghost-assets-resting hover:text-buttons-colors-core-icon-ghost-assets-hover focus-visible:text-buttons-colors-core-icon-ghost-assets-hover',
    divider: 'bg-calendar-colors-container-stroke-default'
  },
  title:
    'font-semibold text-lg leading-8 text-calendar-colors-date-text-today group-hover:text-buttons-colors-core-icon-ghost-text-hover group-focus-visible:text-buttons-colors-core-icon-ghost-text-hover',
  content: 'flex',
  days: {
    header:
      'text-center grid grid-cols-7 gap-2 font-semibold pt-2 pb-1 px-3 text-calendar-colors-label-text-default',
    dayOfWeek: 'flex items-center justify-center text-sm min-w-8 py-2',
    week: 'grid grid-cols-7 gap-2 py-1 px-3 last:pb-3',
    day: `
      font-normal text-sm flex p-2 rounded-sm size-8 border 
      border-calendar-colors-date-stroke-resting focus-visible:border-calendar-colors-date-stroke-hover
      text-calendar-colors-date-text-resting focus-visible:text-calendar-colors-date-text-hover
      bg-calendar-colors-date-background-resting focus-visible:bg-calendar-colors-date-background-hover 
    `,
    outside: 'opacity-40',
    startRangeDate: '',
    cornerStartDateBottom: '',
    endRangeDate: '',
    cornerEndDateTop: '',
    range: '',
    selected:
      'bg-calendar-colors-date-background-selected text-calendar-colors-date-text-selected',
    hover:
      'bg-calendar-colors-date-background-hover border-calendar-colors-date-stroke-hover text-calendar-colors-date-text-hover',
    today: 'border-calendar-colors-date-stroke-today'
  },
  months: {
    root: 'grid grid-cols-4 gap-2 p-3',
    month: `
          font-normal text-sm flex p-2 rounded-sm border 
          border-calendar-colors-date-stroke-resting hover:border-calendar-colors-date-stroke-hove focus-visible:border-calendar-colors-date-stroke-hover
          text-calendar-colors-date-text-resting hover:text-calendar-colors-date-text-hove focus-visible:text-calendar-colors-date-text-hover
          bg-calendar-colors-date-background-resting hover:bg-calendar-colors-date-background-hover focus-visible:bg-calendar-colors-date-background-hover 
        `,
    selected:
      'bg-calendar-colors-date-background-selected text-calendar-colors-date-text-selected'
  },
  years: {
    root: 'grid grid-cols-4 gap-2 p-3',
    year: `
      font-normal text-sm flex p-2 rounded-sm border 
      border-calendar-colors-date-stroke-resting hover:border-calendar-colors-date-stroke-hove focus-visible:border-calendar-colors-date-stroke-hover
      text-calendar-colors-date-text-resting hover:text-calendar-colors-date-text-hove focus-visible:text-calendar-colors-date-text-hover
      bg-calendar-colors-date-background-resting hover:bg-calendar-colors-date-background-hover focus-visible:bg-calendar-colors-date-background-hover 
    `,
    selected:
      'bg-calendar-colors-date-background-selected text-calendar-colors-date-text-selected'
  },
  time: {
    base: 'flex flex-col h-full gap-0 text-sm text-buttons-colors-core-icon-ghost-assets-resting',
    wrapper: 'bg-panel z-10 flex flex-row',
    dividerTop: 'hidden',
    dividerLeft:
      'h-auto mx-1 bg-surface z-10 bg-calendar-colors-container-stroke-default',
    header: 'flex gap-4 px-0.5 pb-2.5 mb-2',
    column: {
      base: 'w-6',
      wrapper: 'overflow-y-auto h-52',
      label: 'text-center text-sm text-gray-500',
      list: 'p-0 m-0 list-none',
      scrollbar: ''
    },
    items: {
      wrapper: 'flex flex-row flex-auto gap-0.25 h-46',
      container: 'h-full',
      list: 'relative h-full p-0 m-0 list-none overflow-y-auto [&::-webkit-scrollbar]:hidden scrollbar-none touch-pan-y',
      divider: 'mx-0 bg-calendar-colors-container-stroke-default',
      item: {
        base: 'py-1 px-1.5 text-center select-none cursor-pointer rounded transition-colors duration-150 hover:text-buttons-colors-core-icon-ghost-assets-hover hover:bg-calendar-colors-date-background-hover',
        selected:
          'bg-calendar-colors-date-background-selected text-calendar-colors-date-text-selected',
        disabled:
          'cursor-not-allowed opacity-50 hover:bg-transparent hover:text-calendar-colors-date-text-resting'
      }
    }
  },
  presets: {
    wrapper: 'bg-panel z-10',
    divider: 'mx-1 h-[calc(100%-26px)] self-end ',
    base: 'relative h-59 max-w-52 pr-1 overflow-y-auto [&::-webkit-scrollbar]:hidden scrollbar-none touch-pan-y space-y-0',
    group: 'text-sm font-medium my-1 !pr-0 !pl-0',
    item: {
      base: 'text-sm p-1.5 my-0.5 duration-0',
      active: ''
    }
  }
};
