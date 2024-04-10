import {
  cssVarsSelectInputTheme,
  selectInputTheme,
  SelectInputTheme
} from './SelectInput';
import {
  cssVarsSelectMenuTheme,
  selectMenuTheme,
  SelectMenuTheme
} from './SelectMenu';

export interface SelectTheme {
  selectInput: SelectInputTheme;
  selectMenu: SelectMenuTheme;
}

export const selectTheme: SelectTheme = {
  selectInput: selectInputTheme,
  selectMenu: selectMenuTheme
};

export const legacySelectTheme: SelectTheme = {
  selectInput: cssVarsSelectInputTheme,
  selectMenu: cssVarsSelectMenuTheme
};
