import { SelectInputSizeTheme } from '@/form/Select/SelectInput/SelectInputTheme';

export interface SelectMenuTheme {
  base: string;
  groupItem: {
    base: string;
    title: string;
    size: SelectInputSizeTheme;
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
  size: SelectInputSizeTheme;
}

export const selectMenuTheme: SelectMenuTheme = {
  base: 'p-1.5 border border-select-menu-items-color-item-stroke-container-resting rounded-md mt-2 bg-select-menu-items-color-item-background-container-base backdrop-blur-md min-w-[112px] max-h-[300px] overflow-y-auto text-left box-border [&>div]:gap-0.5',
  groupItem: {
    base: 'p-0',
    title:
      'px-1 py-2 border rounded-md border-select-menu-items-color-item-stroke-header-resting text-select-menu-items-color-item-text-header-resting bg-select-menu-items-color-item-background-header-resting text-xxs font-semibold',
    size: { small: '', medium: '', large: '' }
  },
  option: {
    base: 'flex-1 whitespace-break-spaces break-words border border-select-menu-items-color-item-stroke-row-resting rounded-md text-select-menu-items-color-item-text-row-resting',
    hover:
      'hover:border-select-menu-items-color-item-stroke-row-hover hover:bg-select-menu-items-color-item-background-row-hover hover:text-select-menu-items-color-item-text-row-selected',
    selected:
      'border-select-menu-items-color-item-stroke-row-selected bg-select-menu-items-color-item-background-row-selected hover:border-select-menu-items-color-item-stroke-row-selected hover:bg-select-menu-items-color-item-background-row-selected',
    active:
      'border-select-menu-items-color-item-stroke-row-hover bg-select-menu-items-color-item-background-row-hover',
    disabled:
      'hover:border-select-menu-items-color-item-stroke-row-resting hover:bg-select-menu-items-color-item-stroke-row-resting',
    checkIcon: 'ml-1',
    content: 'flex flex-row justify-between'
  },
  size: {
    small: 'text-xs px-2 py-2',
    medium: 'text-xs px-3 py-2',
    large: 'text-sm px-3 py-2'
  }
};
