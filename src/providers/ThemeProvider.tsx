import { createContext, PropsWithChildren, useMemo, useState } from 'react';

interface ThemeContextProps {
  toggleTheme: () => void;
}

export const ThemeContext = createContext<ThemeContextProps | null>(null);

const ThemeProvider = ({ children }: PropsWithChildren) => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleTheme = () => {
    setIsDarkMode((prev) => !prev);
  };

  const value = useMemo(() => ({ isDarkMode, toggleTheme }), [isDarkMode]);

  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>;
};

export default ThemeProvider;
