import type { SelectInputTheme } from '@/form/Select/SelectInput/SelectInputTheme';
import {
  defaultSelectInputTheme,
  unifySelectInputTheme
} from '@/form/Select/SelectInput/SelectInputTheme';
import type { SelectMenuTheme } from '@/form/Select/SelectMenu/SelectMenuTheme';
import {
  defaultSelectMenuTheme,
  unifySelectMenuTheme
} from '@/form/Select/SelectMenu/SelectMenuTheme';

export interface SelectTheme {
  selectInput: SelectInputTheme;
  selectMenu: SelectMenuTheme;
}

export const defaultSelectTheme: SelectTheme = {
  selectInput: defaultSelectInputTheme,
  selectMenu: defaultSelectMenuTheme
};

export const unifySelectTheme: SelectTheme = {
  selectInput: unifySelectInputTheme,
  selectMenu: unifySelectMenuTheme
};
