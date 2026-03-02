'use client';

import type { FC, PropsWithChildren } from 'react';
import React, { createContext, useEffect, useRef, useState } from 'react';
import isEqual from 'react-fast-compare';

import { getThemeVariables, mergeDeep, observeThemeSwitcher } from './helpers';
import type { ReablocksTheme } from './themes/default';
import { theme as defaultTheme } from './themes/default';
import { themeUnify } from './themes/themeUnify';

export type ThemeVariant = 'default' | 'unify' | 'custom';

const getBaseTheme = (variant: ThemeVariant): ReablocksTheme =>
  variant === 'unify' ? themeUnify : defaultTheme;

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
   *
   * Users must manually import the corresponding CSS file in their application:
   * - default: `import 'reablocks/index.css'`
   * - unify: `import 'reablocks/unify.css'`
   */
  variant?: ThemeVariant;
}

const isCompleteTheme = (t: unknown): t is ReablocksTheme =>
  !!t &&
  typeof t === 'object' &&
  'components' in t &&
  !!t.components &&
  typeof t.components === 'object';

const resolveActiveTheme = (
  baseTheme: ReablocksTheme,
  theme: ThemeProviderProps['theme'],
  replaceTheme: boolean
): ReablocksTheme => {
  if (replaceTheme) {
    return isCompleteTheme(theme) ? theme : defaultTheme;
  }
  return theme ? mergeDeep(baseTheme, theme) : baseTheme;
};

export const ThemeProvider: FC<ThemeProviderProps> = ({
  children,
  theme,
  replaceTheme = false,
  variant = 'default'
}) => {
  const [baseTheme, setBaseTheme] = useState<ReablocksTheme>(() =>
    getBaseTheme(variant)
  );
  const [activeTheme, setActiveTheme] = useState<ReablocksTheme>(() =>
    resolveActiveTheme(getBaseTheme(variant), theme, replaceTheme)
  );
  const [tokens, setTokens] = useState<Record<string, string>>({});
  const variantRef = useRef(variant);

  useEffect(() => {
    if (replaceTheme) return;

    if (variantRef.current !== variant) {
      console.warn(
        '[ThemeProvider] Changing variant at runtime is not supported and may cause styling issues. ' +
          `Attempted to change from "${variantRef.current}" to "${variant}".`
      );
      variantRef.current = variant;
    }

    setBaseTheme(getBaseTheme(variant));
  }, [variant, replaceTheme]);

  useEffect(() => {
    const next = resolveActiveTheme(baseTheme, theme, replaceTheme);
    setActiveTheme(next);

    if (replaceTheme && !isCompleteTheme(theme)) {
      const reason = !theme ? 'missing' : 'not a complete theme';
      console.warn(
        `[ThemeProvider] \`replaceTheme\` is true but \`theme\` is ${reason}. ` +
          'Falling back to default theme. Provide a complete `ReablocksTheme` object to fully replace the base theme.'
      );
    }
  }, [baseTheme, theme, replaceTheme]);

  useEffect(() => {
    setTokens(getThemeVariables());

    const themeObserver = observeThemeSwitcher(() =>
      setTokens(getThemeVariables())
    );

    return () => themeObserver.disconnect();
  }, [variant]);

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
