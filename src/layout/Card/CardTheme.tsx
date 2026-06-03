export interface CardTheme {
  /** CSS class applied to the root card container. */
  base: string;
  /** CSS class applied when padding is disabled. */
  disablePadding: string;
  /** CSS class applied to the card header. */
  header: string;
  /** CSS class applied to the header text. */
  headerText: string;
  /** CSS class applied to the card content area. */
  content: string;
}

export const cardTheme: CardTheme = {
  base: 'relative flex flex-col p-7 rounded-xs bg-panel border border-panel-accent text-text-primary',
  disablePadding: 'p-0',
  header: 'flex items-center',
  headerText: 'text-sm font-medium mt-0 mb-1',
  content: 'flex-1'
};
