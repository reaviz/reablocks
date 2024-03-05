import {
  darkSelectInputTheme,
  lightSelectInputTheme,
  SelectInputTheme
} from './SelectInput';
import {
  darkSelectMenuTheme,
  lightSelectMenuTheme,
  SelectMenuTheme
} from './SelectMenu';

export interface SelectTheme {
  selectInput: SelectInputTheme;
  selectMenu: SelectMenuTheme;
}

export const lightSelectTheme: SelectTheme = {
  selectInput: lightSelectInputTheme,
  selectMenu: lightSelectMenuTheme
};

export const darkSelectTheme: SelectTheme = {
  selectInput: darkSelectInputTheme,
  selectMenu: darkSelectMenuTheme
};
