export interface PagerTheme {
  base: string;
  pages: {
    base: string;
    page: {
      base: string;
      active: string;
    };
  };
  ellipsis: string;
  pagerDisplayItems: string;
  control: string;
  firstPage: string;
  prevPage: string;
  lastPage: string;
  nextPage: string;
}

const baseTheme: PagerTheme = {
  base: 'items-center flex user-select-none',
  arrows: 'h-8 w-8',
  pages: {
    base: 'inline-flex',
    page: {
      base: 'py-1',
      active: 'font-bold'
    }
  },
  ellipsis: 'cursor-pointer',
  pagerDisplayItems: 'mr-1.5',
  control: '[&>svg]:w-5 [&>svg]:h-5',
  firstPage: '',
  prevPage: '',
  lastPage: '',
  nextPage: ''
};

export const lightPagerTheme: PagerTheme = {
  ...baseTheme,
  pages: {
    ...baseTheme.pages,
    page: {
      ...baseTheme.pages.page,
      active: [baseTheme.pages.page.active, '!text-black'].join(' ')
    }
  },
  ellipsis: [baseTheme.ellipsis, 'text-gray-800'].join(' '),
  pagerDisplayItems: [baseTheme.pagerDisplayItems, 'text-slate-600'].join(' ')
};

export const darkPagerTheme: PagerTheme = {
  ...(baseTheme as PagerTheme),
  pages: {
    ...baseTheme.pages,
    page: {
      base: [baseTheme.pages.page.base, 'text-slate-500'].join(' '),
      active: [baseTheme.pages.page.active, '!text-white'].join(' ')
    }
  },
  control: [baseTheme.control, 'text-slate-200'].join(' '),
  pagerDisplayItems: [baseTheme.pagerDisplayItems, 'text-slate-500'].join(' ')
};

export const cssVarsPagerTheme: PagerTheme = {
  ...(baseTheme as PagerTheme),
  pages: {
    ...baseTheme.pages,
    page: {
      base: [baseTheme.pages.page.base, 'px-[var(--spacing-sm)]'].join(' '),
      active: [baseTheme.pages.page.active, '!text-[var(--input-color)]'].join(
        ' '
      )
    }
  },
  pagerDisplayItems: ['text-[var(--gray-100)] mr-[var(--spacing-sm)]'].join(' ')
};
