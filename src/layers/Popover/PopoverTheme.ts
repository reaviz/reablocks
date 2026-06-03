export interface PopoverTheme {
  /** CSS class applied to the root popover container. */
  base: string;
  /** CSS class applied when padding is disabled. */
  disablePadding: string;
}

export const popoverTheme: PopoverTheme = {
  base: 'whitespace-nowrap text-center will-change-[transform,opacity] p-1.5 rounded-sm bg-panel text-text-primary',
  disablePadding: 'p-0'
};
