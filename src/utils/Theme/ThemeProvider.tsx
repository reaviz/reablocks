'use client';

import React, {
  createContext,
  FC,
  PropsWithChildren,
  useEffect,
  useRef,
  useState
} from 'react';
import { getThemeVariables, mergeDeep, observeThemeSwitcher } from './helpers';
import { ReablocksTheme, theme as defaultTheme } from './themes/theme';

export type ThemeVariant = 'v9' | 'unify';

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
   * - 'unify': Unify Design System theme (opt-in)
   *
   * **Important**: This prop should be set once at app initialization and not changed at runtime.
   * Changing variants requires the corresponding CSS file to be imported:
   * - v9: `import 'reablocks/index.css'`
   * - unify: `import 'reablocks/unify.css'`
   *
   * Runtime switching is not recommended as it may require loading multiple CSS bundles
   * and can cause a flash of unstyled content.
   */
  variant?: ThemeVariant;
}

export const ThemeProvider: FC<ThemeProviderProps> = ({
  children,
  theme,
  variant = 'v9'
}) => {
  const [activeTheme, setActiveTheme] = useState<ReablocksTheme>(defaultTheme);
  const [tokens, setTokens] = useState<Record<string, string>>({});
  const [isLoading, setIsLoading] = useState(variant === 'unify');
  const variantRef = useRef(variant);

  // Warn if variant changes at runtime
  useEffect(() => {
    if (variantRef.current !== variant) {
      console.warn(
        '[ThemeProvider] Changing variant at runtime is not supported and may cause styling issues. ' +
          `Attempted to change from "${variantRef.current}" to "${variant}".`
      );
    }
  }, [variant]);

  // Load theme based on variant - single effect to avoid race conditions
  useEffect(() => {
    let isCancelled = false;

    if (variant === 'unify') {
      setIsLoading(true);
      import('./themes/themeUnify')
        .then(module => {
          if (isCancelled) return;
          const merged = theme
            ? mergeDeep(module.themeUnify, theme)
            : module.themeUnify;
          setActiveTheme(merged);
        })
        .catch(error => {
          if (isCancelled) return;
          console.error(
            '[ThemeProvider] Failed to load Unify theme. Falling back to v9 theme. ' +
              'Make sure you have imported "reablocks/unify.css" in your application.',
            error
          );
          const merged = theme ? mergeDeep(defaultTheme, theme) : defaultTheme;
          setActiveTheme(merged);
        })
        .finally(() => {
          if (!isCancelled) {
            setIsLoading(false);
          }
        });
    } else {
      setIsLoading(false);
      const merged = theme ? mergeDeep(defaultTheme, theme) : defaultTheme;
      setActiveTheme(merged);
    }

    return () => {
      isCancelled = true;
    };
  }, [variant, theme]);

  useEffect(() => {
    if (isLoading) return;

    setTokens(getThemeVariables());

    const themeObserver = observeThemeSwitcher(() =>
      setTokens(getThemeVariables())
    );

    return () => themeObserver.disconnect();
  }, [activeTheme, isLoading]);

  const updateTheme = (newTheme: ReablocksTheme) => {
    setActiveTheme({ ...activeTheme, ...newTheme });
  };

  if (isLoading) {
    return null;
  }

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
