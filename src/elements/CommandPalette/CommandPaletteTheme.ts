import {
  CommandPaletteInputTheme,
  commandPaletteInputTheme
} from './CommandPaletteInput';
import {
  CommandPaletteItemTheme,
  commandPaletteItemTheme
} from './CommandPaletteItem';
import {
  CommandPaletteSectionTheme,
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

export const commandPaletteTheme: CommandPaletteTheme = {
  base: 'w-full border border-panel-accent',
  inner: 'max-h-[80vh] overflow-y-auto bg-panel border-0',
  emptyContainer: 'bg-panel',
  input: commandPaletteInputTheme,
  item: commandPaletteItemTheme,
  section: commandPaletteSectionTheme
};
