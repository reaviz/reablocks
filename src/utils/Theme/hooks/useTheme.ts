import { useContext } from 'react';

import type { ThemeContextProps } from '@/utils/Theme/ThemeProvider';
import { ThemeContext } from '@/utils/Theme/ThemeProvider';

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
