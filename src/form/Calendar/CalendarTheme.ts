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

export const defaultCalendarTheme: CalendarTheme = {
  base: 'relative overflow-hidden',
  header: {
    base: 'flex text-center justify-between mb-2 items-center text-text-secondary',
    prev: 'text-xl leading-4',
    mid: '',
    next: 'text-xl leading-4'
  },
  title: 'font-semibold leading-[normal]',
  content: 'flex',
  contentContainer: '',
  days: {
    header:
      'text-center grid grid-cols-7 mb-1 pt-2 font-medium text-text-secondary',
    dayOfWeek: 'text-center font-medium',
    week: 'grid grid-cols-7',
    day: 'font-normal flex p-2 border border-transparent text-text-secondary opacity-90 hover:bg-primary-hover hover:disabled:bg-transparent! hover:text-black disabled:text-text-secondary/60',
    outside: ' opacity-40 text-text-secondary',
    startRangeDate: 'rounded-tl-md rounded-tr-none rounded-br-none',
    cornerStartDateBottom: 'rounded-bl-none',
    endRangeDate: 'rounded-br-md rounded-bl-none rounded-tl-none',
    cornerEndDateTop: 'rounded-tr-none',
    range: 'rounded-none',
    selected:
      'text-black border-transparent light:text-white light:border-transparent opacity-100',
    hover:
      'bg-primary-active text-black border-transparent light:text-white opacity-100',
    today: 'rounded-sm border border-panel-accent text-text-primary'
  },
  months: {
    root: 'grid grid-cols-4 gap-2',
    month: [
      'p-1.5',
      'hover:bg-primary-hover hover:text-black border-transparent text-text-secondary light:hover:text-white'
    ].join(' '),
    selected: ['border-transparent text-black light:text-white'].join(' ')
  },
  years: {
    root: 'grid grid-cols-4 gap-2',
    year: [
      'p-1.5',
      'hover:bg-primary-hover hover:text-black border-transparent text-text-secondary light:hover:text-white'
    ].join(' '),
    selected: ['border-transparent text-black light:text-white'].join(' ')
  },
  time: {
    base: 'flex flex-col h-full gap-0',
    wrapper: 'mt-4 bg-panel z-10 flex flex-row',
    dividerTop: 'w-full',
    dividerLeft: 'h-auto mt-2.5 mx-1 bg-surface z-10',
    header: 'flex gap-4 px-0.5 pb-2.5 mb-2',
    column: {
      base: 'w-6',
      wrapper: 'overflow-y-auto h-52',
      label: 'text-center text-xs text-text-secondary',
      list: 'p-0 m-0 list-none',
      scrollbar:
        'scrollbar-thin scrollbar-thumb-gray-300 dark:scrollbar-thumb-gray-600 scrollbar-track-transparent hover:scrollbar-thumb-gray-400 dark:hover:scrollbar-thumb-gray-500'
    },
    items: {
      wrapper: 'flex flex-row flex-auto gap-0.25 pt-1 h-46',
      container: 'h-full',
      list: 'relative h-full p-0 m-0 list-none overflow-y-auto [&::-webkit-scrollbar]:hidden scrollbar-none touch-pan-y',
      divider: 'mx-0',
      item: {
        base: 'py-0.5 px-1.5 text-center select-none cursor-pointer rounded transition-colors duration-150',
        selected: '',
        disabled: 'cursor-not-allowed'
      }
    }
  },
  presets: {
    wrapper: 'bg-panel z-10',
    divider: 'mx-1 h-[calc(100%-26px)] self-end',
    base: 'relative h-59 max-w-52 pr-1 overflow-y-auto [&::-webkit-scrollbar]:hidden scrollbar-none touch-pan-y space-y-0',
    group: 'text-sm font-medium my-1 !pr-0 !pl-0',
    item: {
      base: 'text-sm p-1.5 my-0.5 duration-0',
      active: ''
    }
  }
};

export const unifyCalendarTheme: CalendarTheme = {
  base: 'bg-calendar-colors-container-background-default relative overflow-hidden border rounded-(--calendar-details-corner-radius-default) border-calendar-colors-container-stroke-default [&>hr]:bg-calendar-colors-container-stroke-default',
  header: {
    base: 'flex gap-(--calendar-details-space-between-default) text-center justify-between py-(--calendar-details-vertical-padding-default) px-(--calendar-details-horizontal-padding-header) items-center text-calendar-colors-header-text-default',
    prev: 'text-lg leading-4 min-w-8 text-center text-buttons-colors-core-icon-ghost-assets-resting hover:text-buttons-colors-core-icon-ghost-assets-hover focus-visible:text-buttons-colors-core-icon-ghost-assets-hover',
    mid: 'group',
    next: 'text-lg leading-4 min-w-8 text-center text-buttons-colors-core-icon-ghost-assets-resting hover:text-buttons-colors-core-icon-ghost-assets-hover focus-visible:text-buttons-colors-core-icon-ghost-assets-hover',
    divider: 'm-0 bg-calendar-colors-container-stroke-default'
  },
  title:
    'font-semibold text-base leading-8 text-calendar-colors-date-text-today group-hover:text-buttons-colors-core-icon-ghost-text-hover group-focus-visible:text-buttons-colors-core-icon-ghost-text-hover',
  content: 'flex pt-(--calendar-details-vertical-padding-inside)',
  contentContainer: 'relative flex h-full max-h-80',
  days: {
    header:
      'pt-0 text-center grid grid-cols-7 gap-(--calendar-details-space-between-default) font-semibold text-calendar-colors-label-text-default px-(--calendar-details-horizontal-padding-content) pb-1',
    dayOfWeek:
      'flex items-center justify-center text-xs min-w-(--calendar-details-height-default) py-(--calendar-details-vertical-padding-inside)',
    week: 'grid grid-cols-7 gap-(--calendar-details-space-between-default) py-(--calendar-details-space-between-content) px-(--calendar-details-horizontal-padding-content) last:pb-(--calendar-details-horizontal-padding-content)',
    day: `
      font-normal text-xs flex p-(--calendar-details-vertical-padding-inside) rounded-(--calendar-details-corner-radius-default) size-(--calendar-details-height-default) border
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
          font-normal text-xs flex p-(--calendar-details-vertical-padding-inside) rounded-(--calendar-details-corner-radius-default) border
          border-calendar-colors-date-stroke-resting hover:border-calendar-colors-date-stroke-hover focus-visible:border-calendar-colors-date-stroke-hover
          text-calendar-colors-date-text-resting hover:text-calendar-colors-date-text-hover focus-visible:text-calendar-colors-date-text-hover
          bg-calendar-colors-date-background-resting hover:bg-calendar-colors-date-background-hover focus-visible:bg-calendar-colors-date-background-hover
        `,
    selected:
      'bg-calendar-colors-date-background-selected text-calendar-colors-date-text-selected'
  },
  years: {
    root: 'grid grid-cols-4 gap-(--calendar-details-space-between-default)',
    year: `
      font-normal text-xs flex p-(--calendar-details-vertical-padding-inside) rounded-(--calendar-details-corner-radius-default) border
      border-calendar-colors-date-stroke-resting hover:border-calendar-colors-date-stroke-hover focus-visible:border-calendar-colors-date-stroke-hover
      text-calendar-colors-date-text-resting hover:text-calendar-colors-date-text-hover focus-visible:text-calendar-colors-date-text-hover
      bg-calendar-colors-date-background-resting hover:bg-calendar-colors-date-background-hover focus-visible:bg-calendar-colors-date-background-hover
    `,
    selected:
      'bg-calendar-colors-date-background-selected text-calendar-colors-date-text-selected'
  },
  time: {
    base: 'pr-(--calendar-details-space-between-content) flex flex-col h-full gap-0 text-xs text-buttons-colors-core-icon-ghost-assets-resting',
    wrapper: 'z-10 flex flex-row',
    dividerTop: 'hidden',
    dividerLeft:
      'h-auto mx-(--calendar-details-space-between-content) z-10 bg-calendar-colors-container-stroke-default mt-(--calendar-details-space-between-content)',
    header:
      'flex gap-(--calendar-details-space-between-default) px-0.5 pb-2.5 mb-2',
    column: {
      base: 'w-6',
      wrapper: 'overflow-y-auto h-52',
      label: 'text-center text-xs text-calendar-colors-label-text-default',
      list: 'p-0 m-0 list-none',
      scrollbar: ''
    },
    items: {
      wrapper:
        'flex flex-row flex-auto gap-0.25 h-full pt-(--calendar-details-vertical-padding-inside)',
      container: 'h-full',
      list: 'relative h-full m-0 list-none overflow-y-auto [&::-webkit-scrollbar]:hidden scrollbar-none touch-pan-y',
      divider: 'mx-0 bg-calendar-colors-container-stroke-default',
      item: {
        base: 'bg-calendar-colors-date-background-resting py-(--calendar-details-space-between-content) px-(--spacing-padding-2xs) text-center select-none cursor-pointer rounded transition-colors duration-150 hover:text-buttons-colors-core-icon-ghost-assets-hover hover:bg-calendar-colors-date-background-hover',
        selected:
          'bg-calendar-colors-date-background-selected text-calendar-colors-date-text-selected',
        disabled:
          'cursor-not-allowed opacity-50 hover:bg-transparent hover:text-calendar-colors-date-text-resting'
      }
    }
  },
  presets: {
    wrapper:
      'z-10 pl-(--calendar-details-vertical-padding-inside) py-(--calendar-details-space-between-content) items-start',
    divider:
      'mx-(--calendar-details-space-between-content) self-end bg-calendar-colors-container-stroke-default',
    base: 'relative max-w-52 pr-(--calendar-details-space-between-content) overflow-y-auto [&::-webkit-scrollbar]:hidden scrollbar-none touch-pan-y space-y-0 h-full',
    group:
      'text-xs font-medium my-(--calendar-details-space-between-content) !pr-0 !pl-0',
    item: {
      base: 'text-xs p-(--spacing-padding-2xs) my-(--spacing-padding-4xs) duration-0 text-select-menu-items-color-item-text-row-resting ',
      active: 'text-select-menu-items-color-item-text-row-selected'
    }
  }
};
