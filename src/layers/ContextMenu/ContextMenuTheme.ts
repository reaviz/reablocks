export interface ContextMenuTheme {
  enabled: string;
}

const baseContextMenuTheme: ContextMenuTheme = {
  enabled: 'cursor-context-menu'
};

export const defaultContextMenuTheme: ContextMenuTheme = baseContextMenuTheme;

export const unifyContextMenuTheme: ContextMenuTheme = baseContextMenuTheme;
