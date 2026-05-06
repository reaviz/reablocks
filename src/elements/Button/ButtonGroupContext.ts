import { ReactNode, createContext } from 'react';

export interface ButtonGroupContextProps {
  /**
   * Style variant of the buttons.
   */
  variant?: 'filled' | 'outline' | 'text' | string;

  /**
   * The size variation of the buttons.
   */
  size?: 'small' | 'medium' | 'large' | string;
}

export const ButtonGroupContext = createContext<ButtonGroupContextProps>({
  variant: null,
  size: null
});
