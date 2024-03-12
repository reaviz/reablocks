export interface TabsTheme {
  base: string;
  list: {
    base: string;
    tab: {
      base: string;
      selected: string;
      disabled: string;
    };
  };
  panel: string;
}

const baseTheme: TabsTheme = {
  base: 'flex flex-col',
  list: {
    base: 'flex text-center flex-wrap -mb-px',
    tab: {
      base: 'rounded-none border-b-2 border-transparent',
      selected: '',
      disabled: 'cursor-not-allowed opacity-50'
    }
  },
  panel: 'mt-2'
};

export const lightTabsTheme: TabsTheme = {
  ...baseTheme,
  list: {
    ...baseTheme.list,
    base: `border-b border-gray-100 ${baseTheme.list.base}`,
    tab: {
      ...baseTheme.list.tab,
      selected: 'border-b-2 border-primary-500'
    }
  }
};

export const darkTabsTheme: TabsTheme = {
  ...baseTheme,
  list: {
    ...baseTheme.list,
    base: `border-b border-gray-500 ${baseTheme.list.base}`,
    tab: {
      ...baseTheme.list.tab,
      selected: 'border-b-2 border-primary-500'
    }
  }
};
