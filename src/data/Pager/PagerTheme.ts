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
  itemsDisplay: string;
  showPageRange: string;
  totalCount: string;
  control: string;
  firstPage: string;
  prevPage: string;
  lastPage: string;
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
