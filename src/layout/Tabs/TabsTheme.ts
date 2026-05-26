export interface TabsTheme {
  /** CSS class applied to the root tabs container. */
  base: string;
  /** Class names applied to the tabs list and its inner elements. */
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
  /** CSS class applied to the tab panel content area. */
  panel: string;
}

export const tabsTheme: TabsTheme = {
  base: 'flex flex-col',
  list: {
    base: 'flex text-center flex-wrap -mb-px',
    indicator: {
      base: 'bg-primary absolute bottom-0 left-0 right-0',
      size: {
        small: 'h-0.5',
        medium: 'h-0.5',
        large: 'h-1'
      }
    },
    divider: 'w-full h-px border-0',
    variant: {
      primary: {
        divider: 'bg-surface'
      },
      secondary: {
        divider: 'bg-linear-to-r from-transparent to-transparent via-primary'
      }
    },
    tab: {
      base: 'relative',
      button:
        'transition-colors text-text-secondary font-bold hover:text-primary-hover',
      selected: 'text-text-primary',
      disabled: 'cursor-not-allowed opacity-40',
      size: {
        small: 'pb-1 text-sm',
        medium: 'pb-2 text-lg',
        large: 'pb-4 text-xl'
      }
    }
  },
  panel: 'mt-2'
};
