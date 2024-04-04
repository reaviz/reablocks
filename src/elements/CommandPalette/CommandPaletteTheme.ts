import {
  CommandPaletteInputTheme,
  cssVarsCommandPaletteInputTheme,
  commandPaletteInputTheme
} from './CommandPaletteInput';
import {
  CommandPaletteItemTheme,
  cssVarsCommandPaletteItemTheme,
  commandPaletteItemTheme
} from './CommandPaletteItem';
import {
  CommandPaletteSectionTheme,
  cssVarsCommandPaletteSectionTheme,
  commandPaletteSectionTheme
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

export const commandPaletteTheme: CommandPaletteTheme = {
  base: [baseTheme.base, 'dark:border-zinc-700 light:border-gray-400'].join(
    ' '
  ),
  inner: [baseTheme.inner, 'bg-background-level4 border-0'].join(' '),
  input: commandPaletteInputTheme,
  item: commandPaletteItemTheme,
  section: commandPaletteSectionTheme
};

export const legacyCommandPaletteTheme: CommandPaletteTheme = {
  base: [baseTheme.base, 'border-zinc-700'].join(' '),
  inner: baseTheme.inner,
  input: cssVarsCommandPaletteInputTheme,
  item: cssVarsCommandPaletteItemTheme,
  section: cssVarsCommandPaletteSectionTheme
};
