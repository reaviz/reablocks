export interface KbdTheme {
  base: string;
  chip: string;
}

const baseTheme: KbdTheme = {
  base: 'inline-flex gap-1 items-center',
  chip: 'whitespace-nowrap rounded font-mono'
};

export const lightKbdTheme: KbdTheme = {
  ...baseTheme
};

export const darkKbdTheme: KbdTheme = {
  ...baseTheme
};
