import { mergeDeep } from '@/utils/Theme/helpers';

type DeepPartial<T> = {
  [P in keyof T]?: DeepPartial<T[P]>;
};

/**
 * Performs a merge deep on the component theme.
 */

export const extendComponentTheme = <T extends Object>(
  defaultTheme: T,
  theme: DeepPartial<T>
) => mergeDeep(defaultTheme, theme);
