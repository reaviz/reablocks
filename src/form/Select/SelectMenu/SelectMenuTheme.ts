import type { SelectInputSizeTheme } from '@/form/Select/SelectInput/SelectInputTheme';

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

export const defaultSelectMenuTheme: SelectMenuTheme = {
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
    hover:
      'hover:bg-vulcan hover:text-mystic light:hover:bg-vulcan/5 light:hover:text-text-secondary',
    selected: 'text-primary-active',
    active: 'bg-vulcan hover:text-mystic',
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

export const unifySelectMenuTheme: SelectMenuTheme = {
  base: 'border border-select-menu-items-color-item-stroke-container-resting rounded-md mt-(--spacing-space-between-xs) bg-select-menu-items-color-item-background-container-base backdrop-blur-md min-w-[112px] max-h-[300px] overflow-y-auto text-left box-border [&>div]:gap-0.5',
  groupItem: {
    base: 'p-0',
    title:
      'px-(--select-menu-items-details-horizontal-padding-header) py-(--select-menu-items-details-vertical-padding-base) border rounded-md border-select-menu-items-color-item-stroke-header-resting text-select-menu-items-color-item-text-header-resting bg-select-menu-items-color-item-background-header-resting text-xxs font-semibold',
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
    small:
      'text-xs px-(--spacing-padding-xs) py-(--select-menu-items-details-vertical-padding-base)',
    medium:
      'text-xs px-(--select-menu-items-details-horizontal-padding-row) py-(--select-menu-items-details-vertical-padding-base)',
    large:
      'text-sm px-(--select-menu-items-details-horizontal-padding-row) py-(--select-menu-items-details-vertical-padding-base)'
  }
};
