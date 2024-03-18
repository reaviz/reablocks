export interface PopoverTheme {
  base: string;
  disablePadding: string;
}

const baseTheme: PopoverTheme = {
  base: 'whitespace-nowrap text-center will-change-[transform,opacity] p-1.5 rounded',
  disablePadding: 'p-0'
};

export const lightPopoverTheme: PopoverTheme = {
  ...baseTheme,
  base: [baseTheme.base, 'bg-neutral-300 text-black'].join(' ')
};

export const darkPopoverTheme: PopoverTheme = {
  ...baseTheme,
  base: [baseTheme.base, 'bg-neutral-800 text-white'].join(' ')
};

export const cssVarsPopoverTheme: PopoverTheme = {
  ...baseTheme,
  base: [
    baseTheme.base,
    'text-[color:var(--popover-color)] rounded-[var(--popover-border-radius)] pt-[var(--popover-spacing)] pr-[var(--popover-spacing)] pb-[var(--popover-spacing)] pl-[var(--popover-spacing)] bg-[var(--popover-background)]'
  ].join(' ')
};
