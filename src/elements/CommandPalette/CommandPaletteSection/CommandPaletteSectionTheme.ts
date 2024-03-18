export interface CommandPaletteSectionTheme {
  base: string;
  first: string;
}

const baseTheme: CommandPaletteSectionTheme = {
  base: '',
  first: 'pt-2.5'
};

export const lightCommandPaletteSectionTheme: CommandPaletteSectionTheme = {
  ...baseTheme
};

export const darkCommandPaletteSectionTheme: CommandPaletteSectionTheme = {
  ...baseTheme
};

export const cssVarsCommandPaletteSectionTheme: CommandPaletteSectionTheme = {
  ...baseTheme,
  first: 'pt-[var(--spacing-md)]'
};
