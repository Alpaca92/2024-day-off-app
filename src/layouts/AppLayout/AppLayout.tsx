import { Outlet } from 'react-router';
import * as styles from './AppLayout.css';
import { NavigationBar } from '@components/index';

const AppLayout = () => {
  return (
    <main className={styles.container}>
      <Outlet />
      <NavigationBar />
    </main>
  );
};

export default AppLayout;
