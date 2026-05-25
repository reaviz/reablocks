export interface TooltipTheme {
  base: string;
  disablePointer: string;
  arrow?: string;
}

export const tooltipTheme: TooltipTheme = {
  base: 'whitespace-nowrap text-center will-change-[transform,opacity] p-1.5 rounded-sm bg-panel-accent text-text-primary',
  disablePointer: 'pointer-events-none',
  arrow: 'w-2 h-2 rotate-45 bg-inherit'
};
