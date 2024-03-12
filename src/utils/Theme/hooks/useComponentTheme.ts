import { useTheme } from './useTheme';
import { ReablocksTheme } from '../themes';

export const useComponentTheme = <T extends keyof ReablocksTheme['components']>(
  component: T
): ReablocksTheme['components'][T] => {
  const { theme } = useTheme();

  const componentTheme = theme.components[component];
  if (!componentTheme) {
    throw new Error(`Component ${component} does not exist in theme`);
  }

  return componentTheme;
};
