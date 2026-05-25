export interface TooltipTheme {
  /** CSS class applied to the root tooltip container. */
  base: string;
  /** CSS class applied to disable pointer events on the tooltip. */
  disablePointer: string;
  /** CSS class applied to the tooltip arrow. */
  arrow?: string;
}

const baseTheme: TooltipTheme = {
  base: 'whitespace-nowrap text-center will-change-[transform,opacity] p-1.5 rounded-sm',
  disablePointer: 'pointer-events-none',
  arrow: 'w-2 h-2 rotate-45 bg-inherit'
};

export const tooltipTheme: TooltipTheme = {
  ...baseTheme,
  base: [baseTheme.base, 'bg-panel-accent text-text-primary'].join(' ')
};
