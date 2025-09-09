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
  contentContainer: string;
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
  base: 'relative overflow-hidden border rounded-(--calendar-details-corner-radius-default) border-calendar-colors-container-stroke-default [&>hr]:bg-calendar-colors-container-stroke-default',
  header: {
    base: 'flex gap-(--calendar-details-space-between-default) text-center justify-between py-(--calendar-details-vertical-padding-default) px-(--calendar-details-horizontal-padding-header) items-center',
    prev: 'text-lg leading-4 min-w-8 text-center text-buttons-colors-core-icon-ghost-assets-resting hover:text-buttons-colors-core-icon-ghost-assets-hover focus-visible:text-buttons-colors-core-icon-ghost-assets-hover',
    mid: 'group',
    next: 'text-lg leading-4 min-w-8 text-center text-buttons-colors-core-icon-ghost-assets-resting hover:text-buttons-colors-core-icon-ghost-assets-hover focus-visible:text-buttons-colors-core-icon-ghost-assets-hover',
    divider: 'm-0 bg-calendar-colors-container-stroke-default'
  },
  title:
    'font-semibold text-base leading-8 text-calendar-colors-date-text-today group-hover:text-buttons-colors-core-icon-ghost-text-hover group-focus-visible:text-buttons-colors-core-icon-ghost-text-hover',
  content: 'flex pt-2',
  contentContainer: 'relative flex h-full max-h-80',
  days: {
    header:
      'pt-0 text-center grid grid-cols-7 gap-(--calendar-details-space-between-default) font-semibold text-calendar-colors-label-text-default px-(--calendar-details-horizontal-padding-content) pb-1',
    dayOfWeek: 'flex items-center justify-center text-xs min-w-8 py-2',
    week: 'grid grid-cols-7 gap-(--calendar-details-space-between-default) py-1 px-(--calendar-details-horizontal-padding-content) last:pb-(--calendar-details-horizontal-padding-content)',
    day: `
      font-normal text-xs flex p-2 rounded-(--calendar-details-corner-radius-default) size-8 border 
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
    root: 'grid grid-cols-4 gap-(--calendar-details-space-between-default)',
    month: `
          font-normal text-xs flex p-2 rounded-(--calendar-details-corner-radius-default) border 
          border-calendar-colors-date-stroke-resting hover:border-calendar-colors-date-stroke-hove focus-visible:border-calendar-colors-date-stroke-hover
          text-calendar-colors-date-text-resting hover:text-calendar-colors-date-text-hove focus-visible:text-calendar-colors-date-text-hover
          bg-calendar-colors-date-background-resting hover:bg-calendar-colors-date-background-hover focus-visible:bg-calendar-colors-date-background-hover 
        `,
    selected:
      'bg-calendar-colors-date-background-selected text-calendar-colors-date-text-selected'
  },
  years: {
    root: 'grid grid-cols-4 gap-(--calendar-details-space-between-default)',
    year: `
      font-normal text-xs flex p-2 rounded-(--calendar-details-corner-radius-default) border 
      border-calendar-colors-date-stroke-resting hover:border-calendar-colors-date-stroke-hove focus-visible:border-calendar-colors-date-stroke-hover
      text-calendar-colors-date-text-resting hover:text-calendar-colors-date-text-hove focus-visible:text-calendar-colors-date-text-hover
      bg-calendar-colors-date-background-resting hover:bg-calendar-colors-date-background-hover focus-visible:bg-calendar-colors-date-background-hover 
    `,
    selected:
      'bg-calendar-colors-date-background-selected text-calendar-colors-date-text-selected'
  },
  time: {
    base: 'pr-1 flex flex-col h-full gap-0 text-xs text-buttons-colors-core-icon-ghost-assets-resting',
    wrapper: 'z-10 flex flex-row',
    dividerTop: 'hidden',
    dividerLeft:
      'h-auto mx-1 z-10 bg-calendar-colors-container-stroke-default mt-1',
    header:
      'flex gap-(--calendar-details-space-between-default) px-0.5 pb-2.5 mb-2',
    column: {
      base: 'w-6',
      wrapper: 'overflow-y-auto h-52',
      label: 'text-center text-xs text-gray-500',
      list: 'p-0 m-0 list-none',
      scrollbar: ''
    },
    items: {
      wrapper: 'flex flex-row flex-auto gap-0.25 h-full pt-2',
      container: 'h-full',
      list: 'relative h-full m-0 list-none overflow-y-auto [&::-webkit-scrollbar]:hidden scrollbar-none touch-pan-y',
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
    wrapper: 'z-10 pl-2 py-1 items-start',
    divider: 'mx-1 self-end bg-calendar-colors-container-stroke-default',
    base: 'relative max-w-52 pr-1 overflow-y-auto [&::-webkit-scrollbar]:hidden scrollbar-none touch-pan-y space-y-0 h-full',
    group: 'text-xs font-medium my-1 !pr-0 !pl-0',
    item: {
      base: 'text-xs p-1.5 my-0.5 duration-0 text-select-menu-items-color-item-text-row-resting ',
      active: 'text-select-menu-items-color-item-text-row-selected'
    }
  }
};
