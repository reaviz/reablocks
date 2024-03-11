export interface PagerTheme {
  base: string;
  pages: string;
  ellipsis: string;
  page: string;
  active: string;
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
  pages: 'inline-flex',
  ellipsis: 'cursor-pointer',
  page: 'py-1',
  active: 'font-bold',
  pagerDisplayItems: 'mr-1.5',
  control: '[&>svg]:w-5 h-5',
  firstPage: '',
  prevPage: '',
  lastPage: '',
  nextPage: ''
};

export const lightPagerTheme: PagerTheme = {
  ...baseTheme,
  active: [baseTheme.active, '!text-black'].join(' '),
  ellipsis: [baseTheme.ellipsis, 'text-gray-800'].join(' '),
  pagerDisplayItems: [baseTheme.pagerDisplayItems, 'text-slate-600'].join(' ')
};

export const darkPagerTheme: PagerTheme = {
  ...(baseTheme as PagerTheme),
  active: [baseTheme.active, '!text-white'].join(' '),
  page: [baseTheme.page, 'text-slate-500'].join(' '),
  control: [baseTheme.control, 'text-slate-200'].join(' '),
  pagerDisplayItems: [baseTheme.pagerDisplayItems, 'text-slate-500'].join(' ')
};
