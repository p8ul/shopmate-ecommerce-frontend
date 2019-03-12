import {
  CREATE_ORDER,
  CREATE_ORDER_FAILURE,
  CREATE_ORDER_SUCCESS,
  CHARGE,
  CHARGE_FAILURE,
  CHARGE_SUCCESS,
} from '../../../constants';

// CHARGE
export const charge = (payload) => ({
  type: CHARGE,
  payload,
});
export const chargeSuccess = (payload) => ({
  type: CHARGE_SUCCESS,
  payload,
});

export const chargeFailure = (payload) => ({
  type: CHARGE_FAILURE,
  payload,
});

export const createOrder = (payload) => ({
  type: CREATE_ORDER,
  payload,
});

export const createOrderSuccess = (payload) => ({
  type: CREATE_ORDER_SUCCESS,
  payload,
});
export const createOrderFailure = (payload) => ({
  type: CREATE_ORDER_FAILURE,
  payload,
});
