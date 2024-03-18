export interface CollapseTheme {
  base: string;
}

const baseTheme: CollapseTheme = {
  base: 'will-change-[height,opacity] overflow-hidden'
};

export const lightCollapseTheme: CollapseTheme = {
  ...baseTheme
};

export const darkCollapseTheme: CollapseTheme = {
  ...baseTheme
};

export const cssVarsCollapseTheme: CollapseTheme = {
  ...baseTheme
};
