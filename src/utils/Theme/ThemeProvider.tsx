import React, {
  createContext,
  FC,
  PropsWithChildren,
  useEffect,
  useState
} from 'react';
import { mergeDeep } from './helpers';
import { ReablocksTheme, theme as defaultTheme } from './themes/theme';

export interface ThemeContextProps {
  theme: ReablocksTheme;
  updateTheme: (newTheme: ReablocksTheme) => void;
}

export const ThemeContext = createContext<ThemeContextProps>(null);

interface ThemeProviderProps extends PropsWithChildren {
  theme: ReablocksTheme;
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
    <ThemeContext.Provider value={{ theme: activeTheme, updateTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
