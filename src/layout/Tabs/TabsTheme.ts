export interface TabsTheme {
  base: string;
  list: {
    base: string;
    indicator: {
      base: string;
      size: {
        small: string;
        medium: string;
        large: string;
        [key: string]: string;
      };
    };
    divider: string;
    variant: {
      primary: {
        divider: string;
      };
      secondary: {
        divider: string;
      };
      [key: string]: {
        divider: string;
      };
    };
    tab: {
      base: string;
      button: string;
      selected: string;
      disabled: string;
      size: {
        small: string;
        medium: string;
        large: string;
        [key: string]: string;
      };
    };
  };
  panel: string;
}

export const tabsTheme: TabsTheme = {
  base: 'flex flex-col',
  list: {
    base: 'flex text-center flex-wrap -mb-px',
    indicator: {
      base: 'bg-tabs-colors-underline-stroke-selected group-hover:bg-tabs-colors-underline-stroke-selected-hover group-focus-within:bg-tabs-colors-underline-stroke-selected-hover absolute bottom-0 left-0 right-0 transition-colors',
      size: {
        small: 'h-0.5',
        medium: 'h-0.5',
        large: 'h-1'
      }
    },
    divider: 'w-full h-px border-0',
    variant: {
      primary: {
        divider: ''
      },
      secondary: {
        divider: ''
      }
    },
    tab: {
      base: 'group relative',
      button:
        'transition-colors text-tabs-colors-underline-text-resting border-b border-tabs-colors-underline-background-resting hover:border-tabs-colors-underline-background-hover hover:text-tabs-colors-underline-text-hover focus-visible:text-tabs-colors-underline-text-hover rounded-none',
      selected:
        'text-tabs-colors-underline-text-selected group-hover:text-tabs-colors-underline-text-selected-hover',
      disabled:
        'cursor-not-allowed opacity-40 hover:text-tabs-colors-underline-text-resting',
      size: {
        small: 'pt-0.5 pb-1 px-2 text-xs leading-[18px] font-semibold',
        medium: 'pt-1 pb-2 px-3 text-sm font-semibold',
        large: 'pb-1 px-3 text-md font-semibold'
      }
    }
  },
  panel: 'mt-4'
};
