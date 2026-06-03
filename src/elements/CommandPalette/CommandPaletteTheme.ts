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
  /** CSS class applied to the root command palette container. */
  base: string;
  /** CSS class applied to the inner scrollable area. */
  inner: string;
  /** CSS class applied to the empty state container when no results are present. */
  emptyContainer: string;
  /** Theme for the command palette input. */
  input: CommandPaletteInputTheme;
  /** Theme for individual command palette items. */
  item: CommandPaletteItemTheme;
  /** Theme for command palette sections. */
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
