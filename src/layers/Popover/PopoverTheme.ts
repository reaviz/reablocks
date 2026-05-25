export interface PopoverTheme {
  base: string;
  disablePadding: string;
}

export const popoverTheme: PopoverTheme = {
  base: 'whitespace-nowrap text-center will-change-[transform,opacity] p-1.5 rounded-sm bg-panel text-text-primary',
  disablePadding: 'p-0'
};
