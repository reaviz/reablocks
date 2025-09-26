export interface SortTheme {
  base: string;
  disabled: string;
  hasValue: string;
  icon: {
    base: string;
    ascending: string;
  };
}

export const sortTheme: SortTheme = {
  base: 'cursor-pointer select-none flex items-center relative',
  disabled: 'cursor-default',
  hasValue: 'cursor-not-allowed',
  icon: {
    base: 'w-4 h-4 align-middle mx-1.5 fill-current',
    ascending: 'rotate-180',
  },
};
