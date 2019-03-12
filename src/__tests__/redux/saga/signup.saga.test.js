import { call, put } from 'redux-saga/effects';
import sagaHelper from 'redux-saga-testing';

import { api } from '../../../utils/api';
import * as actions from '../../../redux/actions/signup';
import { signupAsync } from '../../../redux/sagas/signup';
import { setToken } from '../../../utils/auth';

describe('Login Saga', () => {
  const payload = { data: {}, callback: () => {} };
  const it = sagaHelper(signupAsync({ payload }));
  it('should  call signup endpoint', (result) => {
    expect(result).toEqual(call(api.customer.signup, {}));
  });
  it('and then yield dispatch signupSuccess', (result) => {
    expect(result).toEqual(put(actions.signupSuccess({ data: {} })));
  });
  it('and then call setToken', (result) => {
    expect(result).toEqual(call(setToken, {}));
  });
  it('and then yield call callback', (result) => {
    expect(result).toEqual(call(payload.callback));
    return new Error('Some error');
  });
  it('and then yield dispatch signupFailure', (result) => {
    expect(result).toEqual(put(actions.signupFailure({})));
    return new Error('Some error');
  });
});
