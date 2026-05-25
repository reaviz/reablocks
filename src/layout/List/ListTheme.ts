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
      start: string;
      end: string;
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
  base: 'flex flex-col text-text-primary',
  header: 'pl-2 pr-2 text-sm font-semibold mb-0.5 text-text-primary',
  listItem: {
    base: 'items-center flex p-2.5 relative rounded-none hover:bg-panel-accent hover:text-text-primary [&:has(h3)]:hover:bg-transparent',
    disabled:
      'cursor-not-allowed pointer-events-none opacity-40 text-text-secondary',
    active: 'text-primary-active hover:text-text-primary',
    clickable:
      'cursor-pointer transition-color duration-300 ease-linear transition-bg duration-300 ease-linear hover:color-inherit hover:bg-transparent',
    disablePadding: 'p-0',
    disableGutters: 'pl-0 pr-0',
    dense: {
      base: 'p-1',
      content: '',
      start: 'pr-[calc(5/2)]',
      end: 'pl-[calc(5/2)]'
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
