import type { FC, ReactNode } from 'react';

export type SelectValue = SelectOptionProps | SelectOptionProps[] | null;

export interface SelectOptionProps {
  /**
   * Value of the option. Usually a string value.
   */
  value: any;

  /**
   * Default label of the option.
   */
  children?: ReactNode | string;

  /**
   * Custom input label.
   */
  inputLabel?: ReactNode | string;

  /**
   * Optional group for the option.
   */
  group?: string;

  /**
   * Optional menu label.
   */
  menuLabel?: ReactNode | string;

  /**
   * Optional input prefix.
   */
  inputPrefix?: ReactNode | string;

  /**
   * Whether the option is selected.
   */
  selected?: boolean;

  /**
   * Whether the option is disabled.
   */
  disabled?: boolean;
}

export const SelectOption: FC<SelectOptionProps> = ({ children }) =>
  children as any;
