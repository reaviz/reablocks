export interface CommandPaletteItemTheme {
  /** CSS class applied to the root command palette item. */
  base: string;
  /** CSS class applied when the item is active or highlighted. */
  active: string;
  /** CSS class applied when the item is clickable. */
  clickable: string;
}

export const commandPaletteItemTheme: CommandPaletteItemTheme = {
  base: 'transition-colors ease-in-out duration-200',
  active: 'bg-primary text-text-primary',
  clickable: 'cursor-pointer hover:bg-primary-hover hover:text-white'
};
