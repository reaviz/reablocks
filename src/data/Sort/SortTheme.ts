export interface SortTheme {
  base: string;
  disabled: string;
  hasValue: string;
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

export const lightSortTheme: SortTheme = {
  ...baseTheme,
  base: [baseTheme.base, 'text-black'].join(' ')
};

export const darkSortTheme: SortTheme = {
  ...baseTheme,
  base: [baseTheme.base, 'text-white'].join(' ')
};
