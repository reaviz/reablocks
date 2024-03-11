export interface RedactTheme {
  base: string;
  interactive: string;
}

const baseTheme: RedactTheme = {
  base: 'cursor-text',
  interactive: 'cursor-pointer hover:underline'
};

export const lightRedactTheme: RedactTheme = {
  ...baseTheme,
  base: [baseTheme.base, 'text-black'].join(' ')
};

export const darkRedactTheme: RedactTheme = {
  ...baseTheme,
  base: [baseTheme.base, 'text-white'].join(' ')
};
