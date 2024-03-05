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
  base: [baseTheme.base, 'bg-white text-black'].join(' ')
};

export const darkCardTheme: CardTheme = {
  ...baseTheme,
  base: [baseTheme.base, 'bg-zinc-800 text-white'].join(' ')
};
