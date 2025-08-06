export interface CommandPaletteItemTheme {
  base: string;
  active: string;
  clickable: string;
}

export const commandPaletteItemTheme: CommandPaletteItemTheme = {
  base: 'transition-colors ease-in-out duration-200',
  active: 'bg-background-brand-base',
  clickable: 'cursor-pointer hover:bg-background-brand-base/70'
};
