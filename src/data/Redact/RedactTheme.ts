export interface RedactTheme {
  base: string;
  interactive: string;
}

const baseTheme: RedactTheme = {
  base: 'cursor-text',
  interactive: 'cursor-pointer hover:underline'
};

export const redactTheme: RedactTheme = {
  ...baseTheme,
  base: [baseTheme.base, 'text-surface-content'].join(' ')
};

export const legacyRedactTheme: RedactTheme = {
  ...baseTheme
};
