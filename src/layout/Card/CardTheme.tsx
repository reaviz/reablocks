export interface CardTheme {
  base: string;
  disablePadding: string;
  header: string;
  headerText: string;
  content: string;
}

const baseTheme: CardTheme = {
  base: 'relative flex flex-col p-2.5 rounded',
  disablePadding: 'p-0',
  header: 'flex items-center',
  headerText: 'text-sm font-medium mt-0 mb-1',
  content: 'flex-1'
};

export const lightCardTheme: CardTheme = {
  ...baseTheme,
  base: [baseTheme.base, 'bg-light-background text-black'].join(' ')
};

export const darkCardTheme: CardTheme = {
  ...baseTheme,
  base: [baseTheme.base, 'bg-dark-background text-white'].join(' ')
};

export const cssVarsCardTheme: CardTheme = {
  ...baseTheme,
  base: [
    baseTheme.base,
    '[padding:_var(--card-spacing)] bg-[var(--card-background)] text-[var(--card-color)] [border:_var(--card-border)] rounded-[var(--card-border-radius)]'
  ].join(' '),
  headerText: [baseTheme.headerText, 'mb-[var(--spacing-md)]'].join(' ')
};
