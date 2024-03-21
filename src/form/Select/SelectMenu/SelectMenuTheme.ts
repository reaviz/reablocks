export interface SelectMenuTheme {
  base: string;
  groupItem: string;
  groupTitle: string;
  option: {
    base: string;
    hover: string;
    selected: string;
    active: string;
    disabled: string;
  };
}

const baseTheme: SelectMenuTheme = {
  base: 'border border-solid rounded-b-md text-center will-change-[transform,opacity] min-w-[112px] max-h-[300px] overflow-y-auto text-left box-border',
  groupItem: 'p-0 border-0',
  groupTitle: 'text-xs font-bold uppercase m-0 px-1.5 py-2.5',
  option: {
    base: 'text-sm flex-1 whitespace-break-spaces break-words py-1.5 px-2.5',
    hover: '',
    selected: '',
    active: '',
    disabled: ''
  }
};

export const lightSelectMenuTheme: SelectMenuTheme = {
  ...baseTheme,
  base: [baseTheme.base, 'bg-light-background border-gray-400 text-black'].join(
    ' '
  ),
  groupTitle: [baseTheme.groupTitle, 'text-gray-500'].join(' '),
  option: {
    ...baseTheme.option,
    base: [baseTheme.option.base, 'text-black'].join(' '),
    hover: [
      baseTheme.option.hover,
      'hover:bg-primary-500 hover:text-white'
    ].join(' '),
    active: [baseTheme.option.active, 'bg-primary-500 text-white'].join(' '),
    selected: [baseTheme.option.selected, 'bg-primary-500 text-white'].join(' ')
  }
};

export const darkSelectMenuTheme: SelectMenuTheme = {
  ...baseTheme,
  base: [baseTheme.base, 'bg-dark-background', 'border-gray-700'].join(' '),
  groupTitle: [baseTheme.groupTitle, 'text-zinc-500'].join(' '),
  option: {
    ...baseTheme.option,
    base: [baseTheme.option.base, 'text-white'].join(' '),
    hover: [baseTheme.option.hover, 'hover:bg-zinc-700'].join(' '),
    active: [baseTheme.option.active, 'bg-zinc-700'].join(' '),
    selected: [
      baseTheme.option.selected,
      'bg-primary-600 hover:bg-primary-700'
    ].join(' ')
  }
};

export const cssVarsSelectMenuTheme: SelectMenuTheme = {
  ...baseTheme,
  base: [
    baseTheme.base,
    'bg-[var(--select-menu-background)] [border:_var(--select-menu-border)] rounded-[var(--select-menu-border-radius)]'
  ].join(' '),
  groupTitle: [baseTheme.groupTitle, 'text-gray-600'].join(' '),
  option: {
    ...baseTheme.option,
    base: [
      baseTheme.option.base,
      'text-[var(--select-menu-item-color)] [padding:_var(--select-menu-item-spacing)]'
    ].join(' '),
    hover: [
      baseTheme.option.hover,
      'hover:bg-[var(--select-menu-item-active-background)] hover:text-[var(--select-menu-item-active-color)]'
    ].join(' '),
    active: [
      baseTheme.option.active,
      'hover:bg-[var(--select-menu-item-active-background)] text-[var(--select-menu-item-active-color)]'
    ].join(' '),
    selected: [
      baseTheme.option.selected,
      'bg-[var(--select-menu-item-selected-background)] text-[var(--select-menu-item-selected-color)]'
    ].join(' ')
  }
};
