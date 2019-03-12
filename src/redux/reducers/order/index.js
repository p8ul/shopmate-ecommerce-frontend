import {
  CREATE_ORDER,
  CREATE_ORDER_FAILURE,
  CREATE_ORDER_SUCCESS,
  CHARGE,
  CHARGE_FAILURE,
  CHARGE_SUCCESS,
} from '../../../constants';

export const initialState = {
  loading: false,
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case CREATE_ORDER:
      return { ...state, loading: true };
    case CREATE_ORDER_SUCCESS:
      return { ...state, ...payload, loading: false };
    case CREATE_ORDER_FAILURE:
      return { ...state, ...payload, loading: false };

    case CHARGE:
      return { ...state, loading: true };
    case CHARGE_FAILURE:
      return { ...state, ...payload, loading: false };
    case CHARGE_SUCCESS:
      return { ...state, ...payload, loading: false };

    default:
      return state;
  }
};
