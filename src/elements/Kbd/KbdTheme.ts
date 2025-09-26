export interface KbdTheme {
  base: string;
  chip: string;
}

export const kbdTheme: KbdTheme = {
  base: 'inline-flex gap-1 items-center',
  chip: 'whitespace-nowrap rounded-sm font-mono border-none bg-background-brand-3 text-content-text-neutral-base p-2!',
};
