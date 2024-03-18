import {
  CommandPaletteInputTheme,
  cssVarsCommandPaletteInputTheme,
  darkCommandPaletteInputTheme,
  lightCommandPaletteInputTheme
} from './CommandPaletteInput';
import {
  CommandPaletteItemTheme,
  cssVarsCommandPaletteItemTheme,
  darkCommandPaletteItemTheme,
  lightCommandPaletteItemTheme
} from './CommandPaletteItem';
import {
  CommandPaletteSectionTheme,
  cssVarsCommandPaletteSectionTheme,
  darkCommandPaletteSectionTheme,
  lightCommandPaletteSectionTheme
} from './CommandPaletteSection';

export interface CommandPaletteTheme {
  base: string;
  inner: string;
  input: CommandPaletteInputTheme;
  item: CommandPaletteItemTheme;
  section: CommandPaletteSectionTheme;
}

const baseTheme: Partial<CommandPaletteTheme> = {
  base: 'w-full border',
  inner: 'max-h-[80vh] overflow-y-auto'
};

export const lightCommandPaletteTheme: CommandPaletteTheme = {
  base: [baseTheme.base, 'border-gray-300'].join(' '),
  inner: baseTheme.inner,
  input: lightCommandPaletteInputTheme,
  item: lightCommandPaletteItemTheme,
  section: lightCommandPaletteSectionTheme
};

export const darkCommandPaletteTheme: CommandPaletteTheme = {
  base: [baseTheme.base, 'border-zinc-700'].join(' '),
  inner: baseTheme.inner,
  input: darkCommandPaletteInputTheme,
  item: darkCommandPaletteItemTheme,
  section: darkCommandPaletteSectionTheme
};

export const cssVarsCommandPaletteTheme: CommandPaletteTheme = {
  base: [baseTheme.base, 'border-zinc-700'].join(' '),
  inner: baseTheme.inner,
  input: cssVarsCommandPaletteInputTheme,
  item: cssVarsCommandPaletteItemTheme,
  section: cssVarsCommandPaletteSectionTheme
};
