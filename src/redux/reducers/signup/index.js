import { SIGNUP, SIGNUP_FAILURE, SIGNUP_SUCCESS } from '../../../constants';

export const initialState = {
  loading: false,
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case SIGNUP:
      return { ...state, loading: true };
    case SIGNUP_SUCCESS:
      return { ...state, ...payload, loading: false };
    case SIGNUP_FAILURE:
      return { ...state, ...payload, loading: false };

    default:
      return state;
  }
};
