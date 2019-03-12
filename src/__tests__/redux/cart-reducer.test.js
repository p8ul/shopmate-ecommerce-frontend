import {
  FETCH_CART_ID,
  FETCH_CART_ID_SUCCESS,
  ADD_CART,
  ADD_CART_FAILURE,
  ADD_CART_SUCCESS,
  FETCH_CART_PRODUCTS,
  FETCH_CART_PRODUCTS_FAILURE,
  FETCH_CART_PRODUCTS_SUCCESS,
  EMPTY_CART,
  EMPTY_CART_SUCCESS,
  EMPTY_CART_FAILURE,
  REMOVE_CART_PRODUCT,
  REMOVE_CART_PRODUCT_FAILURE,
  REMOVE_CART_PRODUCT_SUCCESS,
  UPDATE_CART,
  UPDATE_CART_FAILURE,
  UPDATE_CART_SUCCESS,
} from '../../constants';

import * as cartActions from '../../redux/actions/cart';
import cartReducer, { initialState } from '../../redux/reducers/cart';

const actions = [
  {
    type: UPDATE_CART,
    action: cartActions.updateCart,
    expected: true,
  },
  {
    type: UPDATE_CART_SUCCESS,
    action: cartActions.updateCartSuccess,
    expected: false,
  },
  {
    type: UPDATE_CART_FAILURE,
    action: cartActions.updateCartFailure,
    expected: false,
  },
  {
    type: REMOVE_CART_PRODUCT,
    action: cartActions.removeProduct,
    expected: true,
  },
  {
    type: REMOVE_CART_PRODUCT_SUCCESS,
    action: cartActions.removeProductSuccess,
    expected: false,
  },
  {
    type: REMOVE_CART_PRODUCT_FAILURE,
    action: cartActions.removeProductFailure,
    expected: false,
  },
  {
    type: EMPTY_CART,
    action: cartActions.emptyCart,
    expected: true,
  },
  {
    type: EMPTY_CART_FAILURE,
    action: cartActions.emptyCartFailure,
    expected: false,
  },
  {
    type: EMPTY_CART_SUCCESS,
    action: cartActions.emptyCartSuccess,
    expected: false,
  },
  {
    type: FETCH_CART_PRODUCTS,
    action: cartActions.fetchCartProducts,
    expected: true,
  },
  {
    type: FETCH_CART_PRODUCTS_FAILURE,
    action: cartActions.fetchCartProductsFailure,
    expected: false,
  },
  {
    type: FETCH_CART_PRODUCTS_SUCCESS,
    action: cartActions.fetchCartProductsSuccess,
    expected: false,
  },
  {
    type: FETCH_CART_ID,
    action: cartActions.fetchCartId,
    expected: true,
  },
  {
    type: FETCH_CART_ID_SUCCESS,
    action: cartActions.fetchCartIdSuccess,
    expected: false,
  },
  {
    type: ADD_CART,
    action: cartActions.addCart,
    expected: true,
  },
  {
    type: ADD_CART_FAILURE,
    action: cartActions.addCartFailure,
    expected: false,
  },
  {
    type: ADD_CART_SUCCESS,
    action: cartActions.addCartSuccess,
    expected: false,
  },
];

describe('cart actions', () => {
  actions.map((action) =>
    it(`should dispatch ${action.type}`, () => {
      expect(action.action({}).type).toEqual(action.type);
    }),
  );
});

describe('cartReducer', () => {
  actions.map((action) =>
    it(`should set ${action.type}`, () => {
      expect(cartReducer(initialState, action).loading).toEqual(
        action.expected,
      );
    }),
  );
  it('should provide an initial state', () => {
    expect(cartReducer(initialState, {})).toEqual(initialState);
  });
});
