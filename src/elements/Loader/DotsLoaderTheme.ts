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
    small: 'w-1 h-1 m-1',
    medium: 'w-1.5 h-1.5 m-1.5',
    large: 'w-2 h-2 m-2'
  }
};
