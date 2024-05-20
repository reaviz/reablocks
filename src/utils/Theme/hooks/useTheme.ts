import { useContext } from 'react';
import { ThemeContext, ThemeContextProps } from '@/utils/Theme/ThemeProvider';

/**
 * Hook to get the theme context.
 * @returns ThemeContextProps
 */
export const useTheme = (): ThemeContextProps | null => {
  const context = useContext(ThemeContext);

  if (!context) {
    return null;
  }

  return context;
};
