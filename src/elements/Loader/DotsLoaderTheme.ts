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

export const dotsLoaderTheme: DotsLoaderTheme = {
  base: 'flex',
  dot: 'rounded-[50%] bg-background-brand-base',
  sizes: {
    small: 'size-1 m-1',
    medium: 'size-1.5 m-1.5',
    large: 'size-2 m-2',
  },
};
