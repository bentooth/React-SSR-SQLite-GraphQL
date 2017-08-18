import Albums from './album';
import Home from './home'
import Login from './login'

const routes = [
  {
    path: '/',
    exact: true,
    component: Home
  },
  {
    path: '/albums',
    component: Albums
  },
  {
    path: '/login',
    exact: true,
    component: Login
  }
];

export default routes;