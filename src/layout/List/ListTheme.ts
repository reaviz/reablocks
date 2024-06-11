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

const baseTheme: ListTheme = {
  base: 'flex flex-col',
  header: 'pl-2 pr-2',
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

export const listTheme = {
  ...baseTheme,
  base: [baseTheme.base, 'text-surface-content'].join(' '),
  header: [baseTheme.header, 'text-surface-content'].join(' '),
  listItem: {
    ...baseTheme.listItem,
    base: [
      baseTheme.listItem.base,
      'hover:bg-panel-accent hover:text-mystic light:hover:bg-vulcan/5 light:hover:text-panel-secondary-content [&:has(h3)]:hover:bg-transparent'
    ].join(' '),
    active: [
      baseTheme.listItem.active,
      'text-primary-active hover:text-mystic'
    ].join(' '),
    disabled: [
      baseTheme.listItem.disabled,
      'opacity-40 text-panel-secondary-content'
    ].join(' ')
  }
};

export const legacyListTheme = {
  ...baseTheme,
  base: [baseTheme.base, 'text-[var(--list-item-color)]'].join(' '),
  header: [
    baseTheme.header,
    'pl-[var(--spacing-md)] pr-[var(--spacing-md)]'
  ].join(' '),

  listItem: {
    ...baseTheme.listItem,
    base: [
      baseTheme.listItem.base,
      'p-[var(--list-item-spacing)] text-[var(--list-item-color)] rounded-[var(--list-item-border-radius)]'
    ].join(' '),
    clickable: [
      baseTheme.listItem.clickable,
      'hover:text-[var(--list-item-color-active)] hover:bg-[var(--list-item-background-active)]'
    ].join(' '),
    dense: {
      ...baseTheme.listItem.dense,
      base: [
        baseTheme.listItem.dense.base,
        '[padding:_var(--list-item-dense-spacing)]'
      ].join(' '),
      startAdornment: [
        baseTheme.listItem.dense.startAdornment,
        '[padding-right:_calc(var(--spacing-md)_/_2)]'
      ].join(' '),
      endAdornment: [
        baseTheme.listItem.dense.endAdornment,
        '[padding-left:_calc(var(--spacing-md)_/_2)]'
      ].join(' ')
    },
    adornment: {
      ...baseTheme.listItem.adornment,
      start: [
        baseTheme.listItem.adornment.start,
        '[padding-right:_calc(var(--spacing-sm)_/_2)]'
      ].join(' '),
      end: [
        baseTheme.listItem.adornment.start,
        '[padding-left:_calc(var(--spacing-sm)_/_2)]'
      ].join(' '),
      svg: [
        baseTheme.listItem.adornment.svg,
        'fill:[var(--list-item-adornment-fill)]'
      ].join(' ')
    }
  }
};
