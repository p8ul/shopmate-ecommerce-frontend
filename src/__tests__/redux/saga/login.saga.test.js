import { call, put } from 'redux-saga/effects';
import sagaHelper from 'redux-saga-testing';

import { api } from '../../../utils/api';
import * as actions from '../../../redux/actions/login';
import { loginAsync } from '../../../redux/sagas/login';
import { setToken } from '../../../utils/auth';

describe('Login Saga', () => {
  const payload = { data: {}, callback: () => {} };
  const it = sagaHelper(loginAsync({ payload }));
  it('should  call login endpoint', (result) => {
    expect(result).toEqual(call(api.customer.login, {}));
  });
  it('and then yield dispatch loginSuccess', (result) => {
    expect(result).toEqual(put(actions.loginSuccess({ data: {} })));
  });
  it('and then call setToken', (result) => {
    expect(result).toEqual(call(setToken, {}));
  });
  it('and then yield call callback', (result) => {
    expect(result).toEqual(call(payload.callback));
    return new Error('Some error');
  });
  it('and then yield dispatch loginFailure', (result) => {
    expect(result).toEqual(put(actions.loginFailure({})));
    return new Error('Some error');
  });
});
