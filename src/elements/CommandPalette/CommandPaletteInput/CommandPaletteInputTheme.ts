export interface CommandPaletteInputTheme {
  base: string;
  input: string;
  icon: string;
}

export const commandPaletteInputTheme: CommandPaletteInputTheme = {
  base: 'flex w-full items-center border-b-2 bg-panel border-bottom border-panel-accent',
  input:
    'flex-1 border-0 box-border p-2.5 focus-within:outline-hidden focus-visible:outline-hidden bg-panel text-text-primary placeholder:text-text-secondary',
  icon: 'w-4 h-4 ml-2.5'
};
