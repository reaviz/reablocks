export interface ArrowTheme {
  /** CSS class applied to the root arrow element. */
  base: string;
  /** CSS class applied when the arrow points up. */
  up: string;
  /** CSS class applied when the arrow points down. */
  down: string;
  /** CSS class applied when the arrow points right. */
  right: string;
  /** CSS class applied when the arrow points left. */
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
