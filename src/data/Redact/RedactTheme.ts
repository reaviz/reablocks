export interface RedactTheme {
  base: string;
  interactive: string;
}

export const redactTheme: RedactTheme = {
  base: 'cursor-text',
  interactive: 'cursor-pointer hover:underline'
};
