export interface PopoverTheme {
  base: string;
  disablePadding: string;
}

export const defaultPopoverTheme: PopoverTheme = {
  base: 'whitespace-nowrap text-center will-change-[transform,opacity] p-1.5 rounded-sm bg-panel text-text-primary',
  disablePadding: 'p-0'
};

export const unifyPopoverTheme: PopoverTheme = {
  base: 'whitespace-nowrap text-center will-change-[transform,opacity] p-1.5 rounded-sm',
  disablePadding: 'p-0'
};
