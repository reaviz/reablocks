import { DeepPartial } from '@/utils';
import { ReablocksTheme } from './theme';
import { mergeDeep } from '@/utils/Theme/helpers';

export type PartialReablocksTheme = DeepPartial<ReablocksTheme>;

/**
 * Performs a merge deep on the theme.
 */
export const extendTheme = (
  defaultTheme: ReablocksTheme,
  theme: PartialReablocksTheme,
  mergeFunction?: (objValue: any, srcValue: any, key: string) => string
) => mergeDeep(defaultTheme, theme, mergeFunction);
