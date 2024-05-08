import { useContext } from 'react';
import { ThemeContext, ThemeContextProps } from '@/utils/Theme/ThemeProvider';

export const useTheme = (): ThemeContextProps | null => {
  const context = useContext(ThemeContext);

  if (!context) {
    return null;
  }

  return context;
};
