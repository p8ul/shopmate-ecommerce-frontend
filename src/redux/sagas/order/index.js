import { call, put, takeEvery } from 'redux-saga/effects';
import toastr from 'toastr';
import * as actions from '../../actions/order';
import { CREATE_ORDER, ORDER_KEY, CHARGE } from '../../../constants';
import { api } from '../../../utils/api';
import Store from '../../../utils/session';

const store = new Store(ORDER_KEY);

export function* createOrderAsync({ payload }) {
  try {
    const order = yield call(api.orders.create, payload);
    const data = order ? order.data : {};
    yield put(actions.createOrderSuccess({ data }));
    yield call(toastr.success, 'Order created successfully');
    yield call(store.setLocalStorage, data);
    const orderId = data ? data.orderId : 0;
    const ordersDetails = yield call(api.orders.list, orderId);
    const products = ordersDetails ? ordersDetails.data : [];
    const details = {
      products,
      orderId,
    };
    yield call(store.setLocalStorage, details);
  } catch (error) {
    yield put(actions.createOrderFailure({}));
    yield call(toastr.error, 'Order not created. Please try again');
  }
}

export function* chargeAsync({ payload }) {
  try {
    const response = yield call(api.stripe.charge, payload);
    const data = response ? response.data : {};
    yield put(actions.chargeSuccess({ data }));
    yield call(toastr.success, 'Order charged successfully');
  } catch (error) {
    const response = error ? error.response : {};
    const data = response ? response.data.error : {};
    const message = data.message
      ? data.message
      : 'Error charging your order. Please try again';
    yield put(actions.chargeFailure({}));
    yield call(toastr.error, message);
  }
}

// WATCHERS
export function* watchCreateOrder() {
  yield takeEvery(CREATE_ORDER, createOrderAsync);
}

export function* watchCharge() {
  yield takeEvery(CHARGE, chargeAsync);
}
