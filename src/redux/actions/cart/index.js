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
} from '../../../constants';

// UPDATE CART
export const updateCart = (payload) => ({
  type: UPDATE_CART,
  payload,
});

export const updateCartSuccess = (payload) => ({
  type: UPDATE_CART_SUCCESS,
  payload,
});

export const updateCartFailure = (payload) => ({
  type: UPDATE_CART_FAILURE,
  payload,
});

// REMOVE cart product
export const removeProduct = (payload) => ({
  type: REMOVE_CART_PRODUCT,
  payload,
});

export const removeProductSuccess = (payload) => ({
  type: REMOVE_CART_PRODUCT_SUCCESS,
  payload,
});

export const removeProductFailure = (payload) => ({
  type: REMOVE_CART_PRODUCT_FAILURE,
  payload,
});

// EMPTY cart
export const emptyCart = (payload) => ({
  type: EMPTY_CART,
  payload,
});

export const emptyCartSuccess = (payload) => ({
  type: EMPTY_CART_SUCCESS,
  payload,
});
export const emptyCartFailure = (payload) => ({
  type: EMPTY_CART_FAILURE,
  payload,
});

// FETCH CART PRODUTS
export const fetchCartProducts = (payload) => ({
  type: FETCH_CART_PRODUCTS,
  payload,
});

export const fetchCartProductsSuccess = (payload) => ({
  type: FETCH_CART_PRODUCTS_SUCCESS,
  payload,
});

export const fetchCartProductsFailure = (payload) => ({
  type: FETCH_CART_PRODUCTS_FAILURE,
  payload,
});

// create cart actions
export const addCart = (payload) => ({
  type: ADD_CART,
  payload,
});

export const addCartSuccess = (payload) => ({
  type: ADD_CART_SUCCESS,
  payload,
});

export const addCartFailure = (payload) => ({
  type: ADD_CART_FAILURE,
  payload,
});

// cart id actions
export const fetchCartId = (payload) => ({
  type: FETCH_CART_ID,
  payload,
});

export const fetchCartIdSuccess = (payload) => ({
  type: FETCH_CART_ID_SUCCESS,
  payload,
});
