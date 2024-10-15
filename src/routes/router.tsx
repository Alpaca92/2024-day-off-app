import CommmonLayout from '@layouts/CommonLayout/CommonLayout';
import { lazy, Suspense } from 'react';
import { Outlet, RouteObject } from 'react-router';

const Home = lazy(() => import('@pages/Home/Home'));
const Login = lazy(() => import('@pages/Login/Login'));
const Signup = lazy(() => import('@pages/Signup/Signup'));

const Router: RouteObject[] = [
  {
    path: '',
    element: <CommmonLayout />,
    children: [
      {
        element: (
          <Suspense>
            <Outlet />
          </Suspense>
        ),
        children: [
          {
            path: '/',
            element: <Home />,
          },
          {
            path: '/login',
            element: <Login />,
          },
          {
            path: '/signup',
            element: <Signup />,
          },
        ],
      },
    ],
  },
];

export default Router;
