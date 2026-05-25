export interface PopoverTheme {
  /** CSS class applied to the root popover container. */
  base: string;
  /** CSS class applied when padding is disabled. */
  disablePadding: string;
}

const baseTheme: PopoverTheme = {
  base: 'whitespace-nowrap text-center will-change-[transform,opacity] p-1.5 rounded-sm',
  disablePadding: 'p-0'
};

export const popoverTheme: PopoverTheme = {
  ...baseTheme,
  base: [baseTheme.base, 'bg-panel text-text-primary'].join(' ')
};
