import { ReactNode, createContext } from 'react';

export interface RadioGroupContextProps {
  /**
   * Event handler for when the radio selection is changed.
   */
  onChange: (value: any) => void;

  /**
   * Default value of the Radio Button which is checked
   */
  selectedValue: string;
}

export const RadioGroupContext = createContext<RadioGroupContextProps>({
  onChange: null,
  selectedValue: null
});
