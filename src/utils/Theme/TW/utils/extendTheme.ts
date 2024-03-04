import { ReablocksTheme } from '../theme';
import { mergeDeep } from '../../../helpers/mergeDeep';

type DeepPartial<T> = {
  [P in keyof T]?: DeepPartial<T[P]>;
};

export type PartialReablocksTheme = DeepPartial<ReablocksTheme>;

export const extendTheme = (
  defaultTheme: ReablocksTheme,
  theme: PartialReablocksTheme
) => {
  return mergeDeep(defaultTheme, theme);
};
