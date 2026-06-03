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
