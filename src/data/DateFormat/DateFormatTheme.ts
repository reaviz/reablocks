export interface DateFormatTheme {
  /** CSS class applied to the root element. */
  base: string;
  /** CSS class applied when the date is interactive (clickable to toggle relative/absolute formatting). */
  interactive: string;
}

export const dateFormatTheme: DateFormatTheme = {
  base: 'cursor-text',
  interactive: 'cursor-pointer hover:underline'
};
