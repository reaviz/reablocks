export interface TabsTheme {
  base: string;
  list: {
    base: string;
    indicator: string;
    divider: string;
    variant: {
      primary: {
        indicator: string;
        divider: string;
      };
      secondary: {
        indicator: string;
        divider: string;
      };
    };
    tab: {
      base: string;
      button: string;
      selected: string;
      disabled: string;
      variant: {
        primary: {
          button: string;
        };
        secondary: {
          button: string;
        };
      };
    };
  };
  panel: string;
}

const baseTheme: TabsTheme = {
  base: 'flex flex-col',
  list: {
    base: 'flex text-center flex-wrap -mb-px',
    indicator: 'bg-primary absolute bottom-0 left-0 right-0',
    divider: 'w-full h-px border-0',
    variant: {
      primary: {
        indicator: 'h-[4px]',
        divider: 'bg-surface'
      },
      secondary: {
        indicator: 'h-[2px]',
        divider: 'bg-gradient-to-r from-transparent to-transparent via-blue-500'
      }
    },
    tab: {
      base: 'relative',
      button:
        'transition-colors text-panel-secondary-content font-bold hover:text-primary-hover',
      selected: 'text-panel-content',
      disabled: 'cursor-not-allowed opacity-40',
      variant: {
        primary: {
          button: 'pb-4 text-xl'
        },
        secondary: {
          button: 'pb-2 text-lg'
        }
      }
    }
  },
  panel: 'mt-2'
};

export const tabsTheme = baseTheme;

export const legacyTabsTheme: TabsTheme = baseTheme;
