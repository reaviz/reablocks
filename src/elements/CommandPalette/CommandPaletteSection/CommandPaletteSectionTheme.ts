export interface CommandPaletteSectionTheme {
  /** CSS class applied to the root section container. */
  base: string;
  /** CSS class applied to the first section in the palette. */
  first: string;
}

export const commandPaletteSectionTheme: CommandPaletteSectionTheme = {
  base: 'bg-panel',
  first: 'pt-2.5'
};
