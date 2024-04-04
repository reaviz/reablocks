export interface KbdTheme {
  base: string;
  chip: string;
}

const baseTheme: KbdTheme = {
  base: 'inline-flex gap-1 items-center',
  chip: 'whitespace-nowrap rounded font-mono'
};

export const kbdTheme: KbdTheme = {
  ...baseTheme
};

export const legacyKbdTheme: KbdTheme = {
  ...baseTheme,
  base: [baseTheme.base, 'gap-[var(--spacing-sm);]'].join(' '),
  chip: [
    baseTheme.chip,
    'rounded-[var(--border-radius-sm)] [font-family:_var(--mono-font-family)]'
  ].join(' ')
};
