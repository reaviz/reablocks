export type TypographyColors =
  | 'default'
  | 'primary'
  | 'secondary'
  | 'error'
  | 'success'
  | 'warning'
  | 'info';

export interface Typography {
  /**
   * Color variation of the title.
   */
  color?: TypographyColors;

  /**
   * Font variant for the title.
   */
  variant?: 'default' | 'mono';

  /**
   * Whether to disable the margins.
   */
  disableMargins?: boolean;

  /**
   * The font-weight CSS property sets the weight of the font.
   */
  fontWeight?: 'thin' | 'normal' | 'bold' | 'extra-bold';
}
