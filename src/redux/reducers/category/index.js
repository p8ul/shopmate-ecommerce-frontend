import {
  FETCH_CATEGORIES,
  FETCH_CATEGORIES_FAILURE,
  FETCH_CATEGORIES_SUCCESS,
  RETRIEVE_CATEGORY,
  RETRIEVE_CATEGORY_SUCCESS,
} from '../../../constants';

export const initialState = {
  loading: false,
  data: { count: 0, rows: [] },
  singleCategory: { count: 0, rows: [] },
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case FETCH_CATEGORIES:
      return { ...state, ...payload, loading: true };
    case FETCH_CATEGORIES_FAILURE:
      return { ...state, ...payload, loading: false };
    case FETCH_CATEGORIES_SUCCESS:
      return { ...state, ...payload, loading: false };
    case RETRIEVE_CATEGORY:
      return { ...state, ...payload, loading: true };
    case RETRIEVE_CATEGORY_SUCCESS:
      return { ...state, ...payload, loading: false };

    default:
      return state;
  }
};
