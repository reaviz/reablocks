export interface TabsTheme {
  base: string;
  list: {
    base: string;
    indicator: string;
    variant: {
      primary: {
        base: string;
        indicator: string;
      };
      secondary: {
        base: string;
        indicator: string;
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
    indicator: 'bg-primary h-[4px] absolute bottom-0 left-0 right-0',
    variant: {
      primary: {
        base: 'border-b border-panel-accent',
        indicator: 'bg-primary h-[4px] absolute bottom-0 left-0 right-0'
      },
      secondary: {
        base: '',
        indicator: 'bg-primary h-[2px] absolute bottom-0 left-0 right-0'
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
