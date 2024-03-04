import { ReaBlocksComponents } from '../theme';
import { useTheme } from './useTheme';

export const useComponentTheme = (component: keyof ReaBlocksComponents) => {
  const { activeTheme } = useTheme();

  const componentTheme = activeTheme.components[component];
  if (!componentTheme) {
    throw new Error(`component ${component} does not exist in theme`);
  }

  return componentTheme;
};
