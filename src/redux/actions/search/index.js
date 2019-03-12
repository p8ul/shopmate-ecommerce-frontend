import {
  SEARCH_PRODUCT,
  SEARCH_PRODUCT_FAILURE,
  SEARCH_PRODUCT_SUCCESS,
} from '../../../constants';

export const searchProduct = (payload) => ({
  type: SEARCH_PRODUCT,
  payload,
});

export const searchProductSuccess = (payload) => ({
  type: SEARCH_PRODUCT_SUCCESS,
  payload,
});

export const searchProductFailure = (payload) => ({
  type: SEARCH_PRODUCT_FAILURE,
  payload,
});
