export interface CollapseTheme {
  /** CSS class applied to the root collapse container. */
  base: string;
}

export const collapseTheme: CollapseTheme = {
  base: 'will-change-[height,opacity] overflow-hidden'
};
