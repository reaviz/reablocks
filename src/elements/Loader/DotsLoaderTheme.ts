export interface DotsLoaderSizeTheme {
  small: string;
  medium: string;
  large: string;
  [key: string]: string;
}

export interface DotsLoaderTheme {
  base: string;
  dot: string;
  sizes: DotsLoaderSizeTheme;
}

export const defaultDotsLoaderTheme: DotsLoaderTheme = {
  base: 'flex',
  dot: 'rounded-[50%] light:bg-gray-900 dark:bg-gray-100',
  sizes: {
    small: 'w-1 h-1 m-1',
    medium: 'w-1.5 h-1.5 m-1.5',
    large: 'w-2 h-2 m-2'
  }
};

export const unifyDotsLoaderTheme: DotsLoaderTheme = {
  base: 'flex',
  dot: 'rounded-[50%] bg-background-brand-base',
  sizes: {
    small: 'size-1 m-1',
    medium: 'size-1.5 m-1.5',
    large: 'size-2 m-2'
  }
};
