export interface TooltipTheme {
  base: string;
  disablePointer: string;
  arrow: string;
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
