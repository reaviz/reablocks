export interface CollapseTheme {
  base: string;
}

const baseCollapseTheme: CollapseTheme = {
  base: 'will-change-[height,opacity] overflow-hidden'
};

export const defaultCollapseTheme: CollapseTheme = baseCollapseTheme;

export const unifyCollapseTheme: CollapseTheme = baseCollapseTheme;
