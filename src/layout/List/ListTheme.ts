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

const baseTheme: ListTheme = {
  base: 'flex flex-col',
  header: 'pl-2 pr-2 text-sm font-semibold mb-0.5',
  listItem: {
    base: 'items-center flex p-2.5 relative rounded-none',
    disabled: 'cursor-not-allowed pointer-events-none',
    active: '',
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

export const listTheme = {
  ...baseTheme,
  base: [baseTheme.base, 'text-text-primary'].join(' '),
  header: [baseTheme.header, 'text-text-primary'].join(' '),
  listItem: {
    ...baseTheme.listItem,
    base: [
      baseTheme.listItem.base,
      'hover:bg-panel-accent hover:text-mystic light:hover:bg-vulcan/5 light:hover:text-text-secondary [&:has(h3)]:hover:bg-transparent'
    ].join(' '),
    active: [
      baseTheme.listItem.active,
      'text-primary-active hover:text-mystic'
    ].join(' '),
    disabled: [
      baseTheme.listItem.disabled,
      'opacity-40 text-text-secondary'
    ].join(' ')
  }
};
