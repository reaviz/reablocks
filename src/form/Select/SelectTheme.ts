import { selectInputTheme, SelectInputTheme } from '@/form';
import { selectMenuTheme, SelectMenuTheme } from '@/form';

export interface SelectTheme {
  selectInput: SelectInputTheme;
  selectMenu: SelectMenuTheme;
}

export const selectTheme: SelectTheme = {
  selectInput: selectInputTheme,
  selectMenu: selectMenuTheme
};
