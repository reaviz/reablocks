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

export const unifyPagerTheme: PagerTheme = {
  base: 'items-center flex user-select-none gap-5',
  pages: {
    base: 'inline-flex gap-1 text-sm',
    page: {
      base: `
        text-xs text-buttons-colors-core-icon-ghost-text-resting py-2 min-w-8 transition-colors border
        bg-buttons-colors-core-icon-ghost-background-resting hover:bg-buttons-colors-core-icon-ghost-background-hover focus-visible:bg-buttons-colors-core-icon-ghost-background-hover
        border-buttons-colors-core-icon-ghost-stroke-resting hover:border-buttons-colors-core-icon-ghost-stroke-hover focus-visible:border-buttons-colors-core-icon-ghost-stroke-hover
      `,
      active:
        'text-buttons-colors-core-icon-ghost-text-selected font-bold disabled:cursor-default disabled:opacity-100 disabled:bg-buttons-colors-core-icon-ghost-background-selected disabled:text-buttons-colors-core-icon-ghost-text-selected'
    }
  },
  ellipsis:
    'cursor-pointer text-buttons-colors-core-icon-ghost-text-resting min-w-8 flex items-baseline justify-center leading-8',
  pagerDisplayItems: 'text-xs',
  itemsDisplay: 'text-buttons-colors-core-icon-ghost-text-selected font-sm',
  showPageRange: '',
  totalCount: '',
  control: `
    min-size-8 p-2 [&>svg]:size-4 text-buttons-colors-core-icon-secondary-assets-resting transition-colors border
    bg-buttons-colors-core-icon-secondary-background-resting hover:bg-buttons-colors-core-icon-secondary-background-hover focus-visible:bg-buttons-colors-core-icon-secondary-background-hover disabled:bg-buttons-colors-core-icon-secondary-background-resting
    border-buttons-colors-core-icon-secondary-stroke-resting hover:buttons-colors-core-icon-secondary-stroke-hover focus-visible:buttons-colors-core-icon-secondary-stroke-hover disabled:border-buttons-colors-core-icon-secondary-stroke-resting
  `,
  firstPage: '',
  prevPage: '',
  lastPage: '',
  nextPage: ''
};

export const defaultPagerTheme: PagerTheme = {
  base: 'items-center flex user-select-none',
  pages: {
    base: 'inline-flex',
    page: {
      base: 'py-1 text-slate-500',
      active: 'font-bold text-text-primary!'
    }
  },
  ellipsis: 'cursor-pointer',
  pagerDisplayItems: 'mr-1.5 text-slate-500',
  itemsDisplay: '',
  showPageRange: '',
  totalCount: '',
  control:
    '[&>svg]:w-5 [&>svg]:h-5 text-slate-200 light:text-slate-400 disabled:light:text-slate-300',
  firstPage: '',
  prevPage: '',
  lastPage: '',
  nextPage: ''
};
