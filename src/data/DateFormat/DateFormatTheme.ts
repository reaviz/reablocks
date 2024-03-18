export interface DateFormatTheme {
  base: string;
  interactive: string;
}

const baseTheme: DateFormatTheme = {
  base: 'cursor-text',
  interactive: 'cursor-pointer hover:underline'
};

export const lightDateFormatTheme: DateFormatTheme = {
  ...baseTheme
};

export const darkDateFormatTheme: DateFormatTheme = {
  ...baseTheme
};

export const legacyDateFormatTheme: DateFormatTheme = {
  ...baseTheme,
  base: [baseTheme.base, 'text-[var(--color-primary)]'].join(' ')
};
