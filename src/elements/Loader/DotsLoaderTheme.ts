export interface DotsLoaderTheme {
  base: string;
  dot: string;
  sizes: {
    small: string;
    medium: string;
    large: string;
  };
}

const baseTheme: DotsLoaderTheme = {
  base: 'flex',
  dot: 'rounded-[50%]',
  sizes: {
    small: 'w-1 h-1 m-1',
    medium: 'w-1.5 h-1.5 m-1.5',
    large: 'w-2 h-2 m-2'
  }
};

export const dotsLoaderTheme: DotsLoaderTheme = {
  ...baseTheme,
  dot: [baseTheme.dot, 'bg-surface-content'].join(' ')
};

export const legacyLoaderTheme: DotsLoaderTheme = {
  ...baseTheme,
  dot: [baseTheme.dot, 'bg-[var(--loader-background)]'].join(' '),
  sizes: {
    small: 'w-1 h-1 ml-[var(--spacing-sm)]',
    medium: 'w-1.5 h-1.5 ml-[var(--spacing-md)]',
    large: 'w-2 h-2 ml-[var(--spacing-lg)]'
  }
};
