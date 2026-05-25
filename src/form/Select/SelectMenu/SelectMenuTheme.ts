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

export const selectMenuTheme: SelectMenuTheme = {
  base: 'border border-solid rounded-b-md text-center will-change-[transform,opacity] min-w-[112px] max-h-[300px] overflow-y-auto text-left box-border bg-panel text-text-primary border-panel-accent border-t-transparent',
  groupItem: {
    base: 'p-0 border-0 first:pt-2 last:pb-2',
    title: 'font-bold uppercase m-0 px-1.5 py-2.5 text-text-primary',
    size: {
      small: 'px-2.5 text-sm',
      medium: 'px-3 text-sm',
      large: 'px-3.5 text-base'
    }
  },
  option: {
    base: 'flex-1 whitespace-break-spaces break-words py-1.5 px-2.5 text-text-secondary',
    hover: 'hover:bg-panel-accent hover:text-text-primary',
    selected: 'text-primary-active',
    active: 'bg-panel-accent hover:text-text-primary',
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
