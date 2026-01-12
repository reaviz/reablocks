export interface CardTheme {
  base: string;
  disablePadding: string;
  header: string;
  headerText: string;
  content: string;
}

export const unifyCardTheme: CardTheme = {
  base: 'relative flex flex-col p-1.5 rounded-md bg-background-neutral-inverse-raised-4 border border-stroke-neutral-3',
  disablePadding: 'p-0',
  header: 'flex items-center',
  headerText: 'text-xs font-medium mt-0 mb-1',
  content: 'flex-1'
};

export const defaultCardTheme: CardTheme = {
  base: 'relative flex flex-col p-7 rounded-xs bg-panel border border-panel-accent text-text-primary',
  disablePadding: 'p-0',
  header: 'flex items-center',
  headerText: 'text-sm font-medium mt-0 mb-1',
  content: 'flex-1'
};
