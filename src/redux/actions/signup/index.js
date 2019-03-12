import { SIGNUP, SIGNUP_FAILURE, SIGNUP_SUCCESS } from '../../../constants';

export const signup = (payload) => ({
  type: SIGNUP,
  payload,
});

export const signupSuccess = (payload) => ({
  type: SIGNUP_SUCCESS,
  payload,
});
export const signupFailure = (payload) => ({
  type: SIGNUP_FAILURE,
  payload,
});
