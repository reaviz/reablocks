export interface ArrowTheme {
  base: string;
  up: string;
  down: string;
  right: string;
  left: string;
}

export const defaultArrowTheme: ArrowTheme = {
  base: 'text-text-primary',
  up: 'rotate-x180',
  down: '',
  left: 'rotate-90',
  right: '-rotate-90'
};

export const unifyArrowTheme: ArrowTheme = {
  base: 'text-content-text-neutral-base',
  up: 'rotate-180',
  down: '',
  left: 'rotate-90',
  right: '-rotate-90'
};
