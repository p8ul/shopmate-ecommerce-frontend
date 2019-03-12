import {
  FETCH_PRODUCTS,
  FETCH_PRODUCTS_FAILURE,
  FETCH_PRODUCTS_SUCCESS,
} from '../../../constants';

export const initialState = {
  loading: false,
  data: { count: 0, rows: [] },
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case FETCH_PRODUCTS:
      return { ...state, loading: true };
    case FETCH_PRODUCTS_FAILURE:
      return { ...state, ...payload, loading: false };
    case FETCH_PRODUCTS_SUCCESS:
      return { ...state, ...payload, loading: false };

    default:
      return state;
  }
};
