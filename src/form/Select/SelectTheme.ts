import {
  cssVarsSelectInputTheme,
  darkSelectInputTheme,
  lightSelectInputTheme,
  SelectInputTheme
} from './SelectInput';
import {
  cssVarsSelectMenuTheme,
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

export const cssVarsSelectTheme: SelectTheme = {
  selectInput: cssVarsSelectInputTheme,
  selectMenu: cssVarsSelectMenuTheme
};
