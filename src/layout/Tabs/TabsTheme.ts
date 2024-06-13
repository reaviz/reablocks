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

const baseTheme: TabsTheme = {
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
        divider: 'bg-gradient-to-r from-transparent to-transparent via-primary'
      }
    },
    tab: {
      base: 'relative',
      button:
        'transition-colors text-text-content-secondary font-bold hover:text-primary-hover',
      selected: 'text-text-content-primary',
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

export const tabsTheme = baseTheme;

export const legacyTabsTheme: TabsTheme = baseTheme;
