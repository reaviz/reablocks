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
  base: [baseTheme.base, 'bg-slate-300 text-black'].join(' ')
};

export const darkTooltipTheme: TooltipTheme = {
  ...baseTheme,
  base: [baseTheme.base, 'bg-slate-800 text-white'].join(' ')
};
