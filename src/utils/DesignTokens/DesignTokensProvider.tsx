import React, {
  useRef,
  FC,
  PropsWithChildren,
  RefObject,
  useCallback,
  useLayoutEffect
} from 'react';
import { DesignTokensContext } from './DesignTokensContext';
import { DesignTokens } from './types';
import { buildSheetRules, createSheet, isRefObject } from './utils';

export type DesignTokensProviderProps = PropsWithChildren<{
  value: DesignTokens;
}>;

export const DesignTokensProvider: FC<DesignTokensProviderProps> = ({
  children,
  value
}) => {
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
    <DesignTokensContext.Provider value={value}>
      {children}
    </DesignTokensContext.Provider>
  );
};
