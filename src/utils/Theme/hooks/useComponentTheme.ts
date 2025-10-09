import type { ReablocksTheme } from '@/utils/Theme/themes/theme';

import { useTheme } from './useTheme';

/**
 * Hook to get the theme for a specific component.
 * @param component
 * @param customTheme
 * @returns theme object
 */
export const useComponentTheme = <T extends object>(
  component: keyof ReablocksTheme['components'],
  customTheme?: T
): T => {
  const context = useTheme();

  if (customTheme) {
    return customTheme;
  }

  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }

  const componentTheme = context.theme.components[component as string];
  if (!componentTheme) {
    throw new Error(`Component ${component} does not exist in theme`);
  }

  return componentTheme;
};
