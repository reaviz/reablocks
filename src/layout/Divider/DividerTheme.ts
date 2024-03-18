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

export const lightDividerTheme = {
  ...baseTheme,
  base: [baseTheme.base, 'bg-zinc-400'].join(' ')
};

export const darkDividerTheme = {
  ...baseTheme,
  base: [baseTheme.base, 'bg-zinc-600'].join(' ')
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
      baseTheme.orientation.horizontal,
      ' mx-[var(--divider-spacing)]'
    ].join(' ')
  }
};
