export interface ContextMenuTheme {
  enabled: string;
}

const baseTheme: ContextMenuTheme = {
  enabled: 'cursor-context-menu'
};

export const lightContextMenuTheme: ContextMenuTheme = {
  ...baseTheme
};

export const darkContextMenuTheme: ContextMenuTheme = {
  ...baseTheme
};

export const cssVarsContextMenuTheme: ContextMenuTheme = {
  ...baseTheme
};
