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
  reference?: RefObject<any> | HTMLElement;
}>;

export const DesignTokensProvider: FC<DesignTokensProviderProps> = ({
  children,
  value,
  reference = document.body
}) => {
  const sheetRef = useRef<CSSStyleSheet | null>(null);
  const loadedRef = useRef<boolean>(false);

  const applyTheme = useCallback(() => {
    if (!sheetRef.current) {
      const element = isRefObject(reference)
        ? (reference as RefObject<any>).current
        : reference;

      sheetRef.current = createSheet(element, value);
      loadedRef.current = true;
    } else if (loadedRef.current) {
      sheetRef.current.replace(buildSheetRules(value).join(' '));
    }
  }, [value, reference]);

  useLayoutEffect(() => {
    applyTheme();
  }, [applyTheme]);

  useLayoutEffect(() => {
    return () => {
      if (sheetRef.current && loadedRef.current) {
        sheetRef.current.ownerNode.remove();
      }
    };
  });

  return (
    <DesignTokensContext.Provider value={value}>
      {children}
    </DesignTokensContext.Provider>
  );
};
