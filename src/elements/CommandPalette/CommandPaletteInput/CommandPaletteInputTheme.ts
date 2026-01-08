export interface CommandPaletteInputTheme {
  base: string;
  input: string;
  icon: string;
}

export const commandPaletteInputTheme: CommandPaletteInputTheme = {
  base: 'flex w-full items-center border-b-2 border-bottom border-stroke-neutral-1',
  input:
    'flex-1 border-0 box-border p-2.5 focus-within:outline-hidden focus-visible:outline-hidden',
  icon: 'w-4 h-4 ml-2.5'
};
