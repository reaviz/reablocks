import { ReablocksTheme } from './theme';
import { mergeDeep } from '../../helpers';

type DeepPartial<T> = {
  [P in keyof T]?: DeepPartial<T[P]>;
};

export type PartialReablocksTheme = DeepPartial<ReablocksTheme>;

/**
 * Performs a merge deep on the theme.
 */
export const extendTheme = (
  defaultTheme: ReablocksTheme,
  theme: PartialReablocksTheme
) => {
  return mergeDeep(defaultTheme, theme);
};
