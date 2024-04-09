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
  emptyContainer: string;
  input: CommandPaletteInputTheme;
  item: CommandPaletteItemTheme;
  section: CommandPaletteSectionTheme;
}

const baseTheme: Partial<CommandPaletteTheme> = {
  base: 'w-full border',
  inner: 'max-h-[80vh] overflow-y-auto'
};

export const commandPaletteTheme: CommandPaletteTheme = {
  base: [baseTheme.base, 'border-panel-accent'].join(' '),
  inner: [baseTheme.inner, 'bg-panel border-0'].join(' '),
  emptyContainer: 'bg-panel',
  input: commandPaletteInputTheme,
  item: commandPaletteItemTheme,
  section: commandPaletteSectionTheme
};

export const legacyCommandPaletteTheme: CommandPaletteTheme = {
  base: [baseTheme.base, 'border-zinc-700'].join(' '),
  inner: baseTheme.inner,
  emptyContainer: '',
  input: cssVarsCommandPaletteInputTheme,
  item: cssVarsCommandPaletteItemTheme,
  section: cssVarsCommandPaletteSectionTheme
};
