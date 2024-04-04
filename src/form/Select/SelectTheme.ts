import {
  cssVarsSelectInputTheme,
  darkSelectInputTheme,
  SelectInputTheme
} from './SelectInput';
import {
  cssVarsSelectMenuTheme,
  darkSelectMenuTheme,
  SelectMenuTheme
} from './SelectMenu';

export interface SelectTheme {
  selectInput: SelectInputTheme;
  selectMenu: SelectMenuTheme;
}

export const darkSelectTheme: SelectTheme = {
  selectInput: darkSelectInputTheme,
  selectMenu: darkSelectMenuTheme
};

export const legacySelectTheme: SelectTheme = {
  selectInput: cssVarsSelectInputTheme,
  selectMenu: cssVarsSelectMenuTheme
};
