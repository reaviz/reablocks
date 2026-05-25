import { inputTheme } from '@/form/Input/InputTheme';

export interface TextareaTheme {
  /** CSS class applied to the root textarea wrapper. */
  base: string;
  /** CSS class applied to the inner textarea element. */
  input: string;
  /** CSS class applied when the textarea should fill its container width. */
  fullWidth: string;
  /** CSS class applied when the textarea is in an error state. */
  error: string;
  /** CSS class applied when the textarea is disabled. */
  disabled: string;
  /** Class names for each size variant of the textarea. */
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
