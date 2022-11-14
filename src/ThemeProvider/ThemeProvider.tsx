import React, {
  useRef,
  FC,
  PropsWithChildren,
  RefObject,
  useEffect,
  useCallback
} from 'react';
import { ThemeContext } from './ThemeContext';
import { Theme } from './types';
import { buildSheetRules, createSheet, isRefObject } from './utils';

export type ThemeProviderProps = PropsWithChildren<{
  value: Theme;
  reference?: RefObject<any> | HTMLElement;
}>;

export const ThemeProvider: FC<ThemeProviderProps> = ({
  children,
  value,
  reference = document.body
}) => {
  const sheetRef = useRef<CSSStyleSheet | null>(null);

  const applyTheme = useCallback(() => {
    if (!sheetRef.current) {
      const element = isRefObject(reference)
        ? (reference as RefObject<any>).current
        : reference;

      sheetRef.current = createSheet(element, value);
    } else {
      sheetRef.current.replace(buildSheetRules(value).join(' '));
    }
  }, [value, reference]);

  useEffect(() => {
    applyTheme();
  }, [applyTheme]);

  return (
    <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
  );
};
