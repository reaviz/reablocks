export interface DividerTheme {
  /** CSS class applied to the root divider element. */
  base?: string;
  /** Class names for each divider orientation. */
  orientation?: {
    vertical?: string;
    horizontal?: string;
  };
  /** Class names for each divider variant. */
  variant?: {
    primary?: string;
    secondary?: string;
  };
  /** CSS class applied when divider margins are disabled. */
  disableMargins?: string;
}

const baseTheme: DividerTheme = {
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

export const dividerTheme = {
  ...baseTheme
};
