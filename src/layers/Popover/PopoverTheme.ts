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
