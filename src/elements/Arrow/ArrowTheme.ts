export interface ArrowTheme {
  base: string;
  up: string;
  down: string;
  right: string;
  left: string;
}

const baseTheme: ArrowTheme = {
  base: '',
  up: 'rotate-180',
  down: '',
  left: 'rotate-90',
  right: '-rotate-90'
};

export const lightArrowTheme: ArrowTheme = {
  ...baseTheme,
  base: [baseTheme.base, 'text-black'].join(' ')
};

export const darkArrowTheme: ArrowTheme = {
  ...baseTheme,
  base: [baseTheme.base, 'text-white'].join(' ')
};
