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

export const textareaTheme: TextareaTheme = {
  base: [
    inputTheme.base,
    'not-disabled-within:focus-within:border-primary'
  ].join(' '),
  input: ['resize-none read-only:cursor-not-allowed', inputTheme.input].join(
    ' '
  ),
  disabled: inputTheme.disabled,
  fullWidth: inputTheme.fullWidth,
  error: inputTheme.error,
  sizes: inputTheme.sizes
};
