export interface VerticalSpacerTheme {
  base: string;
  size: {
    xs: string;
    sm: string;
    md: string;
    lg: string;
    xl: string;
    xxl: string;
    [key: string]: string;
  };
}

const baseTheme: VerticalSpacerTheme = {
  base: '',
  size: {
    xs: 'h-0.5',
    sm: 'h-1.5',
    md: 'h-2.5',
    lg: 'h-5',
    xl: 'h-6',
    xxl: 'h-8'
  }
};

export const verticalSpacerTheme = {
  ...baseTheme
};

export const legacyVerticalSpacerTheme = {
  ...baseTheme,
  size: {
    xs: 'h-[var(--spacing-xs)]',
    sm: 'h-[var(--spacing-sm)]',
    md: 'h-[var(--spacing-md)]',
    lg: 'h-[var(--spacing-lg)]',
    xl: 'h-[var(--spacing-xl)]',
    xxl: 'h-[var(--spacing-xxl)]'
  }
};
