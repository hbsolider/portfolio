import { lazy } from 'react';
const Home = lazy(() => import('page/Home'));
const About = lazy(() => import('page/About'));
const BxC1 = lazy(() => import('page/Private/BxC1'));
const RoutersCompo = [
  {
    path: '/',
    component: Home,
  },
  {
    path: '/about',
    component: About,
  },
];

const PrivateCompo = [
  {
    path: '/woaini',
    component: BxC1,
  },
];
export { PrivateCompo, RoutersCompo };
