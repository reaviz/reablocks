import { useContext } from 'react';
import { ThemeContext, ThemeContextProps } from '../ThemeProvider';

export const useTheme = (): ThemeContextProps | null => {
  const context = useContext(ThemeContext);

  if (!context) {
    return null;
  }

  return context;
};
