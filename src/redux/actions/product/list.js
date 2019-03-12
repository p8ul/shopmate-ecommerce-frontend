import {
  FETCH_PRODUCTS,
  FETCH_PRODUCTS_FAILURE,
  FETCH_PRODUCTS_SUCCESS,
} from '../../../constants';

/**
 * @param {Object} payload:
 *      contains params and query that will be used to generate a url
 *      eg: payload = {params:{inCategory: 1}, query: {page: 1} will generate
 *      https://backendapi.turing.com/inCategory/1?page=1
 * @returns dispatch(...) : a call to action creator
 */

export const fetchProducts = (payload = {}) => ({
  type: FETCH_PRODUCTS,
  payload,
});

export const fetchProductsSuccess = (payload) => ({
  type: FETCH_PRODUCTS_SUCCESS,
  payload,
});

export const fetchProductsFailure = (payload) => ({
  type: FETCH_PRODUCTS_FAILURE,
  payload,
});
