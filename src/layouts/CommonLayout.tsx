import useTheme from '@hooks/useTheme';
import ThemeProvider from '@providers/ThemeProvider';
import { darkTheme, lightTheme } from '@styles/theme.css';
import { Outlet } from 'react-router';

const CommmonLayout = () => {
  const { isDarkMode } = useTheme();

  return (
    <ThemeProvider>
      <div className={isDarkMode ? darkTheme : lightTheme}>
        <Outlet />
      </div>
    </ThemeProvider>
  );
};

export default CommmonLayout;
