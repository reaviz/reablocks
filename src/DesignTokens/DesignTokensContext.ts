import { createContext, useContext } from 'react';
import { DesignTokens } from './types';

export const DesignTokensContext = createContext<DesignTokens>({} as any);

export const useDts = () => {
  const context = useContext(DesignTokensContext);

  if (context === undefined) {
    throw new Error(
      '`useDts` hook must be used within a `DesignTokenContext` component'
    );
  }

  return context;
};
