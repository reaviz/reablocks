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

export const listTheme = {
  base: 'flex flex-col gap-1 p-(--select-menu-items-details-horizontal-padding-container)',
  header:
    'px-1 py-2 border rounded-md border-select-menu-items-color-item-stroke-header-resting text-select-menu-items-color-item-text-header-resting bg-select-menu-items-color-item-background-header-resting text-xs font-semibold',
  listItem: {
    base: 'items-center flex relative rounded-none flex-1 px-3 py-2.5 whitespace-break-spaces break-words border border-select-menu-items-color-item-stroke-row-resting rounded-md text-xs outline-none',
    disabled:
      'cursor-not-allowed opacity-40 hover:border-select-menu-items-color-item-stroke-row-resting hover:bg-select-menu-items-color-item-stroke-row-resting',
    active:
      'border-select-menu-items-color-item-stroke-row-selected bg-select-menu-items-color-item-background-row-selected hover:border-select-menu-items-color-item-stroke-row-selected hover:bg-select-menu-items-color-item-background-row-selected',
    clickable:
      'cursor-pointer hover:border-select-menu-items-color-item-stroke-row-hover hover:bg-select-menu-items-color-item-background-row-hover focus-visible:border-select-menu-items-color-item-stroke-row-hover focus-visible:bg-select-menu-items-color-item-background-row-hover',
    disablePadding: 'p-0',
    disableGutters: 'px-0',
    dense: {
      base: 'px-1',
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
