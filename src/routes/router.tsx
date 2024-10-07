import { lazy } from 'react';
import { RouteObject } from 'react-router';

const Login = lazy(() => import('@pages/Login/Login'));

const Router: RouteObject[] = [
  {
    path: '/login',
    element: <Login />,
  },
];

export default Router;
