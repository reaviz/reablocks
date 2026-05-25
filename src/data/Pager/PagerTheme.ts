export interface PagerTheme {
  /** CSS class applied to the root pager container. */
  base: string;
  /** Class names applied to the pages list and individual page buttons. */
  pages: {
    base: string;
    page: {
      base: string;
      active: string;
    };
  };
  /** CSS class applied to the ellipsis indicator shown between page ranges. */
  ellipsis: string;
  /** CSS class applied to the wrapper around the page-range and total-count display. */
  pagerDisplayItems: string;
  /** CSS class applied to the items-per-page display element. */
  itemsDisplay: string;
  /** CSS class applied to the current page-range label. */
  showPageRange: string;
  /** CSS class applied to the total count label. */
  totalCount: string;
  /** CSS class applied to each pager navigation control button. */
  control: string;
  /** CSS class applied to the first-page control button. */
  firstPage: string;
  /** CSS class applied to the previous-page control button. */
  prevPage: string;
  /** CSS class applied to the last-page control button. */
  lastPage: string;
  /** CSS class applied to the next-page control button. */
  nextPage: string;
}

const baseTheme: PagerTheme = {
  base: 'items-center flex user-select-none',
  pages: {
    base: 'inline-flex',
    page: {
      base: 'py-1',
      active: 'font-bold'
    }
  },
  ellipsis: 'cursor-pointer',
  pagerDisplayItems: 'mr-1.5',
  itemsDisplay: 'flex items-center gap-1',
  showPageRange: '',
  totalCount: '',
  control: '[&>svg]:w-5 [&>svg]:h-5',
  firstPage: '',
  prevPage: '',
  lastPage: '',
  nextPage: ''
};

export const pagerTheme: PagerTheme = {
  ...(baseTheme as PagerTheme),
  pages: {
    ...baseTheme.pages,
    page: {
      base: [baseTheme.pages.page.base, 'text-slate-500'].join(' '),
      active: [baseTheme.pages.page.active, 'text-text-primary!'].join(' ')
    }
  },
  control: [
    baseTheme.control,
    'text-slate-200 light:text-slate-400 disabled:light:text-slate-300'
  ].join(' '),
  pagerDisplayItems: [baseTheme.pagerDisplayItems, 'text-slate-500'].join(' ')
};
