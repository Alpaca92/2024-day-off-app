import { lazy } from 'react';
import { RouteObject } from 'react-router';
import CommmonLayout from 'src/layouts/commonLayout';

const Home = lazy(() => import('@pages/Home/Home'));
const Login = lazy(() => import('@pages/Login/Login'));

const Router: RouteObject[] = [
  {
    path: '',
    element: <CommmonLayout />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: '/login',
        element: <Login />,
      },
    ],
  },
];

export default Router;
