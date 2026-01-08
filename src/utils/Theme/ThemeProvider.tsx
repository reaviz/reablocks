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
  const [baseTheme, setBaseTheme] = useState<ReablocksTheme>(defaultTheme);
  const [activeTheme, setActiveTheme] = useState<ReablocksTheme>(defaultTheme);
  const [tokens, setTokens] = useState<Record<string, string>>({});
  const [isClient, setIsClient] = useState(false);
  const variantRef = useRef(variant);

  // Detect client-side mount (SSR-safe)
  useEffect(() => {
    setIsClient(true);
  }, []);

  // Warn if variant changes at runtime (and update ref to prevent infinite warnings)
  useEffect(() => {
    if (variantRef.current !== variant) {
      console.warn(
        '[ThemeProvider] Changing variant at runtime is not supported and may cause styling issues. ' +
          `Attempted to change from "${variantRef.current}" to "${variant}".`
      );
      variantRef.current = variant;
    }
  }, [variant]);

  // Load base theme when variant changes (client-side only)
  useEffect(() => {
    if (!isClient) return;

    let isCancelled = false;

    if (variant === 'unify') {
      import('./themes/themeUnify')
        .then(module => {
          if (isCancelled) return;
          setBaseTheme(module.themeUnify);
        })
        .catch(error => {
          if (isCancelled) return;
          console.error(
            '[ThemeProvider] Failed to load Unify theme. Falling back to v9 theme. ' +
              'Make sure you have imported "reablocks/unify.css" in your application.',
            error
          );
          setBaseTheme(defaultTheme);
        });
    } else {
      setBaseTheme(defaultTheme);
    }

    return () => {
      isCancelled = true;
    };
  }, [variant, isClient]);

  // Merge custom theme with base theme whenever either changes
  useEffect(() => {
    const merged = theme ? mergeDeep(baseTheme, theme) : baseTheme;
    setActiveTheme(merged);
  }, [baseTheme, theme]);

  // Update tokens when active theme changes
  useEffect(() => {
    setTokens(getThemeVariables());

    const themeObserver = observeThemeSwitcher(() =>
      setTokens(getThemeVariables())
    );

    return () => themeObserver.disconnect();
  }, [activeTheme]);

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
