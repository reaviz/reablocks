import type { CommandPaletteInputTheme } from './CommandPaletteInput';
import { commandPaletteInputTheme } from './CommandPaletteInput/CommandPaletteInputTheme';
import type { CommandPaletteItemTheme } from './CommandPaletteItem';
import { commandPaletteItemTheme } from './CommandPaletteItem/CommandPaletteItemTheme';
import type { CommandPaletteSectionTheme } from './CommandPaletteSection';
import { commandPaletteSectionTheme } from './CommandPaletteSection/CommandPaletteSectionTheme';

export interface CommandPaletteTheme {
  base: string;
  inner: string;
  emptyContainer: string;
  input: CommandPaletteInputTheme;
  item: CommandPaletteItemTheme;
  section: CommandPaletteSectionTheme;
}

export const commandPaletteTheme: CommandPaletteTheme = {
  base: 'w-full border border-stroke-neutral-1',
  inner: 'max-h-[80vh] overflow-y-auto border-0',
  emptyContainer: '',
  input: commandPaletteInputTheme,
  item: commandPaletteItemTheme,
  section: commandPaletteSectionTheme
};
