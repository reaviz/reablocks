export interface RedactTheme {
  base: string;
  interactive: string;
}

export const unifyRedactTheme: RedactTheme = {
  base: 'cursor-text',
  interactive: 'cursor-pointer hover:underline'
};

export const defaultRedactTheme: RedactTheme = {
  base: 'cursor-text text-text-primary',
  interactive: 'cursor-pointer hover:underline'
};
