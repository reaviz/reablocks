export interface PagerTheme {
  base: string;
  pages: string;
  ellipsis: string;
}

const baseTheme: Partial<PagerTheme> = {
  base: 'items-center flex user-select-none',
  arrows: 'h-8 w-8',
  pages: 'inline-flex',
  ellipsis: 'cursor-pointer'
};

export const lightPagerTheme: PagerTheme = {
  ...(baseTheme as PagerTheme)
};

export const darkPagerTheme: PagerTheme = {
  ...(baseTheme as PagerTheme)
};
