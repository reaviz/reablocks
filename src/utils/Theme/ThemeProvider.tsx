import React, {
  useRef,
  FC,
  PropsWithChildren,
  useLayoutEffect,
  useMemo
} from 'react';
import { ThemeContext } from './ThemeContext';
import { Theme } from './types';
import { buildSheetRules, createSheet } from './utils';
import defaults from 'defaults';
import { darkTheme } from './themes';

export type ThemeProviderProps = PropsWithChildren<{
  value: Partial<Theme>;
}>;

export const ThemeProvider: FC<ThemeProviderProps> = ({ children, value }) => {
  const sheetRef = useRef<CSSStyleSheet | null>(null);

  // Default merge our theme with the dark theme
  const merged = useMemo(
    () => defaults(value as any, darkTheme as any),
    [value]
  );

  useLayoutEffect(() => {
    if (!sheetRef.current) {
      sheetRef.current = createSheet(merged);
    } else {
      const cssVariables = buildSheetRules(merged);
      sheetRef.current.replaceSync(`
        :root {
          ${cssVariables.map(variable => `${variable}`).join('\n')}
        }
      `);
    }
  }, [merged]);

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
    <ThemeContext.Provider value={merged}>{children}</ThemeContext.Provider>
  );
};
