import {
  CREATE_ADDRESS,
  CREATE_ADDRESS_FAILURE,
  CREATE_ADDRESS_SUCCESS,
} from '../../../constants';

export const createAddress = (payload) => ({
  type: CREATE_ADDRESS,
  payload,
});

export const createAddressFailure = (payload) => ({
  type: CREATE_ADDRESS_FAILURE,
  payload,
});

export const createAddressSuccess = (payload) => ({
  type: CREATE_ADDRESS_SUCCESS,
  payload,
});
