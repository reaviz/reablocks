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

export const arrowTheme: ArrowTheme = {
  base: 'text-text-primary',
  up: 'rotate-180',
  down: '',
  left: 'rotate-90',
  right: '-rotate-90'
};
