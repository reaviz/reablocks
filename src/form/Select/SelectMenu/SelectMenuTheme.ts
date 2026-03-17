export interface SelectMenuTheme {
  base: string;
  groupItem: {
    base: string;
    title: string;
    size: {
      small: string;
      medium: string;
      large: string;
      [key: string]: string;
    };
  };
  option: {
    base: string;
    hover: string;
    selected: string;
    active: string;
    disabled: string;
    checkIcon: string;
    content: string;
  };
  size: {
    small: string;
    medium: string;
    large: string;
    [key: string]: string;
  };
}

const baseTheme: SelectMenuTheme = {
  base: 'border border-solid rounded-b-md text-center will-change-[transform,opacity] min-w-[112px] max-h-[300px] overflow-y-auto text-left box-border',
  groupItem: {
    base: 'p-0 border-0 first:pt-2 last:pb-2',
    title: 'font-bold uppercase m-0 px-1.5 py-2.5',
    size: {
      small: 'px-2.5 text-sm',
      medium: 'px-3 text-sm',
      large: 'px-3.5 text-base'
    }
  },
  option: {
    base: 'flex-1 whitespace-break-spaces break-words py-1.5 px-2.5',
    hover: '',
    selected: '',
    active: '',
    disabled: '',
    checkIcon: 'ml-1',
    content: 'flex flex-row justify-between'
  },
  size: {
    small: 'px-2.5 py-1.5 text-sm',
    medium: 'px-4 py-2 text-base',
    large: 'px-5 py-3 text-lg'
  }
};

export const selectMenuTheme: SelectMenuTheme = {
  ...baseTheme,
  base: [
    baseTheme.base,
    'bg-panel text-text-primary border-panel-accent border-t-transparent'
  ].join(' '),
  groupItem: {
    ...baseTheme.groupItem,
    title: [baseTheme.groupItem.title, 'text-text-primary'].join(' ')
  },
  option: {
    ...baseTheme.option,
    base: [baseTheme.option.base, 'text-text-secondary '].join(' '),
    hover: [
      baseTheme.option.hover,
      'hover:bg-vulcan hover:text-mystic light:hover:bg-vulcan/5 light:hover:text-text-secondary'
    ].join(' '),
    active: [baseTheme.option.active, 'bg-vulcan hover:text-mystic'].join(' '),
    selected: [baseTheme.option.selected, 'text-primary-active'].join(' ')
  }
};
