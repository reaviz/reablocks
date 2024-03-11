import { darkInputTheme, lightInputTheme } from '../Input';

export interface TextareaTheme {
  base: string;
  input: string;
  fullWidth: string;
  error: string;
  disabled: string;
  sizes: {
    small: string;
    medium: string;
    large: string;
  };
}

const baseTheme: Partial<TextareaTheme> = {
  input: 'resize-none read-only:cursor-not-allowed'
};

export const lightTextareaTheme: TextareaTheme = {
  ...baseTheme,
  base: [baseTheme.base, lightInputTheme.base].join(' '),
  input: [baseTheme.input, lightInputTheme.input].join(' '),
  disabled: [baseTheme.disabled, darkInputTheme.disabled].join(' '),
  fullWidth: darkInputTheme.fullWidth,
  error: lightInputTheme.error,
  sizes: lightInputTheme.sizes
} as TextareaTheme;

export const darkTextareaTheme: TextareaTheme = {
  ...baseTheme,
  base: [baseTheme.base, darkInputTheme.base].join(' '),
  input: [baseTheme.input, darkInputTheme.input].join(' '),
  disabled: [baseTheme.disabled, darkInputTheme.disabled].join(' '),
  fullWidth: darkInputTheme.fullWidth,
  error: darkInputTheme.error,
  sizes: darkInputTheme.sizes
} as TextareaTheme;
