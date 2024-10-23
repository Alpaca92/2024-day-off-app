import { Outlet } from 'react-router';
import { Header, NavigationBar } from '@components/index';
import * as styles from './AppLayout.css';
import { Icons } from '@asset/index';
import { NavigationBarProps } from '@components/NavigationBar/NavigationBar';

const items: NavigationBarProps['items'] = [
  {
    src: Icons.Request,
    alt: 'request icon',
    title: 'request',
    path: 'request',
  },
  {
    src: Icons.Home,
    alt: 'Home icon',
    title: 'Home',
    path: '/',
  },
  {
    src: Icons.Profile,
    alt: 'profile icon',
    title: 'profile',
    path: 'profile',
  },
];

const AppLayout = () => {
  return (
    <main className={styles.container}>
      <Header />
      <Outlet />
      <NavigationBar items={items} />
    </main>
  );
};

export default AppLayout;
