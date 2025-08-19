import { ReablocksTheme } from './theme';
import { cloneDeep, mergeDeep } from '@/utils/Theme/helpers';

type DeepPartial<T> = {
  [P in keyof T]?: DeepPartial<T[P]>;
};

export type PartialReablocksTheme = DeepPartial<ReablocksTheme>;

/**
 * Performs a merge deep on the theme.
 */
export const extendTheme = (
  defaultTheme: ReablocksTheme,
  theme: PartialReablocksTheme,
  mergeFunction?: (objValue: any, srcValue: any, key: string) => string
) => mergeDeep(cloneDeep(defaultTheme), theme, mergeFunction);
