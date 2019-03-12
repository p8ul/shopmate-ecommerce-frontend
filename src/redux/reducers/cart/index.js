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
  EMPTY_CART_FAILURE,
  EMPTY_CART_SUCCESS,
  REMOVE_CART_PRODUCT,
  REMOVE_CART_PRODUCT_FAILURE,
  REMOVE_CART_PRODUCT_SUCCESS,
  UPDATE_CART,
  UPDATE_CART_FAILURE,
  UPDATE_CART_SUCCESS,
} from '../../../constants';

export const initialState = {
  loading: false,
  cartId: '',
  data: [],
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case FETCH_CART_ID:
      return { ...state, loading: true };
    case FETCH_CART_ID_SUCCESS:
      return { ...state, ...payload, loading: false };

    case ADD_CART:
      return { ...state, ...payload, loading: true };
    case ADD_CART_SUCCESS:
      return { ...state, ...payload, loading: false };
    case ADD_CART_FAILURE:
      return { ...state, ...payload, loading: false };

    case UPDATE_CART:
      return { ...state, loading: true };
    case UPDATE_CART_FAILURE:
      return { ...state, ...payload, loading: false };
    case UPDATE_CART_SUCCESS:
      return { ...state, ...payload, loading: false };

    case REMOVE_CART_PRODUCT:
      return { ...state, ...payload, loading: true };
    case REMOVE_CART_PRODUCT_SUCCESS:
      return { ...state, ...payload, loading: false };
    case REMOVE_CART_PRODUCT_FAILURE:
      return { ...state, ...payload, loading: false };

    case EMPTY_CART:
      return { ...state, loading: true };
    case EMPTY_CART_FAILURE:
      return { ...state, ...payload, loading: false };
    case EMPTY_CART_SUCCESS:
      return { ...state, ...payload, loading: false };

    case FETCH_CART_PRODUCTS:
      return { ...state, ...payload, loading: true };
    case FETCH_CART_PRODUCTS_SUCCESS:
      return { ...state, ...payload, loading: false };
    case FETCH_CART_PRODUCTS_FAILURE:
      return { ...state, ...payload, loading: false };

    default:
      return state;
  }
};
