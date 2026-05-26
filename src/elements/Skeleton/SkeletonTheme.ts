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

export const skeletonTheme: SkeletonTheme = {
  base: 'rounded-md bg-panel-accent',
  animated:
    'animate-[pulse_1.5s_ease-in-out_infinite] bg-gradient-to-r from-panel-accent via-panel-active to-panel-accent bg-[length:200%_100%]',
  variants: {
    text: 'h-4 w-full',
    rounded: 'rounded-full w-10 h-10',
    rectangle: 'h-24 w-full',
    square: 'w-24 h-24'
  }
};
