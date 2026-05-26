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

export const pagerTheme: PagerTheme = {
  base: 'items-center flex user-select-none',
  pages: {
    base: 'inline-flex',
    page: {
      base: 'py-1 text-text-secondary',
      active: 'font-bold text-text-primary!'
    }
  },
  ellipsis: 'cursor-pointer',
  pagerDisplayItems: 'mr-1.5 text-text-secondary',
  itemsDisplay: 'flex items-center gap-1',
  showPageRange: '',
  totalCount: '',
  control:
    '[&>svg]:w-5 [&>svg]:h-5 text-text-primary disabled:text-text-inactive',
  firstPage: '',
  prevPage: '',
  lastPage: '',
  nextPage: ''
};
