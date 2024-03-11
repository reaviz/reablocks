import { ReablocksTheme } from '../themes';
import { mergeDeep } from '../../helpers';

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
