export interface TabsTheme {
  base: string;
  list: {
    base: string;
    tab: {
      base: string;
      selected: string;
      disabled: string;
    };
    indicator: string;
  };
  panel: string;
}

const baseTheme: TabsTheme = {
  base: 'flex flex-col',
  list: {
    base: 'flex text-center flex-wrap -mb-px position-relative',
    tab: {
      base: 'rounded-none border-b-2 border-transparent',
      selected: '',
      disabled: 'cursor-not-allowed opacity-50'
    },
    indicator: 'h-[2px] position-absolute bottom-0 left-0 right-0'
  },
  panel: 'mt-2'
};

export const darkTabsTheme: TabsTheme = {
  ...baseTheme,
  list: {
    ...baseTheme.list,
    base: `border-b dark:border-gray-700 light:border-gray-100 ${baseTheme.list.base}`,
    indicator: `bg-primary ${baseTheme.list.indicator}`,
    tab: {
      ...baseTheme.list.tab
    }
  }
};

export const legacyTabsTheme: TabsTheme = {
  ...baseTheme
};
