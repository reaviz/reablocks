export interface TooltipTheme {
  base: string;
  disablePointer: string;
}

export const tooltipTheme: TooltipTheme = {
  base: 'text-tooltip-colors-neutral-text-default bg-tooltip-colors-neutral-background-default whitespace-nowrap text-center will-change-[transform,opacity] p-1.5 rounded-sm',
  disablePointer: 'pointer-events-none',
};
