import { call, put, takeEvery } from 'redux-saga/effects';
import { FETCH_PRODUCT } from '../../../constants';
import * as actions from '../../actions/product/single';
import { api } from '../../../utils/api';

export function* fetchProductAsync({ payload }) {
  try {
    const response = yield call(api.products.retrieve, payload);
    const data = response ? response.data : {};
    yield put(actions.fetchProductSuccess({ data }));
  } catch (error) {
    yield put(actions.fetchProductFailure({}));
  }
}
/* WATCHERS */
export function* watchFetchProduct() {
  yield takeEvery(FETCH_PRODUCT, fetchProductAsync);
}
