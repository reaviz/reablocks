export interface InputTheme {
  /** CSS class applied to the root input wrapper. */
  base: string;
  /** CSS class applied to the inner input element. */
  input: string;
  /** CSS class applied when the input is rendered inline (no border/background). */
  inline: string;
  /** CSS class applied when the input is disabled. */
  disabled: string;
  /** CSS class applied when the input is focused. */
  focused: string;
  /** CSS class applied when the input should fill its container width. */
  fullWidth: string;
  /** CSS class applied when the input is in an error state. */
  error: string;
  /** Class names for each size variant of the input. */
  sizes: {
    small: string;
    medium: string;
    large: string;
    [key: string]: string;
  };
  /** Class names for start and end input adornments. */
  adornment: {
    base: string;
    start: string;
    end: string;
  };
}

export const inputTheme: InputTheme = {
  base: 'flex relative flex-row items-center flex-nowrap box-border transition-colors rounded-xs bg-panel border border-panel-accent text-text-primary not-disabled-within:hover:border-panel-active',
  focused: 'focus-within:border-primary',
  input:
    'flex-1 font-normal font-sans bg-transparent border-0 p-0 m-0 disabled:pointer-events-none outline-hidden px-0.5 disabled:cursor-not-allowed disabled:text-text-inactive placeholder:text-text-placeholder',
  inline: 'bg-transparent border-0 outline-hidden',
  disabled:
    'text-text-secondary cursor-not-allowed disabled-within:bg-panel-accent disabled-within:after:content-none',
  fullWidth: 'w-full',
  error: 'border-error',
  sizes: {
    small: '[&>input]:text-sm p-1 text-sm',
    medium: '[&>input]:text-base px-2.5 py-1.5 text-base',
    large: '[&>input]:text-lg p-5 text-lg'
  },
  adornment: {
    base: 'flex items-center justify-center [&>svg]:w-4 [&>svg]:h-4 [&>svg]:current-color text-text-primary',
    start: 'pr-1.5',
    end: 'pl-1.5'
  }
};
