import {
  FETCH_PRODUCT_ATTRIBUTES,
  FETCH_PRODUCT_ATTRIBUTES_SUCCESS,
} from '../../../constants';

export const fetchProductAttributes = (payload) => ({
  type: FETCH_PRODUCT_ATTRIBUTES,
  payload,
});

export const fetchProductAttributesSuccess = (payload) => ({
  type: FETCH_PRODUCT_ATTRIBUTES_SUCCESS,
  payload,
});
