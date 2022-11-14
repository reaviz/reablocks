import React, {
  useRef,
  FC,
  PropsWithChildren,
  RefObject,
  useEffect,
  useCallback
} from 'react';
import { DesignTokensContext } from './DesignTokensContext';
import { DesignTokens } from './types';
import { buildSheetRules, createSheet, isRefObject } from './utils';

export type DesignTokensProviderProps = PropsWithChildren<{
  value: DesignTokens;
  reference?: RefObject<any> | HTMLElement;
}>;

export const DesignTokensProvider: FC<DesignTokensProviderProps> = ({
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
    <DesignTokensContext.Provider value={value}>
      {children}
    </DesignTokensContext.Provider>
  );
};
