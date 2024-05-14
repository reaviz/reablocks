export interface TabsTheme {
  base: string;
  list: {
    base: string;
    indicator: {
      base: string;
      variant: {
        line: string;
        card: string;
      };
      size: {
        small: string;
        medium: string;
        large: string;
      };
    };
    divider: string;
    variant: {
      primary: {
        base: string;
        divider: string;
      };
      secondary: {
        base: string;
        divider: string;
      };
      tertiary: {
        base: string;
      };
    };
    tab: {
      base: string;
      button: string;
      selected: string;
      disabled: string;
      variant: {
        text: string;
        button: string;
      };
      size: {
        small: string;
        medium: string;
        large: string;
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
      base: 'absolute bottom-0 left-0 right-0',
      variant: {
        line: 'bg-primary',
        card: 'bg-gray-900 light:bg-gray-100'
      },
      size: {
        small: 'h-0.5',
        medium: 'h-0.5',
        large: 'h-1'
      }
    },
    divider: 'w-full h-px border-0',
    variant: {
      primary: {
        base: '',
        divider: 'bg-surface'
      },
      secondary: {
        base: '',
        divider: 'bg-gradient-to-r from-transparent to-transparent via-primary'
      },
      tertiary: {
        base: 'border border-solid border-gray-700 rounded light:border-gray-200'
      }
    },
    tab: {
      base: 'relative',
      button: 'transition-colors text-panel-secondary-content',
      selected: 'text-panel-content',
      disabled: 'cursor-not-allowed opacity-40',
      variant: {
        text: 'font-bold hover:text-primary-hover',
        button:
          'font-medium hover:bg-primary-hover hover:text-black light:hover:text-white'
      },
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
