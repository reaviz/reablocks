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
  groupTitle: 'text-xs font-bold uppercase m-0;',
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
  base: [baseTheme.base, 'bg-blue-100 border-blue-200 text-black'].join(' '),
  option: {
    ...baseTheme.option,
    base: [baseTheme.option.base, 'text-black'].join(' '),
    hover: [baseTheme.option.hover, 'hover:bg-blue-200'].join(' '),
    active: [baseTheme.option.active, 'bg-primary-200'].join(' '),
    selected: [
      baseTheme.option.selected,
      'bg-primary-300 hover:bg-primary-400'
    ].join(' ')
  }
};

export const darkSelectMenuTheme: SelectMenuTheme = {
  ...baseTheme,
  base: [baseTheme.base, 'bg-neutral-900', 'border-gray-700'].join(' '),
  option: {
    ...baseTheme.option,
    base: [baseTheme.option.base, 'text-white'].join(' '),
    hover: [baseTheme.option.hover, 'hover:bg-neutral-800'].join(' '),
    active: [baseTheme.option.active, 'bg-neutral-800'].join(' '),
    selected: [
      baseTheme.option.selected,
      'bg-primary-600 hover:bg-primary-700'
    ].join(' ')
  }
};
