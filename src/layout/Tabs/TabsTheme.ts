export interface TabsTheme {
  base: string;
  list: {
    base: string;
    variant: {
      primary: {
        base: string;
        indicator: string;
      };
      secondary: {
        base: string;
        indicator: string;
      };
      tertiary: {
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
        tertiary: {
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
    variant: {
      primary: {
        base: 'border-b border-panel-accent',
        indicator: 'bg-primary h-[4px] absolute bottom-0 left-0 right-0'
      },
      secondary: {
        base: '',
        indicator: 'bg-primary h-[2px] absolute bottom-0 left-0 right-0'
      },
      tertiary: {
        base: 'rounded-md border border-panel-accent w-fit overflow-hidden',
        indicator: 'bg-secondary h-full absolute bottom-0 left-0 right-0 z-[-1]'
      }
    },
    tab: {
      base: 'relative',
      button: 'transition-colors text-panel-secondary-content font-bold',
      selected: 'text-panel-content',
      disabled: 'cursor-not-allowed opacity-40',
      variant: {
        primary: {
          button: 'hover:text-primary-hover pb-4 text-xl'
        },
        secondary: {
          button: 'hover:text-primary-hover pb-2 text-lg'
        },
        tertiary: {
          button: 'hover:bg-primary-hover hover:text-black font-semibold px-4'
        }
      }
    }
  },
  panel: 'mt-2'
};

export const tabsTheme = baseTheme;

export const legacyTabsTheme: TabsTheme = baseTheme;
