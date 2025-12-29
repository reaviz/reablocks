import type { SelectInputTheme } from '@/form/Select/SelectInput';
import { selectInputTheme } from '@/form/Select/SelectInput';
import type { SelectMenuTheme } from '@/form/Select/SelectMenu';
import { selectMenuTheme } from '@/form/Select/SelectMenu';

export interface SelectTheme {
  selectInput: SelectInputTheme;
  selectMenu: SelectMenuTheme;
}

export const selectTheme: SelectTheme = {
  selectInput: selectInputTheme,
  selectMenu: selectMenuTheme
};
