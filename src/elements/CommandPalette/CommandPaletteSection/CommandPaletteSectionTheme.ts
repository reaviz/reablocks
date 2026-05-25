export interface CommandPaletteSectionTheme {
  /** CSS class applied to the root section container. */
  base: string;
  /** CSS class applied to the first section in the palette. */
  first: string;
}

const baseTheme: CommandPaletteSectionTheme = {
  base: '',
  first: 'pt-2.5'
};

export const commandPaletteSectionTheme: CommandPaletteSectionTheme = {
  ...baseTheme,
  base: [baseTheme.base, 'bg-panel'].join(' ')
};
