import { Outlet } from 'react-router';
import * as styles from './AppLayout.css';

const AppLayout = () => {
  return (
    <main className={styles.container}>
      <Outlet />
      {/* <Nav /> */}
    </main>
  );
};

export default AppLayout;
