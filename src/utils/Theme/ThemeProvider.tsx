'use client';

import type { FC, PropsWithChildren } from 'react';
import React, { createContext, useEffect, useRef, useState } from 'react';
import isEqual from 'react-fast-compare';

import { getThemeVariables, mergeDeep, observeThemeSwitcher } from './helpers';
import type { ReablocksTheme } from './themes/default';
import { theme as defaultTheme } from './themes/default';

export type ThemeVariant = 'default' | 'unify';

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
   * - 'default': Standard theme (default)
   * - 'unify': Unify Design System theme (opt-in)
   *
   * **Important**: This prop should be set once at app initialization and not changed at runtime.
   * Changing variants requires the corresponding CSS file to be imported:
   * - default: `import 'reablocks/index.css'`
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
  variant = 'default'
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
            '[ThemeProvider] Failed to load Unify theme. Falling back to default theme. ' +
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

  // Extract CSS variables on mount, when variant changes, and when DOM theme class changes
  // Note: We don't depend on activeTheme because CSS variables are in the DOM,
  // not in the JS theme object. They change when:
  // 1. Component mounts (isClient becomes true)
  // 2. Variant changes (different CSS files loaded)
  // 3. DOM class changes (theme-light vs theme-dark) - handled by observer
  useEffect(() => {
    if (!isClient) return;

    setTokens(getThemeVariables());

    const themeObserver = observeThemeSwitcher(() =>
      setTokens(getThemeVariables())
    );

    return () => themeObserver.disconnect();
  }, [isClient, variant]);

  const updateTheme = (newTheme: ReablocksTheme) => {
    setActiveTheme(prev => {
      const next = { ...prev, ...newTheme };
      return isEqual(prev, next) ? prev : next;
    });
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
