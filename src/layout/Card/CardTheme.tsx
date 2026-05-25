export interface CardTheme {
  base: string;
  disablePadding: string;
  header: string;
  headerText: string;
  content: string;
}

export const cardTheme: CardTheme = {
  base: 'relative flex flex-col p-7 rounded-xs bg-panel border border-panel-accent text-text-primary',
  disablePadding: 'p-0',
  header: 'flex items-center',
  headerText: 'text-sm font-medium mt-0 mb-1',
  content: 'flex-1'
};
