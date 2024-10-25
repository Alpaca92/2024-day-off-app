import { Icons } from '@asset/index';
import { NavigationBarProps } from '@components/NavigationBar/NavigationBar';

const NAVIGATION_BAR_ITEMS: NavigationBarProps['items'] = [
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

const MODAL_KEYS = Object.freeze({
  CHANGE_PASSWORD: 'CHANGE_PASSWORD',
});

export { NAVIGATION_BAR_ITEMS, MODAL_KEYS };
