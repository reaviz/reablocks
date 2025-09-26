import type { DeepPartial } from '@/utils';
import { mergeDeep } from '@/utils/Theme/helpers';

/**
 * Performs a merge deep on the component theme.
 */

export const extendComponentTheme = <T extends object>(
  defaultTheme: T,
  theme: DeepPartial<T>,
  mergeFunction?: (objValue: any, srcValue: any, key: string) => string,
) => mergeDeep(defaultTheme, theme, mergeFunction);
