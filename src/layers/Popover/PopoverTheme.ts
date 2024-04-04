export interface PopoverTheme {
  base: string;
  disablePadding: string;
}

const baseTheme: PopoverTheme = {
  base: 'whitespace-nowrap text-center will-change-[transform,opacity] p-1.5 rounded',
  disablePadding: 'p-0'
};

export const popoverTheme: PopoverTheme = {
  ...baseTheme,
  base: [baseTheme.base, 'bg-background-level4 text-typography'].join(' ')
};

export const legacyPopoverTheme: PopoverTheme = {
  ...baseTheme,
  base: [
    baseTheme.base,
    'text-[color:var(--popover-color)] rounded-[var(--popover-border-radius)] pt-[var(--popover-spacing)] pr-[var(--popover-spacing)] pb-[var(--popover-spacing)] pl-[var(--popover-spacing)] bg-[var(--popover-background)]'
  ].join(' ')
};
