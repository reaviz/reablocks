export interface CommandPaletteInputTheme {
  base: string;
  input: string;
  icon: string;
}

const baseTheme: CommandPaletteInputTheme = {
  base: 'flex w-full items-center border-b-2',
  input:
    'flex-1 border-0 box-border p-2.5 focus-within:outline-none focus-visible:outline-none',
  icon: 'w-4 h-4 ml-2.5'
};

export const lightCommandPaletteInputTheme: CommandPaletteInputTheme = {
  ...baseTheme,
  base: [baseTheme.base, 'border-zinc-400'].join(' '),
  input: [
    baseTheme.input,
    'bg-light-background text-black placeholder:text-slate-500'
  ].join(' ')
};

export const darkCommandPaletteInputTheme: CommandPaletteInputTheme = {
  ...baseTheme,
  base: [baseTheme.base, 'border-zinc-700'].join(' '),
  input: [
    baseTheme.input,
    'bg-dark-background text-white placeholder:text-slate-500'
  ].join(' ')
};
