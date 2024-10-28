import { NavigationBarProps } from '@components/NavigationBar/NavigationBar';

const NAVIGATION_BAR_ITEMS: NavigationBarProps['items'] = [
  {
    type: 'home',
    title: 'Home',
    path: '/',
  },
  {
    type: 'management',
    title: 'management',
    path: 'management',
  },
  {
    type: 'request',
    title: 'request',
    path: 'request',
  },
  {
    type: 'profile',
    title: 'profile',
    path: 'profile',
  },
  {
    type: 'setting',
    title: 'setting',
    path: 'setting',
  },
];

const MODAL_KEYS = Object.freeze({
  CHANGE_PASSWORD: 'CHANGE_PASSWORD',
});

export { NAVIGATION_BAR_ITEMS, MODAL_KEYS };
