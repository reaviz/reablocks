import React, { useRef, FC, PropsWithChildren, useLayoutEffect } from 'react';
import { ThemeContext } from './ThemeContext';
import { Theme } from './types';
import { buildSheetRules, createSheet } from './utils';

export type ThemeProviderProps = PropsWithChildren<{
  value: Theme;
}>;

export const ThemeProvider: FC<ThemeProviderProps> = ({ children, value }) => {
  const sheetRef = useRef<CSSStyleSheet | null>(null);

  useLayoutEffect(() => {
    if (!sheetRef.current) {
      sheetRef.current = createSheet(value);
    } else {
      sheetRef.current.replaceSync(buildSheetRules(value).join(' '));
    }
  }, [value]);

  useLayoutEffect(() => {
    return () => {
      if (sheetRef.current) {
        document.adoptedStyleSheets = document.adoptedStyleSheets.filter(
          s => s !== sheetRef.current
        );
        sheetRef.current = null;
      }
    };
  });

  return (
    <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
  );
};
