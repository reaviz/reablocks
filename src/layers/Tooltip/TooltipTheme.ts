export interface TooltipTheme {
  /** CSS class applied to the root tooltip container. */
  base: string;
  /** CSS class applied to disable pointer events on the tooltip. */
  disablePointer: string;
  /** CSS class applied to the tooltip arrow. */
  arrow?: string;
}

export const tooltipTheme: TooltipTheme = {
  base: 'whitespace-nowrap text-center will-change-[transform,opacity] p-1.5 rounded-sm bg-panel-accent text-text-primary',
  disablePointer: 'pointer-events-none',
  arrow: 'w-2 h-2 rotate-45 bg-inherit'
};
