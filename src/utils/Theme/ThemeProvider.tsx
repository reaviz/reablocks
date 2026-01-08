'use client';

import type { FC, PropsWithChildren } from 'react';
import React, { createContext, useEffect, useState } from 'react';

import { getThemeVariables, mergeDeep, observeThemeSwitcher } from './helpers';
import type { ReablocksTheme } from './themes/theme';
import { theme as defaultTheme } from './themes/theme';

export interface ThemeContextProps {
  theme: ReablocksTheme;
  tokens: Record<string, string>;
  updateTheme: (newTheme: ReablocksTheme) => void;
  updateTokens: (newTokens: Record<string, string>) => void;
}

export const ThemeContext = createContext<ThemeContextProps>(null);

interface ThemeProviderProps extends PropsWithChildren {
  theme: ReablocksTheme;
  twMergeConfig?: any;
}

export const ThemeProvider: FC<ThemeProviderProps> = ({ children, theme }) => {
  const [activeTheme, setActiveTheme] = useState(theme);
  const [tokens, setTokens] = useState<Record<string, string>>({});

  useEffect(() => {
    if (theme) {
      setActiveTheme(mergeDeep(defaultTheme, theme));
    }
    setTokens(getThemeVariables());

    const themeObserver = observeThemeSwitcher(() =>
      setTokens(getThemeVariables())
    );

    return () => themeObserver.disconnect();
  }, [theme]);

  const updateTheme = (newTheme: ReablocksTheme) => {
    setActiveTheme({ ...activeTheme, ...newTheme });
  };

  return (
    <ThemeContext.Provider
      value={{
        theme: activeTheme,
        updateTheme,
        tokens,
        updateTokens: setTokens
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
};
