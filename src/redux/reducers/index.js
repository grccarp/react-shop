import { combineReducers } from 'redux';
import cart from './cart/cart';
import products from './products/product';
import categories from './products/categories';

const rootReducer = combineReducers({
  cart,
  products,
  categories,
});

export default rootReducer;
