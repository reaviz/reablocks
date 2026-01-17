export interface CommandPaletteSectionTheme {
  base: string;
  first: string;
}

export const defaultCommandPaletteSectionTheme: CommandPaletteSectionTheme = {
  base: 'bg-panel',
  first: 'pt-2.5'
};

export const unifyCommandPaletteSectionTheme: CommandPaletteSectionTheme = {
  base: 'bg-background-neutral-inverse-raised-1',
  first: 'pt-2.5'
};
