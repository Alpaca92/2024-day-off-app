import AppLayout from '@layouts/AppLayout/AppLayout';
import CommmonLayout from '@layouts/CommonLayout/CommonLayout';
import { lazy, Suspense } from 'react';
import { Outlet, RouteObject } from 'react-router';

const Login = lazy(() => import('@pages/Login/Login'));
const Signup = lazy(() => import('@pages/Signup/Signup'));
const Home = lazy(() => import('@pages/Home/Home'));
const Profile = lazy(() => import('@pages/Profile/Profile'));

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
            path: '/login',
            element: <Login />,
          },
          {
            path: '/signup',
            element: <Signup />,
          },
          {
            element: <AppLayout />,
            children: [
              {
                path: '/',
                element: <Home />,
              },
              {
                path: '/profile',
                element: <Profile />,
              },
            ],
          },
        ],
      },
    ],
  },
];

export default Router;
