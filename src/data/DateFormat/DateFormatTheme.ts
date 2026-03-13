export interface DateFormatTheme {
  base: string;
  interactive: string;
}

const baseTheme: DateFormatTheme = {
  base: 'cursor-text',
  interactive: 'cursor-pointer hover:underline'
};

export const dateFormatTheme: DateFormatTheme = {
  ...baseTheme
};
