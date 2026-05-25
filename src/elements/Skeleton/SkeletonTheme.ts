export interface SkeletonTheme {
  /** CSS class applied to the root skeleton element. */
  base: string;
  /** CSS class applied when the skeleton has its loading animation enabled. */
  animated: string;
  /** Class names for each skeleton shape variant. */
  variants: {
    text: string;
    rounded: string;
    rectangle: string;
    square: string;
    [key: string]: string;
  };
}

const baseTheme: SkeletonTheme = {
  base: 'rounded-md',
  animated: '',
  variants: {
    text: 'h-4 w-full',
    rounded: 'rounded-full w-10 h-10',
    rectangle: 'h-24 w-full',
    square: 'w-24 h-24'
  }
};

export const skeletonTheme: SkeletonTheme = {
  ...baseTheme,
  base: [baseTheme.base, 'light:bg-gray-200 dark:bg-gray-700'].join(' '),
  animated:
    'animate-[pulse_1.5s_ease-in-out_infinite] light:bg-gradient-to-r light:from-gray-200 light:via-gray-300 light:to-gray-200 dark:bg-gradient-to-r dark:from-gray-700 dark:via-gray-600 dark:to-gray-700 bg-[length:200%_100%]',
  variants: baseTheme.variants
};
