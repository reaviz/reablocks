export interface RedactTheme {
  /** CSS class applied to the root element. */
  base: string;
  /** CSS class applied when the redacted value is interactive (clickable to reveal). */
  interactive: string;
}

const baseTheme: RedactTheme = {
  base: 'cursor-text',
  interactive: 'cursor-pointer hover:underline'
};

export const redactTheme: RedactTheme = {
  ...baseTheme,
  base: [baseTheme.base, 'text-text-primary'].join(' ')
};
