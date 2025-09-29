import type { SelectInputTheme } from '@/form';
import type { SelectMenuTheme } from '@/form';
import { selectInputTheme } from '@/form';
import { selectMenuTheme } from '@/form';

export interface SelectTheme {
  selectInput: SelectInputTheme;
  selectMenu: SelectMenuTheme;
}

export const selectTheme: SelectTheme = {
  selectInput: selectInputTheme,
  selectMenu: selectMenuTheme
};
