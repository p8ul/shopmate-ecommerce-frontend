import HomePage from '../containers/HomePage';
import CategoryPage from '../containers/Category/CategoryPage';
import DepartmentPage from '../containers/Department/DepartmentPage';
import SingleProduct from '../containers/Product/SingleProduct';
import CartList from '../containers/Cart/CartList';
import Login from '../containers/Login';
import Signup from '../containers/Signup';
import Checkout from '../containers/Checkout';

const indexRoutes = [
  {
    path: '/',
    name: 'Home Page',
    component: HomePage,
  },
  {
    path: '/category/:inCategory',
    name: 'Category',
    component: CategoryPage,
  },
  {
    path: '/department/:inDepartment',
    name: 'Department',
    component: DepartmentPage,
  },
  { path: '/single/:id', name: 'Single Product', component: SingleProduct },
  { path: '/cart', name: 'Cart List', component: CartList },
  { path: '/login', name: ' Login', component: Login },
  { path: '/signup', name: ' Signup', component: Signup },
  { path: '/checkout', name: ' Signup', component: Checkout },
];

export default indexRoutes;
