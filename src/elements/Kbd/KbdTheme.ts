export interface KbdTheme {
  /** CSS class applied to the root keyboard shortcut container. */
  base: string;
  /** CSS class applied to each key chip within the shortcut. */
  chip: string;
}

const baseTheme: KbdTheme = {
  base: 'inline-flex gap-1 items-center',
  chip: 'whitespace-nowrap rounded-sm font-mono'
};

export const kbdTheme: KbdTheme = {
  ...baseTheme
};
