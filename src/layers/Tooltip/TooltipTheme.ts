export interface TooltipTheme {
  base: string;
  disablePointer: string;
}

const baseTheme: TooltipTheme = {
  base: 'whitespace-nowrap text-center will-change-[transform,opacity] p-1.5 rounded-sm',
  disablePointer: 'pointer-events-none'
};

export const tooltipTheme: TooltipTheme = {
  ...baseTheme,
  base: [baseTheme.base, 'bg-panel-accent text-text-primary'].join(' ')
};
