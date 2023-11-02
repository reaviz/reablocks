import React, { useRef, FC, PropsWithChildren, useLayoutEffect } from 'react';
import { ThemeContext } from './ThemeContext';
import { Theme } from './types';
import { buildSheetRules, createSheet } from './utils';

export type ThemeProviderProps = PropsWithChildren<{
  theme: Partial<Theme>;
}>;

export const ThemeProvider: FC<ThemeProviderProps> = ({ children, theme }) => {
  const sheetRef = useRef<CSSStyleSheet | null>(null);

  useLayoutEffect(() => {
    if (!sheetRef.current) {
      sheetRef.current = createSheet(theme);
    } else {
      const cssVariables = buildSheetRules(theme);
      sheetRef.current.replaceSync(`
        :root {
          ${cssVariables.map(variable => `${variable}`).join('\n')}
        }
      `);
    }
  }, [theme]);

  useLayoutEffect(() => {
    return () => {
      if (sheetRef.current) {
        document.adoptedStyleSheets = document.adoptedStyleSheets.filter(
          s => s !== sheetRef.current
        );
        sheetRef.current = null;
      }
    };
  }, []);

  return (
    <ThemeContext.Provider value={theme}>{children}</ThemeContext.Provider>
  );
};
