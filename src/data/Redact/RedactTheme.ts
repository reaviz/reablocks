export interface RedactTheme {
  /** CSS class applied to the root element. */
  base: string;
  /** CSS class applied when the redacted value is interactive (clickable to reveal). */
  interactive: string;
}

export const redactTheme: RedactTheme = {
  base: 'cursor-text text-text-primary',
  interactive: 'cursor-pointer hover:underline'
};
