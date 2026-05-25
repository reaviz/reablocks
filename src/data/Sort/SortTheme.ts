export interface SortTheme {
  /** CSS class applied to the root sort control. */
  base: string;
  /** CSS class applied when the sort control is disabled. */
  disabled: string;
  /** CSS class applied when the sort control has an active value. */
  hasValue: string;
  /** Class names applied to the sort direction icon. */
  icon: {
    base: string;
    ascending: string;
  };
}

const baseTheme: SortTheme = {
  base: 'cursor-pointer select-none flex items-center relative',
  disabled: 'cursor-[initial]',
  hasValue: 'cursor-not-allowed',
  icon: {
    base: 'w-4 h-4 align-middle mx-1.5 fill-current',
    ascending: 'rotate-180'
  }
};

export const sortTheme: SortTheme = {
  ...baseTheme,
  base: [baseTheme.base, 'text-text-primary'].join(' ')
};
