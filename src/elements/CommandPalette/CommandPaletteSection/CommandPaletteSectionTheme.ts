export interface CommandPaletteSectionTheme {
  base: string;
  first: string;
}

const baseTheme: CommandPaletteSectionTheme = {
  base: '',
  first: 'pt-2.5'
};

export const commandPaletteSectionTheme: CommandPaletteSectionTheme = {
  ...baseTheme,
  base: [baseTheme.base, 'bg-background-level4'].join(' ')
};

export const cssVarsCommandPaletteSectionTheme: CommandPaletteSectionTheme = {
  ...baseTheme,
  first: 'pt-[var(--spacing-md)]'
};
