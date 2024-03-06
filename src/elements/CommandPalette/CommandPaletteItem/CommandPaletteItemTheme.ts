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
  active: [baseTheme.active, 'bg-primary-500 text-black'].join(' '),
  clickable: [
    baseTheme.clickable,
    'hover:bg-primary-500 text-gray-700 hover:text-white'
  ].join(' ')
};

export const darkCommandPaletteItemTheme: CommandPaletteItemTheme = {
  ...baseTheme,
  active: [baseTheme.active, 'bg-primary-600 text-white'].join(' '),
  clickable: [
    baseTheme.clickable,
    'hover:bg-primary-600 text-gray-400 hover:text-white'
  ].join(' ')
};
