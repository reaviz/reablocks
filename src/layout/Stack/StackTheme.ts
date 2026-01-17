export interface StackTheme {
  base: string;
  dense: string;
  inline: string;
  direction: {
    row: string;
    column: string;
    rowReverse: string;
    columnReverse: string;
  };
  alignItems: {
    start: string;
    end: string;
    center: string;
    stretch: string;
  };
  justifyContent: {
    start: string;
    end: string;
    center: string;
    spaceBetween: string;
  };
}

export const defaultStackTheme: StackTheme = {
  base: 'flex items-center gap-2.5 text-text-primary',
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

export const unifyStackTheme: StackTheme = {
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
