export interface ListTheme {
  base?: string;
  header?: string;
  listItem?: {
    base?: string;
    disabled?: string;
    active?: string;
    clickable?: string;
    disablePadding?: string;
    disableGutters?: string;
    dense?: {
      base?: string;
      content?: string;
      startAdornment?: string;
      endAdornment?: string;
    };
    adornment?: {
      base?: string;
      start?: string;
      end?: string;
      svg?: string;
    };
    content?: string;
  };
}

const baseTheme: ListTheme = {
  base: 'flex flex-col',
  header: 'pl-2 pr-2',
  listItem: {
    base: 'items-center flex p-2.5 relative rounded-none',
    disabled: 'cursor-not-allowed',
    active: 'underline',
    clickable:
      'cursor-pointer transition-color duration-300 ease-linear transition-bg duration-300 ease-linear hover:color-inherit hover:bg-transparent',
    disablePadding: 'p-0',
    disableGutters: 'pl-0 pr-0',
    dense: {
      base: 'p-1',
      content: 'text-xs',
      startAdornment: 'pr-[calc(5/2)]',
      endAdornment: 'pl-[calc(5/2)]'
    },
    adornment: {
      base: 'items-center flex',
      start: 'pr-1',
      end: 'pl-1',
      svg: 'fill-current'
    },
    content: 'text-sm overflow-wrap break-word word-wrap break-all flex-1'
  }
};

export const lightListTheme = {
  ...baseTheme,
  base: [baseTheme.base, 'text-black'].join(' '),
  header: [baseTheme.header, 'text-black'].join(' ')
};

export const darkListTheme = {
  ...baseTheme,
  base: [baseTheme.base, 'text-white'].join(' '),
  header: [baseTheme.header, 'text-white'].join(' ')
};
