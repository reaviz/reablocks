export interface RedactTheme {
  base: string;
  interactive: string;
}

export const redactTheme: RedactTheme = {
  base: 'cursor-text text-text-primary',
  interactive: 'cursor-pointer hover:underline'
};
