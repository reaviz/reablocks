export interface FieldTheme {
  /** CSS class applied to the root field container. */
  base: string;
  /** CSS class applied when the field bottom margin is disabled. */
  disableMargin: string;
  /** CSS class applied to the field label. */
  label: string;
  /** CSS class applied when label alignment is centered. */
  centerAlign: string;
  /** CSS class applied when label alignment is end. */
  endAlign: string;
  /** Class names applied when the field is laid out horizontally. */
  horizontal: {
    base: string;
    label: string;
    content: string;
  };
  /** Class names applied when the field is laid out vertically. */
  vertical: {
    base: string;
    label: string;
  };
  /** CSS class applied to the hint text. */
  hint: string;
  /** CSS class applied to the error message. */
  error: string;
  /** CSS class applied to the field when in an error state. */
  errorState: string;
}

const baseTheme: FieldTheme = {
  base: 'mb-2.5',
  disableMargin: 'mb-0',
  label: 'text-sm',
  centerAlign: 'items-center',
  endAlign: 'items-end',
  horizontal: {
    base: 'flex flex-row items-baseline',
    label: 'mr-0.5 whitespace-nowrap',
    content: 'flex-1 min-w-0'
  },
  vertical: {
    base: 'block',
    label: 'block mb-0.5'
  },
  hint: 'text-xs text-text-secondary mt-1',
  error: 'text-xs text-error mt-1',
  errorState: ''
};

export const fieldTheme: FieldTheme = {
  ...baseTheme
};
