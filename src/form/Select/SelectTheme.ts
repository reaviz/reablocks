import { selectInputTheme, SelectInputTheme } from './SelectInput';
import { selectMenuTheme, SelectMenuTheme } from './SelectMenu';

export interface SelectTheme {
  /** Theme applied to the select input element. */
  selectInput: SelectInputTheme;
  /** Theme applied to the select dropdown menu. */
  selectMenu: SelectMenuTheme;
}

export const selectTheme: SelectTheme = {
  selectInput: selectInputTheme,
  selectMenu: selectMenuTheme
};
