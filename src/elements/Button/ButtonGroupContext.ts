import { ReactNode, createContext } from 'react';

export interface ButtonGroupContextProps {
  /**
   * Style variant of the buttons.
   */
  variant?: 'filled' | 'outline' | 'text';

  /**
   * The size variation of the buttons.
   */
  size?: 'small' | 'medium' | 'large';
}

export const ButtonGroupContext = createContext<ButtonGroupContextProps>({
  variant: null,
  size: null
});
