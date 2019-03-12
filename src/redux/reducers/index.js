import { combineReducers } from 'redux';

import productList from './product/list';
import categories from './category';
import search from './search';
import attribute from './attribute';
import singleProduct from './product/single';
import cart from './cart';
import login from './login';
import signup from './signup';
import shipping from './shipping';
import customer from './customer';
import order from './order';
/*
 * We combine all reducers into a single object before updated data is dispatched (sent) to store
 * Your entire applications state (store) is just whatever gets returned from all your reducers
 * */

const allReducers = combineReducers({
  productList,
  categories,
  search,
  attribute,
  singleProduct,
  cart,
  login,
  signup,
  shipping,
  customer,
  order,
});

export default allReducers;
