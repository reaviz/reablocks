import type { CommandPaletteInputTheme } from './CommandPaletteInput';
import {
  defaultCommandPaletteInputTheme,
  unifyCommandPaletteInputTheme
} from './CommandPaletteInput/CommandPaletteInputTheme';
import type { CommandPaletteItemTheme } from './CommandPaletteItem';
import {
  defaultCommandPaletteItemTheme,
  unifyCommandPaletteItemTheme
} from './CommandPaletteItem/CommandPaletteItemTheme';
import type { CommandPaletteSectionTheme } from './CommandPaletteSection';
import {
  defaultCommandPaletteSectionTheme,
  unifyCommandPaletteSectionTheme
} from './CommandPaletteSection/CommandPaletteSectionTheme';

export interface CommandPaletteTheme {
  base: string;
  inner: string;
  emptyContainer: string;
  input: CommandPaletteInputTheme;
  item: CommandPaletteItemTheme;
  section: CommandPaletteSectionTheme;
}

export const unifyCommandPaletteTheme: CommandPaletteTheme = {
  base: 'w-full border border-stroke-neutral-1',
  inner: 'max-h-[80vh] overflow-y-auto border-0',
  emptyContainer: '',
  input: unifyCommandPaletteInputTheme,
  item: unifyCommandPaletteItemTheme,
  section: unifyCommandPaletteSectionTheme
};

export const defaultCommandPaletteTheme: CommandPaletteTheme = {
  base: 'w-full border border-panel-accent',
  inner: 'max-h-[80vh] overflow-y-auto bg-panel border-0',
  emptyContainer: 'bg-panel',
  input: defaultCommandPaletteInputTheme,
  item: defaultCommandPaletteItemTheme,
  section: defaultCommandPaletteSectionTheme
};
