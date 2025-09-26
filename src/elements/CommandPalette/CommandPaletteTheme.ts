import type { CommandPaletteInputTheme } from '@/elements';
import type { CommandPaletteItemTheme } from '@/elements';
import type { CommandPaletteSectionTheme } from '@/elements';
import { commandPaletteInputTheme } from '@/elements';
import { commandPaletteItemTheme } from '@/elements';
import { commandPaletteSectionTheme } from '@/elements';

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
  section: commandPaletteSectionTheme,
};
