import { Outlet } from 'react-router';
import { NavigationBar } from '@components/index';
import * as styles from './AppLayout.css';
import { Icons } from '@asset/index';
import { NavigationBarProps } from '@components/NavigationBar/NavigationBar';

const items: NavigationBarProps['items'] = [
  {
    src: Icons.Home,
    alt: 'Home',
    title: 'Home',
  },
  {
    src: Icons.Home,
    alt: 'Home',
    title: 'Home',
  },
  {
    src: Icons.Home,
    alt: 'Home',
    title: 'Home',
  },
  {
    src: Icons.Home,
    alt: 'Home',
    title: 'Home',
  },
  {
    src: Icons.Home,
    alt: 'Home',
    title: 'Home',
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
