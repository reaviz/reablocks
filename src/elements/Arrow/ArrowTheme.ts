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

export const arrowTheme: ArrowTheme = {
  ...baseTheme,
  base: [baseTheme.base, 'text-text-primary'].join(' ')
};

export const legacyArrowTheme: ArrowTheme = {
  ...baseTheme,
  base: [baseTheme.base].join(' ')
};
