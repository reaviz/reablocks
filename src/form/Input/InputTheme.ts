export interface InputTheme {
  base: string;
}

// In progress
const baseTheme: InputTheme = {
  base: ''
};

export const lightInputTheme: InputTheme = {
  ...baseTheme
};

export const darkInputTheme: InputTheme = {
  ...baseTheme
};
