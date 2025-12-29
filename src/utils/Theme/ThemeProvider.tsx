'use client';

import React, {
  createContext,
  FC,
  PropsWithChildren,
  useEffect,
  useMemo,
  useState
} from 'react';
import { getThemeVariables, mergeDeep, observeThemeSwitcher } from './helpers';
import { ReablocksTheme, theme as defaultTheme } from './themes/theme';
import { themeUDS } from './themes/themeUDS';

export type ThemeVariant = 'v9' | 'uds';

export interface ThemeContextProps {
  theme: ReablocksTheme;
  tokens: Record<string, string>;
  variant: ThemeVariant;
  updateTheme: (newTheme: ReablocksTheme) => void;
  updateTokens: (newTokens: Record<string, string>) => void;
}

export const ThemeContext = createContext<ThemeContextProps>(null);

export interface ThemeProviderProps extends PropsWithChildren {
  /**
   * Custom theme overrides to merge with the base theme.
   */
  theme?: Partial<ReablocksTheme>;

  /**
   * Theme variant to use as the base.
   * - 'v9': Standard v9 theme (default)
   * - 'uds': Unify Design System theme (opt-in)
   *
   * **Important**: This prop should be set once at app initialization and not changed at runtime.
   * Changing variants requires the corresponding CSS file to be imported:
   * - v9: `import 'reablocks/index.css'`
   * - uds: `import 'reablocks/uds.css'`
   *
   * Runtime switching is not recommended as it requires loading both CSS files (~387KB total)
   * and may cause a flash of unstyled content.
   */
  variant?: ThemeVariant;
}

export const ThemeProvider: FC<ThemeProviderProps> = ({
  children,
  theme,
  variant = 'v9'
}) => {
  const baseTheme = useMemo(
    () => (variant === 'uds' ? themeUDS : defaultTheme),
    [variant]
  );

  const [activeTheme, setActiveTheme] = useState<ReablocksTheme>(() =>
    theme ? mergeDeep(baseTheme, theme) : baseTheme
  );
  const [tokens, setTokens] = useState<Record<string, string>>({});

  useEffect(() => {
    if (theme) {
      setActiveTheme(mergeDeep(baseTheme, theme));
    } else {
      setActiveTheme(baseTheme);
    }
    setTokens(getThemeVariables());

    const themeObserver = observeThemeSwitcher(() =>
      setTokens(getThemeVariables())
    );

    return () => themeObserver.disconnect();
  }, [theme, baseTheme]);

  const updateTheme = (newTheme: ReablocksTheme) => {
    setActiveTheme({ ...activeTheme, ...newTheme });
  };

  return (
    <ThemeContext.Provider
      value={{
        theme: activeTheme,
        updateTheme,
        tokens,
        updateTokens: setTokens,
        variant
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
};
