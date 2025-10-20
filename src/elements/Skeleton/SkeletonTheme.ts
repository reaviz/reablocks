export interface SkeletonTheme {
  base: string;
  animated: string;
}

const baseTheme: SkeletonTheme = {
  base: 'rounded-md',
  animated: ''
};

export const skeletonTheme: SkeletonTheme = {
  ...baseTheme,
  base: [baseTheme.base, 'light:bg-gray-200 dark:bg-gray-700'].join(' '),
  animated:
    'animate-[pulse_1.5s_ease-in-out_infinite] light:bg-gradient-to-r light:from-gray-200 light:via-gray-300 light:to-gray-200 dark:bg-gradient-to-r dark:from-gray-700 dark:via-gray-600 dark:to-gray-700 bg-[length:200%_100%]'
};

export const legacySkeletonTheme: SkeletonTheme = {
  ...baseTheme,
  base: [baseTheme.base, 'bg-[var(--skeleton-background)]'].join(' '),
  animated:
    'animate-[pulse_1.5s_ease-in-out_infinite] bg-[var(--skeleton-gradient)] bg-[length:200%_100%]'
};
