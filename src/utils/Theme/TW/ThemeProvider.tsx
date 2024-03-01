import React, { createContext, FC, useContext, useState } from 'react';
import { ReaBlocksComponents, ReaBlocksTheme } from './theme';
import { theme as defaultTheme } from './theme';
import { mergeDeep } from '../../helpers/mergeDeep';

interface ThemeContextProps {
  activeTheme: ReaBlocksTheme;
  updateTheme: (newTheme: ReaBlocksTheme) => void;
}

const ThemeContext = createContext<ThemeContextProps>(null);

interface ThemeProviderProps {
  theme?: ReaBlocksTheme;
  children: React.ReactNode;
}

export const ThemeProvider: FC<ThemeProviderProps> = ({ children, theme }) => {
  const [activeTheme, setActiveTheme] = useState(
    theme ? mergeDeep(defaultTheme, theme) : defaultTheme
  );

  const updateTheme = (newTheme: ReaBlocksTheme) => {
    setActiveTheme({ ...activeTheme, ...newTheme });
  };

  return (
    <ThemeContext.Provider value={{ activeTheme, updateTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  const context = useContext(ThemeContext);

  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }

  return context;
};

export const useComponentTheme = (component: keyof ReaBlocksComponents) => {
  const { activeTheme } = useTheme();

  const componentTheme = activeTheme.components[component];
  if (!componentTheme) {
    throw new Error(`component ${component} does not exist in theme`);
  }

  return componentTheme;
};
