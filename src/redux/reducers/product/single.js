import {
  FETCH_PRODUCT,
  FETCH_PRODUCT_SUCCESS,
  FETCH_PRODUCT_FAILURE,
} from '../../../constants';

export const initialState = {
  loading: false,
  data: {},
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case FETCH_PRODUCT:
      return { ...state, loading: true };
    case FETCH_PRODUCT_FAILURE:
      return { ...state, ...payload, loading: false };
    case FETCH_PRODUCT_SUCCESS:
      return { ...state, ...payload, loading: false };

    default:
      return state;
  }
};
