import { cssVarsInputTheme, darkInputTheme, lightInputTheme } from '../Input';

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

export const cssVarsTextareaTheme: TextareaTheme = {
  ...baseTheme,
  base: [
    baseTheme.base,
    cssVarsInputTheme.base,
    'bg-[var(--textarea-background)] rounded-[var(--textarea-border-radius)] [border:_var(--textarea-border)] focus:border-[var(--textarea-border-focus)]'
  ].join(' '),
  input: [
    baseTheme.input,
    cssVarsInputTheme.input,
    '[font-family:_var(--font-family)] text-[var(--textarea-color)] placeholder-[var(--textarea-color-placeholder)]'
  ].join(' '),
  disabled: [
    baseTheme.disabled,
    cssVarsInputTheme.disabled,
    'text-[var(--disabled-color)]'
  ].join(' '),
  fullWidth: cssVarsInputTheme.fullWidth,
  error: cssVarsInputTheme.error,
  sizes: {
    small: '[padding:_var(--textarea-spacing-sm)]',
    medium: '[padding: var(--textarea-spacing-md)]',
    large: 'padding: var(--textarea-spacing-lg)'
  }
} as TextareaTheme;
