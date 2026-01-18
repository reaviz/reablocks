export interface ListTheme {
  base: string;
  header: string;
  listItem: {
    base: string;
    disabled: string;
    active: string;
    clickable: string;
    disablePadding: string;
    disableGutters: string;
    dense: {
      base: string;
      content: string;
      startAdornment: string;
      endAdornment: string;
    };
    adornment: {
      base: string;
      start: string;
      end: string;
      svg: string;
    };
    content: string;
  };
}

export const defaultListTheme: ListTheme = {
  base: 'flex flex-col text-text-primary',
  header: 'pl-2 pr-2 text-text-primary',
  listItem: {
    base: 'items-center flex p-2.5 relative rounded-none hover:bg-panel-accent hover:text-mystic light:hover:bg-vulcan/5 light:hover:text-text-secondary [&:has(h3)]:hover:bg-transparent',
    disabled:
      'cursor-not-allowed pointer-events-none opacity-40 text-text-secondary',
    active: 'text-primary-active hover:text-mystic',
    clickable:
      'cursor-pointer transition-color duration-300 ease-linear transition-bg duration-300 ease-linear hover:color-inherit hover:bg-transparent',
    disablePadding: 'p-0',
    disableGutters: 'pl-0 pr-0',
    dense: {
      base: 'p-1',
      content: '',
      startAdornment: 'pr-[calc(5/2)]',
      endAdornment: 'pl-[calc(5/2)]'
    },
    adornment: {
      base: 'items-center flex',
      start: 'pr-1',
      end: 'pl-1',
      svg: 'fill-current'
    },
    content: 'overflow-wrap break-word word-wrap break-all flex-1'
  }
};

export const unifyListTheme: ListTheme = {
  base: 'flex flex-col gap-1 p-(--select-menu-items-details-horizontal-padding-container) text-navigation-colors-text-resting',
  header:
    'px-(--select-menu-items-details-horizontal-padding-header) py-(--select-menu-items-details-vertical-padding-base) border rounded-md border-select-menu-items-color-item-stroke-header-resting text-navigation-colors-text-static bg-select-menu-items-color-item-background-header-resting text-xs font-semibold',
  listItem: {
    base: 'items-center flex relative rounded-none flex-1 px-(--select-menu-items-details-horizontal-padding-row) py-(--spacing-padding-2xs) whitespace-break-spaces break-words border border-navigation-colors-stroke-row-items-resting rounded-md text-xs outline-none text-navigation-colors-text-resting',
    disabled:
      'cursor-not-allowed opacity-40 hover:border-select-menu-items-color-item-stroke-row-resting hover:bg-select-menu-items-color-item-stroke-row-resting text-navigation-colors-text-static',
    active:
      'border-navigation-colors-stroke-row-items-selected bg-navigation-colors-background-row-items-selected hover:border-navigation-colors-stroke-row-items-selected hover:bg-navigation-colors-background-row-items-selected text-navigation-colors-text-selected',
    clickable:
      'cursor-pointer hover:border-navigation-colors-stroke-row-items-hover hover:bg-navigation-colors-background-row-items-hover hover:text-navigation-colors-text-hover focus-visible:border-navigation-colors-stroke-row-items-hover focus-visible:bg-navigation-colors-background-row-items-hover focus-visible:text-navigation-colors-text-hover',
    disablePadding: 'p-0',
    disableGutters: 'px-0',
    dense: {
      base: 'px-(--spacing-padding-3xs)',
      content: '',
      startAdornment: 'pr-[calc(5/2)]',
      endAdornment: 'pl-[calc(5/2)]'
    },
    adornment: {
      base: 'items-center flex',
      start: 'pr-(--spacing-space-between-2xs)',
      end: 'pl-(--spacing-space-between-2xs)',
      svg: 'fill-current'
    },
    content: 'overflow-wrap break-word word-wrap break-all flex-1'
  }
};
