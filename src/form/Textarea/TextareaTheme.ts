import { legacyInputTheme, inputTheme } from '../Input/InputTheme';

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

export const textareaTheme: TextareaTheme = {
  ...baseTheme,
  base: [baseTheme.base, inputTheme.base].join(' '),
  input: [baseTheme.input, inputTheme.input].join(' '),
  disabled: [baseTheme.disabled, inputTheme.disabled].join(' '),
  fullWidth: inputTheme.fullWidth,
  error: inputTheme.error,
  sizes: inputTheme.sizes
} as TextareaTheme;

export const legacyTextareaTheme: TextareaTheme = {
  ...baseTheme,
  base: [
    baseTheme.base,
    legacyInputTheme.base,
    'bg-[var(--textarea-background)] rounded-[var(--textarea-border-radius)] [border:_var(--textarea-border)] focus:border-[var(--textarea-border-focus)]'
  ].join(' '),
  input: [
    baseTheme.input,
    legacyInputTheme.input,
    '[font-family:_var(--font-family)] text-[var(--textarea-color)] placeholder-[var(--textarea-color-placeholder)]'
  ].join(' '),
  disabled: [
    baseTheme.disabled,
    legacyInputTheme.disabled,
    'text-[var(--disabled-color)]'
  ].join(' '),
  fullWidth: legacyInputTheme.fullWidth,
  error: legacyInputTheme.error,
  sizes: {
    small: '[padding:_var(--textarea-spacing-sm)]',
    medium: '[padding: var(--textarea-spacing-md)]',
    large: 'padding: var(--textarea-spacing-lg)'
  }
} as TextareaTheme;
