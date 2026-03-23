export interface BackdropTheme {
  base: string;
  opacity: number;
}

const baseBackdropTheme: BackdropTheme = {
  base: 'fixed top-0 left-0 w-full h-full opacity-0 select-none bg-black',
  opacity: 0.8
};

export const defaultBackdropTheme: BackdropTheme = baseBackdropTheme;

export const unifyBackdropTheme: BackdropTheme = baseBackdropTheme;
