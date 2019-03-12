import {
  CREATE_ADDRESS,
  CREATE_ADDRESS_FAILURE,
  CREATE_ADDRESS_SUCCESS,
} from '../../../constants';

export const initialState = {
  loading: false,
  address: {},
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case CREATE_ADDRESS:
      return { ...state, address: payload, loading: true };
    case CREATE_ADDRESS_FAILURE:
      return { ...state, ...payload, loading: false };
    case CREATE_ADDRESS_SUCCESS:
      return { ...state, ...payload, loading: false };

    default:
      return state;
  }
};
