import {
  FETCH_PRODUCT,
  FETCH_PRODUCT_SUCCESS,
  FETCH_PRODUCT_FAILURE,
} from '../../../constants';

export const fetchProduct = (payload) => ({
  type: FETCH_PRODUCT,
  payload,
});

export const fetchProductSuccess = (payload) => ({
  type: FETCH_PRODUCT_SUCCESS,
  payload,
});

export const fetchProductFailure = (payload) => ({
  type: FETCH_PRODUCT_FAILURE,
  payload,
});
