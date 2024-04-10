export interface CollapseTheme {
  base: string;
}

const baseTheme: CollapseTheme = {
  base: 'will-change-[height,opacity] overflow-hidden'
};

export const collapseTheme: CollapseTheme = {
  ...baseTheme
};

export const legacyCollapseTheme: CollapseTheme = {
  ...baseTheme
};
