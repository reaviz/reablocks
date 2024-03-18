export interface TooltipTheme {
  base: string;
  disablePointer: string;
}

const baseTheme: TooltipTheme = {
  base: 'whitespace-nowrap text-center will-change-[transform,opacity] p-1.5 rounded',
  disablePointer: 'pointer-events-none'
};

export const lightTooltipTheme: TooltipTheme = {
  ...baseTheme,
  base: [baseTheme.base, 'bg-neutral-300 text-black'].join(' ')
};

export const darkTooltipTheme: TooltipTheme = {
  ...baseTheme,
  base: [baseTheme.base, 'bg-neutral-800 text-white'].join(' ')
};

export const cssVarsTooltipTheme: TooltipTheme = {
  ...baseTheme,
  base: [
    baseTheme.base,
    'text-[color:var(--tooltip-color)] rounded-[var(--tooltip-border-radius)] border-[length:var(--tooltip-border)] pt-[var(--tooltip-spacing)] pr-[var(--tooltip-spacing)] pb-[var(--tooltip-spacing)] pl-[var(--tooltip-spacing)] bg-[var(--tooltip-background)]'
  ].join(' ')
};
