export interface CommandPaletteItemTheme {
  base: string;
  active: string;
  clickable: string;
}

const baseTheme: CommandPaletteItemTheme = {
  base: 'transition-colors ease-in-out duration-200',
  active: '',
  clickable: 'cursor-pointer'
};

export const lightCommandPaletteItemTheme: CommandPaletteItemTheme = {
  ...baseTheme,
  active: [baseTheme.active, 'bg-primary text-black'].join(' '),
  clickable: [
    baseTheme.clickable,
    'hover:bg-primary-hover text-gray-700 hover:text-white'
  ].join(' ')
};

export const commandPaletteItemTheme: CommandPaletteItemTheme = {
  ...baseTheme,
  active: [baseTheme.active, 'bg-primary text-typography'].join(' '),
  clickable: [
    baseTheme.clickable,
    'hover:bg-primary-hover/70 dark:hover:bg-primary-hover hover:dark:text-white'
  ].join(' ')
};

export const cssVarsCommandPaletteItemTheme: CommandPaletteItemTheme = {
  ...baseTheme,
  clickable: [
    baseTheme.clickable,
    'hover:bg-[var(--primary-background)] text-[var(--primary-color-hover)]'
  ].join(' ')
};
