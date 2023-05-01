import { createContext, useContext } from 'react';
import { Theme } from './types';

export const ThemeContext = createContext<Theme>({});

export const useTheme = () => {
  const context = useContext(ThemeContext);

  if (context === undefined) {
    throw new Error(
      '`useTheme` hook must be used within a `ThemeContext` component'
    );
  }

  return context;
};
