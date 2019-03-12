import { call, put, takeEvery } from 'redux-saga/effects';
import toastr from 'toastr';
import { LOGIN } from '../../../constants';
import * as actions from '../../actions/login';
import { api } from '../../../utils/api';
import { setToken } from '../../../utils/auth';

toastr.options = {
  positionClass: 'toast-top-center',
  preventDuplicates: true,
};
export function* loginAsync({ payload }) {
  const credentials = payload ? payload.data : {};
  const callback = payload ? payload.callback : () => {};
  try {
    const response = yield call(api.customer.login, credentials);
    const data = response ? response.data : {};
    yield put(actions.loginSuccess({ data }));
    yield call(setToken, data);
    yield call(callback);
  } catch (error) {
    const data = error.response ? error.response.data : {};
    const message = data.error ? data.error : {};

    toastr.error(message.message);
    yield put(actions.loginFailure({}));
  }
}

/* WATCHERS */
export function* watchLogin() {
  yield takeEvery(LOGIN, loginAsync);
}
