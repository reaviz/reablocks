export interface RedactTheme {
  base: string;
  interactive: string;
}

const baseTheme: RedactTheme = {
  base: 'cursor-text',
  interactive: 'cursor-pointer hover:underline'
};

export const darkRedactTheme: RedactTheme = {
  ...baseTheme,
  base: [baseTheme.base, 'text-typography'].join(' ')
};

export const legacyRedactTheme: RedactTheme = {
  ...baseTheme
};
