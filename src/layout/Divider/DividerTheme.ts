export interface DividerTheme {
  base?: string;
  orientation?: {
    vertical?: string;
    horizontal?: string;
  };
  disableMargins?: string;
}

const baseTheme: DividerTheme = {
  base: 'border-none',
  orientation: {
    horizontal: 'h-px w-full my-2.5',
    vertical: 'w-px h-full mx-2.5'
  },
  disableMargins: 'my-0 mx-0'
};

export const dividerTheme = {
  ...baseTheme,
  base: [baseTheme.base, 'dark:bg-zinc-600 light:bg-zinc-400'].join(' ')
};

export const legacyDividerTheme = {
  ...baseTheme,
  base: [baseTheme.base, 'bg-[var(--divider-background)]'].join(' '),
  orientation: {
    horizontal: [
      baseTheme.orientation.horizontal,
      'my-[var(--divider-spacing)]'
    ].join(' '),
    vertical: [
      baseTheme.orientation.vertical,
      ' mx-[var(--divider-spacing)]'
    ].join(' ')
  }
};
