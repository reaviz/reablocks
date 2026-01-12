export interface TooltipTheme {
  base: string;
  disablePointer: string;
}

export const defaultTooltipTheme: TooltipTheme = {
  base: 'whitespace-nowrap text-center will-change-[transform,opacity] p-1.5 rounded-sm bg-panel-accent text-text-primary',
  disablePointer: 'pointer-events-none'
};

export const unifyTooltipTheme: TooltipTheme = {
  base: 'whitespace-nowrap text-center will-change-[transform,opacity] p-1.5 rounded-sm bg-tooltip-colors-neutral-background-default text-tooltip-colors-neutral-text-default',
  disablePointer: 'pointer-events-none'
};
