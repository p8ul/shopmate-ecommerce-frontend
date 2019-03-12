import { call, put, takeEvery } from 'redux-saga/effects';
import toastr from 'toastr';
import { CREATE_ADDRESS, CUSTOMER_DETAILS_KEY } from '../../../constants';
import * as actions from '../../actions/customer';
import { api } from '../../../utils/api';
import Store from '../../../utils/session';

const store = new Store(CUSTOMER_DETAILS_KEY);

toastr.options = {
  positionClass: 'toast-top-center',
  preventDuplicates: true,
};
export function* createAddressAsync({ payload }) {
  try {
    const response = yield call(api.customer.address, payload);
    let data = response ? response.data : {};
    yield put(actions.createAddressSuccess({ data }));
    const address = yield call(api.customer.details);
    data = address ? address.data : {};
    yield call(store.setLocalStorage, data);
  } catch (error) {
    const data = error.response ? error.response.data : {};
    const message = data.error ? data.error : {};

    toastr.error(message.message);
    yield put(actions.createAddressFailure({}));
  }
}

/* WATCHERS */
export function* watchCreateAddress() {
  yield takeEvery(CREATE_ADDRESS, createAddressAsync);
}
