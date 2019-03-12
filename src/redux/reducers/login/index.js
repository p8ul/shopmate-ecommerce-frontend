import { LOGIN, LOGIN_FAILURE, LOGIN_SUCCESS } from '../../../constants';
import { getToken } from '../../../utils/auth';

export const initialState = {
  loading: false,
  user: getToken().user,
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case LOGIN:
      return { ...state, loading: true };
    case LOGIN_FAILURE:
      return { ...state, ...payload, loading: false };
    case LOGIN_SUCCESS:
      return { ...state, ...payload, loading: false };

    default:
      return state;
  }
};
