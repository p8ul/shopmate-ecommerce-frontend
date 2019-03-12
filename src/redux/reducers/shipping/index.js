import { FETCH_REGION, FETCH_REGION_SUCCESS } from '../../../constants';

export const initialState = {
  loading: false,
  regions: [],
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case FETCH_REGION:
      return { ...state, ...payload, loading: true };
    case FETCH_REGION_SUCCESS:
      return { ...state, ...payload, loading: false };

    default:
      return state;
  }
};
