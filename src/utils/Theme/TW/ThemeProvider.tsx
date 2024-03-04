import React, { createContext, FC, useEffect, useState } from 'react';
import { ReablocksTheme } from './theme';
import { darkTheme as defaultTheme } from './theme';
import { mergeDeep } from '../../helpers/mergeDeep';

export interface ThemeContextProps {
  activeTheme: ReablocksTheme;
  updateTheme: (newTheme: ReablocksTheme) => void;
}

export const ThemeContext = createContext<ThemeContextProps>(null);

interface ThemeProviderProps {
  theme: ReablocksTheme;
  children: React.ReactNode;
}

export const ThemeProvider: FC<ThemeProviderProps> = ({ children, theme }) => {
  const [activeTheme, setActiveTheme] = useState(theme);

  useEffect(() => {
    if (theme) {
      setActiveTheme(mergeDeep(defaultTheme, theme));
    }
  }, [theme]);

  const updateTheme = (newTheme: ReablocksTheme) => {
    setActiveTheme({ ...activeTheme, ...newTheme });
  };

  return (
    <ThemeContext.Provider value={{ activeTheme, updateTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
