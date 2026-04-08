'use client';

import React, {
  createContext,
  FC,
  PropsWithChildren,
  useEffect,
  useState
} from 'react';
import { getThemeVariables, mergeDeep, observeThemeSwitcher } from './helpers';
import { ReablocksTheme, theme as themeDefault } from './themes/themeDefault';

export interface ThemeContextProps {
  theme: ReablocksTheme;
  tokens: Record<string, string>;
  updateTheme: (newTheme: ReablocksTheme) => void;
  updateTokens: (newTokens: Record<string, string>) => void;
}

export const ThemeContext = createContext<ThemeContextProps>(null);

interface ThemeProviderProps extends PropsWithChildren {
  overrides: ReablocksTheme;
  theme?: ReablocksTheme;
}

export const ThemeProvider: FC<ThemeProviderProps> = ({
  children,
  overrides,
  theme = themeDefault
}) => {
  const [activeTheme, setActiveTheme] = useState(() =>
    overrides ? mergeDeep(theme, overrides) : theme
  );
  const [tokens, setTokens] = useState<Record<string, string>>({});

  useEffect(() => {
    setActiveTheme(overrides ? mergeDeep(theme, overrides) : theme);
    setTokens(getThemeVariables());

    const themeObserver = observeThemeSwitcher(() =>
      setTokens(getThemeVariables())
    );

    return () => themeObserver.disconnect();
  }, [overrides]);

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
