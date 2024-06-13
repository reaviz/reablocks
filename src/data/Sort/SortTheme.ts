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

export const sortTheme: SortTheme = {
  ...baseTheme,
  base: [baseTheme.base, 'text-text-content-primary'].join(' ')
};

export const legacySortTheme: SortTheme = {
  ...baseTheme,
  icon: {
    ...baseTheme.icon,
    base: 'h-[var(--sort-icon-size)] w-[var(--sort-icon-size)] mx-[var(--spacing-sm)] fill-[var(--sort-icon-color)]'
  }
};
