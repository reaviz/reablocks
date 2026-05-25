export interface CommandPaletteItemTheme {
  base: string;
  active: string;
  clickable: string;
}

export const commandPaletteItemTheme: CommandPaletteItemTheme = {
  base: 'transition-colors ease-in-out duration-200',
  active: 'bg-primary text-text-primary',
  clickable: 'cursor-pointer hover:bg-primary-hover hover:text-white'
};
