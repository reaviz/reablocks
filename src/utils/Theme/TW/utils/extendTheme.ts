import { ReaBlocksTheme } from '../theme';
import { mergeDeep } from '../../../helpers/mergeDeep';

export const extendTheme = (
  defaultTheme: ReaBlocksTheme,
  theme: ReaBlocksTheme
) => {
  return mergeDeep(defaultTheme, theme);
};
