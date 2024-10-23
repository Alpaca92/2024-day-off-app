import { Outlet } from 'react-router';
import { NavigationBar } from '@components/index';
import * as styles from './AppLayout.css';
import { Icons } from '@asset/index';
import { NavigationBarProps } from '@components/NavigationBar/NavigationBar';

const items: NavigationBarProps['items'] = [
  {
    src: Icons.Home,
    alt: 'Home icon',
    title: 'Home',
    path: '/',
  },
  {
    src: Icons.Management,
    alt: 'Management icon',
    title: 'Management',
    path: 'management',
  },
  {
    src: Icons.Request,
    alt: 'request icon',
    title: 'request',
    path: 'request',
  },
  {
    src: Icons.Profile,
    alt: 'profile icon',
    title: 'profile',
    path: 'profile',
  },
  {
    src: Icons.Setting,
    alt: 'Setting icon',
    title: 'Setting',
    path: 'setting',
  },
];

const AppLayout = () => {
  return (
    <div className={styles.container}>
      {/* <Header /> */}
      <main className={styles.main}>
        <Outlet />
      </main>
      <NavigationBar items={items} />
    </div>
  );
};

export default AppLayout;
