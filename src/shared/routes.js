import Albums from './album';
import Home from './home'

const routes = [
  {
    path: '/',
    exact: true,
    component: Home
  },
  {
    path: '/albums',
    component: Albums
  }
];

export default routes;