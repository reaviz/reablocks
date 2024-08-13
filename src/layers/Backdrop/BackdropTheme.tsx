export interface BackdropTheme {
  base: string;
  opacity: number;
}

export const backdropTheme: BackdropTheme = {
  base: 'fixed top-0 left-0 w-full h-full opacity-0 select-none bg-black',
  opacity: 0.8
};

export const legacyBackdropTheme: BackdropTheme = {
  base: 'fixed top-0 left-0 w-full h-full opacity-0 select-none bg-[var(--color-layer-transparent)]',
  opacity: 0.8
};
