import { Outlet } from 'react-router';
import { NavigationBar } from '@components/index';
import * as styles from './AppLayout.css';
import { Icons } from '@asset/index';
import { NavigationBarProps } from '@components/NavigationBar/NavigationBar';

const items: NavigationBarProps['items'] = [
  {
    src: Icons.Home,
    alt: 'Home',
    title: 'request',
    path: 'request',
  },
  {
    src: Icons.Home,
    alt: 'Home',
    title: 'Home',
    path: '/',
  },
  {
    src: Icons.Home,
    alt: 'Home',
    title: 'profile',
    path: 'profile',
  },
];

const AppLayout = () => {
  return (
    <main className={styles.container}>
      <Outlet />
      <NavigationBar items={items} />
    </main>
  );
};

export default AppLayout;
