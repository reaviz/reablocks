export interface DotsLoaderTheme {
  base: string;
  dot: string;
  sizes: {
    small: string;
    medium: string;
    large: string;
    [key: string]: string;
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
  dot: [baseTheme.dot, 'light:bg-gray-900 dark:bg-gray-100'].join(' ')
};
