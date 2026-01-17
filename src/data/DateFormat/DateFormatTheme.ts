export interface DateFormatTheme {
  base: string;
  interactive: string;
}

export const defaultDateFormatTheme: DateFormatTheme = {
  base: '',
  interactive: 'cursor-pointer hover:underline'
};

export const unifyDateFormatTheme: DateFormatTheme = {
  base: 'cursor-text',
  interactive: 'cursor-pointer hover:underline'
};
