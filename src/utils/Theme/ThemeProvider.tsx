'use client';

import type { FC, PropsWithChildren } from 'react';
import React, { createContext, useEffect, useRef, useState } from 'react';
import isEqual from 'react-fast-compare';

import { getThemeVariables, mergeDeep, observeThemeSwitcher } from './helpers';
import type { ReablocksTheme } from './themes/default';
import { theme as defaultTheme } from './themes/default';

export type ThemeVariant = 'default' | 'unify' | 'custom';

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
   * Custom theme overrides to merge with the base theme, or a complete theme to replace the base theme.
   */
  theme?: Partial<ReablocksTheme> | ReablocksTheme;
  replaceTheme?: boolean;
  /**
   * Theme variant to use.
   * - 'default': Uses default theme with 'reablocks/index.css'
   * - 'unify': Uses Unify theme with 'reablocks/unify.css'
   * - 'custom': Uses default theme structure with your own CSS file (no reablocks CSS imported)
   */
  variant?: ThemeVariant;
}

export const ThemeProvider: FC<ThemeProviderProps> = ({
  children,
  theme,
  replaceTheme = false,
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

  useEffect(() => {
    if (replaceTheme) return;

    if (variantRef.current !== variant) {
      console.warn(
        '[ThemeProvider] Changing variant at runtime is not supported and may cause styling issues. ' +
          `Attempted to change from "${variantRef.current}" to "${variant}".`
      );
      variantRef.current = variant;
    }
  }, [variant, replaceTheme]);

  useEffect(() => {
    if (!isClient || replaceTheme) return;

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
  }, [variant, isClient, replaceTheme]);

  // Handle theme: merge with base theme or replace entirely if replaceTheme is true
  useEffect(() => {
    if (replaceTheme) {
      if (
        theme &&
        'components' in theme &&
        theme.components &&
        typeof theme.components === 'object'
      ) {
        setActiveTheme(theme as ReablocksTheme);
      } else if (!theme) {
        console.warn(
          '[ThemeProvider] `replaceTheme` is true but `theme` is missing.' +
            'Falling back to default theme. Provide a complete `ReablocksTheme` object to fully replace the base theme.'
        );
        setActiveTheme(defaultTheme);
      } else {
        console.warn(
          '[ThemeProvider] `replaceTheme` is true but `theme` is not a complete theme. ' +
            'Using default theme. Provide a complete `ReablocksTheme` object to fully replace the base theme.'
        );
        setActiveTheme(defaultTheme);
      }
    } else {
      const merged = theme ? mergeDeep(baseTheme, theme) : baseTheme;
      setActiveTheme(merged);
    }
  }, [baseTheme, theme, replaceTheme]);

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
