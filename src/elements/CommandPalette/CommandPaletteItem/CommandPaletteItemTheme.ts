export interface CommandPaletteItemTheme {
  base: string;
  active: string;
  clickable: string;
}

export const defaultCommandPaletteItemTheme: CommandPaletteItemTheme = {
  base: 'transition-colors ease-in-out duration-200',
  active: 'bg-primary text-text-primary',
  clickable:
    'cursor-pointer hover:bg-primary-hover/70 dark:hover:bg-primary-hover dark:hover:text-white'
};

export const unifyCommandPaletteItemTheme: CommandPaletteItemTheme = {
  base: 'transition-colors ease-in-out duration-200',
  active: 'bg-background-brand-base',
  clickable: 'cursor-pointer hover:bg-background-brand-base/70'
};
