import useTheme from '@hooks/useTheme';
import ThemeProvider from '@providers/ThemeProvider';
import { darkTheme, lightTheme } from '@styles/theme.css';
import { Outlet } from 'react-router';
import * as styles from './CommonLayout.css';

const CommmonLayout = () => {
  const { isDarkMode } = useTheme();

  return (
    <ThemeProvider>
      <div className={`${styles.container} ${isDarkMode ? darkTheme : lightTheme}`}>
        <Outlet />
      </div>
    </ThemeProvider>
  );
};

export default CommmonLayout;
