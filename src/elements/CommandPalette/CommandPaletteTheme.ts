import { CommandPaletteInputTheme, commandPaletteInputTheme } from '@/elements';
import { CommandPaletteItemTheme, commandPaletteItemTheme } from '@/elements';
import {
  CommandPaletteSectionTheme,
  commandPaletteSectionTheme
} from '@/elements';

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
