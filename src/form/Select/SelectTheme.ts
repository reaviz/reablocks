import {
  darkSelectInputTheme,
  lightSelectInputTheme,
  SelectInputTheme
} from './SelectInput';

export interface SelectTheme {
  selectInput: SelectInputTheme;
}

const baseSelectTheme: Partial<SelectTheme> = {};

export const lightSelectTheme: SelectTheme = {
  selectInput: lightSelectInputTheme
};

export const darkSelectTheme: SelectTheme = {
  selectInput: darkSelectInputTheme
};
