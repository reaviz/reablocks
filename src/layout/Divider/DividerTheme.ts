export interface DividerOrientationTheme {
  vertical?: string;
  horizontal?: string;
}

export interface DividerVariantTheme {
  primary?: string;
  secondary?: string;
  [key: string]: string;
}

export interface DividerTheme {
  base?: string;
  orientation?: DividerOrientationTheme;
  variant?: DividerVariantTheme;
  disableMargins?: string;
}

export const defaultDividerTheme: DividerTheme = {
  base: 'border-none',
  orientation: {
    horizontal: 'h-px w-full my-2.5',
    vertical: 'w-px h-full mx-2.5'
  },
  variant: {
    primary: 'bg-surface',
    secondary: 'bg-linear-to-r from-transparent to-transparent via-blue-500'
  },
  disableMargins: 'my-0 mx-0'
};

export const unifyDividerTheme: DividerTheme = {
  base: 'border-none',
  orientation: {
    horizontal: 'h-px w-full my-2.5',
    vertical: 'w-px h-full mx-2.5'
  },
  variant: {
    primary: 'bg-stroke-neutral-5',
    secondary: 'bg-linear-to-r from-transparent to-transparent via-blue-500'
  },
  disableMargins: 'my-0 mx-0'
};
