export interface DividerTheme {
  base?: string;
  orientation?: {
    vertical?: string;
    horizontal?: string;
  };
  variant?: {
    primary?: string;
    secondary?: string;
  };
  disableMargins?: string;
}

export const dividerTheme: DividerTheme = {
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
