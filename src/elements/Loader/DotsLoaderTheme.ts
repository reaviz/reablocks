export interface DotsLoaderTheme {
  /** CSS class applied to the root loader container. */
  base: string;
  /** CSS class applied to each individual dot. */
  dot: string;
  /** Class names for each loader size. */
  sizes: {
    small: string;
    medium: string;
    large: string;
    [key: string]: string;
  };
}

export const dotsLoaderTheme: DotsLoaderTheme = {
  base: 'flex',
  dot: 'rounded-[50%] bg-primary',
  sizes: {
    small: 'w-1 h-1 m-1',
    medium: 'w-1.5 h-1.5 m-1.5',
    large: 'w-2 h-2 m-2'
  }
};
