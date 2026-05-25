export interface ContextMenuTheme {
  /** CSS class applied to the trigger when the context menu is enabled. */
  enabled: string;
}

const baseTheme: ContextMenuTheme = {
  enabled: 'cursor-context-menu'
};

export const contextMenuTheme: ContextMenuTheme = {
  ...baseTheme
};
