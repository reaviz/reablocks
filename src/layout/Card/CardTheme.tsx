export interface CardTheme {
  base: string;
  disablePadding: string;
  header: string;
  headerText: string;
  content: string;
}

export const cardTheme: CardTheme = {
  base: 'relative flex flex-col p-1.5 rounded-md',
  disablePadding: 'p-0',
  header: 'flex items-center',
  headerText: 'text-sm font-medium mt-0 mb-1',
  content: 'flex-1'
};
