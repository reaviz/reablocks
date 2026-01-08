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
  base: [baseTheme.base, 'bg-background-neutral-inverse-raised-1'].join(' ')
};
