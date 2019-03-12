import { call, put, takeEvery } from 'redux-saga/effects';
import { SEARCH_PRODUCT } from '../../../constants';
import * as actions from '../../actions/search';
import { api } from '../../../utils/api';

export function* searchProductsAsync({ payload }) {
  try {
    const response = yield call(api.products.search, payload);
    const data = response ? response.data : {};
    yield put(actions.searchProductSuccess({ data }));
  } catch (error) {
    yield put(actions.searchProductFailure({}));
  }
}
/* WATCHERS */
export function* watchSearchProducts() {
  yield takeEvery(SEARCH_PRODUCT, searchProductsAsync);
}
