export interface KbdTheme {
  base: string;
  chip: string;
}

const baseTheme: KbdTheme = {
  base: 'inline-flex gap-1 items-center',
  chip: 'whitespace-nowrap rounded-sm font-mono'
};

export const kbdTheme: KbdTheme = {
  ...baseTheme
};
