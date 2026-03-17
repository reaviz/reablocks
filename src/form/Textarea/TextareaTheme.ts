import { inputTheme } from '@/form/Input/InputTheme';

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
    [key: string]: string;
  };
}

const baseTheme: Partial<TextareaTheme> = {
  input: 'resize-none read-only:cursor-not-allowed'
};

export const textareaTheme: TextareaTheme = {
  ...baseTheme,
  base: [
    baseTheme.base,
    inputTheme.base,
    'disabled-within:hover:after:content-none'
  ].join(' '),
  input: [baseTheme.input, inputTheme.input].join(' '),
  disabled: [baseTheme.disabled, inputTheme.disabled].join(' '),
  fullWidth: inputTheme.fullWidth,
  error: inputTheme.error,
  sizes: inputTheme.sizes
} as TextareaTheme;
