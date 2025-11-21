export interface SkeletonTheme {
  base: string;
  animated: string;
  variants: {
    text: string;
    rounded: string;
    rectangle: string;
    square: string;
    [key: string]: string;
  };
}

export const skeletonTheme: SkeletonTheme = {
  base: 'rounded-md bg-background-neutral-raised-4',
  animated:
    'animate-[pulse_1.5s_ease-in-out_infinite] bg-gradient-to-r from-background-neutral-raised-3 via-background-neutral-raised-4 to-background-neutral-raised-3 bg-[length:200%_100%]',
  variants: {
    text: 'h-4 w-full',
    rounded: 'rounded-full w-10 h-10',
    rectangle: 'h-24 w-full',
    square: 'w-24 h-24'
  }
};
