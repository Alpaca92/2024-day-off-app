import { Outlet } from 'react-router';

import { NavigationBar } from '@components/index';
import { NAVIGATION_BAR_ITEMS } from 'src/constants';

import * as styles from './AppLayout.css';

const AppLayout = () => {
  return (
    <div className={styles.container}>
      {/* <Header /> */}
      <main className={styles.main}>
        <Outlet />
      </main>
      <NavigationBar items={NAVIGATION_BAR_ITEMS} />
    </div>
  );
};

export default AppLayout;
