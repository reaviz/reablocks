import { selectInputTheme, SelectInputTheme } from './SelectInput';
import { selectMenuTheme, SelectMenuTheme } from './SelectMenu';

export interface SelectTheme {
  selectInput: SelectInputTheme;
  selectMenu: SelectMenuTheme;
}

export const selectTheme: SelectTheme = {
  selectInput: selectInputTheme,
  selectMenu: selectMenuTheme
};
