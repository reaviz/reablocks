export interface BlockTheme {
  base: string;
  disableMargin: string;
}

const baseTheme: BlockTheme = {
  base: 'mb-2.5',
  disableMargin: 'mb-0'
};

export const lightBlockTheme: BlockTheme = {
  ...baseTheme
};

export const darkBlockTheme: BlockTheme = {
  ...baseTheme
};
