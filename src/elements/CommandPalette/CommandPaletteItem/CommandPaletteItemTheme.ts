export interface CommandPaletteItemTheme {
  /** CSS class applied to the root command palette item. */
  base: string;
  /** CSS class applied when the item is active or highlighted. */
  active: string;
  /** CSS class applied when the item is clickable. */
  clickable: string;
}

const baseTheme: CommandPaletteItemTheme = {
  base: 'transition-colors ease-in-out duration-200',
  active: '',
  clickable: 'cursor-pointer'
};

export const commandPaletteItemTheme: CommandPaletteItemTheme = {
  ...baseTheme,
  active: [baseTheme.active, 'bg-primary text-text-primary'].join(' '),
  clickable: [
    baseTheme.clickable,
    'hover:bg-primary-hover/70 dark:hover:bg-primary-hover dark:hover:text-white'
  ].join(' ')
};
