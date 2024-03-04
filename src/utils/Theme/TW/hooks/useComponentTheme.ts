import { ReablocksTheme } from '../theme';
import { useTheme } from './useTheme';

export const useComponentTheme = <T extends keyof ReablocksTheme['components']>(
  component: T
): ReablocksTheme['components'][T] => {
  const { activeTheme } = useTheme();

  const componentTheme = activeTheme.components[component];
  if (!componentTheme) {
    throw new Error(`component ${component} does not exist in theme`);
  }

  return componentTheme;
};
