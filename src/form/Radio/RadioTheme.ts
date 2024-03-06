export interface RadioTheme {
  base: string;
  input: string;
  label: string;
}

const baseTheme: RadioTheme = {
  base: '',
  input: '',
  label: ''
};

export const lightRadioTheme: RadioTheme = {
  ...baseTheme
};

export const darkRadioTheme: RadioTheme = {
  ...baseTheme
};
