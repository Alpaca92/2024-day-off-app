import useTheme from '@hooks/useTheme';
import { darkTheme, lightTheme } from '@styles/theme.css';
import { Outlet } from 'react-router';
import * as styles from './CommonLayout.css';

const CommmonLayout = () => {
  const { isDarkMode } = useTheme();

  return (
    <div className={`${styles.container} ${isDarkMode ? darkTheme : lightTheme}`}>
      <Outlet />
    </div>
  );
};

export default CommmonLayout;
