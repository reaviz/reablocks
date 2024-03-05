export interface StackTheme {
  base?: string;
  dense?: string;
  inline?: string;
  direction?: {
    row?: string;
    column?: string;
    rowReverse?: string;
    columnReverse?: string;
  };
  alignItems?: {
    start?: string;
    end?: string;
    center?: string;
    stretch?: string;
  };
  justifyContent?: {
    start?: string;
    end?: string;
    center?: string;
    spaceBetween?: string;
  };
}

const baseTheme: StackTheme = {
  base: 'flex items-center gap-2.5',
  dense: 'gap-1',
  inline: 'inline-flex',
  direction: {
    row: 'flex-row',
    column: 'flex-col',
    rowReverse: 'flex-row-reverse',
    columnReverse: 'flex-col-reverse'
  },
  alignItems: {
    start: 'items-start',
    end: 'items-end',
    center: 'items-center',
    stretch: 'items-stretch'
  },
  justifyContent: {
    start: 'justify-start',
    end: 'justify-end',
    center: 'justify-center',
    spaceBetween: 'justify-between'
  }
};

export const lightStackTheme = {
  ...baseTheme,
  base: [baseTheme.base, 'text-black'].join(' ')
};

export const darkStackTheme = {
  ...baseTheme,
  base: [baseTheme.base, ''].join(' ')
};
