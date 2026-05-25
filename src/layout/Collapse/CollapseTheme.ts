export interface CollapseTheme {
  /** CSS class applied to the root collapse container. */
  base: string;
}

const baseTheme: CollapseTheme = {
  base: 'will-change-[height,opacity] overflow-hidden'
};

export const collapseTheme: CollapseTheme = {
  ...baseTheme
};
