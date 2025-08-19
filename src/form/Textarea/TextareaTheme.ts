export interface TextareaSizeTheme {
  small: string;
  medium: string;
  large: string;
  [key: string]: string;
}

export interface TextareaTheme {
  base: string;
  input: string;
  fullWidth: string;
  error: string;
  disabled: string;
  sizes: TextareaSizeTheme;
}

export const textareaTheme: TextareaTheme = {
  base: `
    flex items-center transition-colors rounded-md border
    border-inputs-colors-normal-stroke-resting bg-inputs-colors-normal-background-resting
    hover:border-inputs-colors-normal-stroke-hover hover:bg-inputs-colors-normal-background-hover
    focus-within:border-inputs-colors-normal-stroke-selected focus-within:bg-inputs-colors-normal-background-selected
    disabled-within:hover:border-inputs-colors-normal-stroke-resting disabled-within:hover:bg-inputs-colors-normal-background-resting
  `,
  input: 'border-0 resize-none read-only:cursor-not-allowed outline-hidden',
  fullWidth: 'w-full',
  error: `
    border-inputs-colors-error-stroke-resting bg-inputs-colors-error-background-resting
    hover:border-inputs-colors-error-stroke-hover hover:bg-inputs-colors-error-background-hover
    focus-within:border-inputs-colors-error-stroke-selected focus-within:bg-inputs-colors-error-background-selected
    disabled-within:hover:border-inputs-colors-error-stroke-resting disabled-within:hover:bg-inputs-colors-error-background-resting
  `,
  disabled: 'cursor-not-allowed opacity-40',
  sizes: {
    small: '[&>textarea]:text-xs px-2 py-[3px]',
    medium: '[&>textarea]:text-xs px-3 py-[7px]',
    large: '[&>textarea]:text-small px-3 py-[7px]'
  }
} as TextareaTheme;
