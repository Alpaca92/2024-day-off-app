import { createContext, PropsWithChildren, useMemo, useState } from 'react';

interface ThemeContextProps {
  isDarkMode: boolean;
  toggleTheme: () => void;
}

const systemIsDarkMode = localStorage.getItem('dark') === 'true';

export const ThemeContext = createContext<ThemeContextProps>({
  isDarkMode: systemIsDarkMode,
  toggleTheme: () => {},
});

const ThemeProvider = ({ children }: PropsWithChildren) => {
  const [isDarkMode, setIsDarkMode] = useState(systemIsDarkMode);

  const toggleTheme = () => {
    setIsDarkMode((prev) => !prev);
    localStorage.setItem('dark', JSON.stringify(!isDarkMode));
  };

  const value = useMemo(
    () => ({ isDarkMode, toggleTheme }),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [isDarkMode],
  );

  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>;
};

export default ThemeProvider;
