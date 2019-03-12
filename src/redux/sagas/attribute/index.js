import { call, put, takeEvery } from 'redux-saga/effects';
import { FETCH_PRODUCT_ATTRIBUTES, CART_ID_KEY } from '../../../constants';
import * as actions from '../../actions/attribute';
import * as cartActions from '../../actions/cart';
import { api } from '../../../utils/api';
import Store from '../../../utils/session';

const cartIdStore = new Store(CART_ID_KEY);

export function* fetchProductAttributesAsync({ payload }) {
  const response = yield call(api.attributes.list, payload);
  const data = response ? response.data : {};
  yield put(actions.fetchProductAttributesSuccess({ data }));
  if (!cartIdStore.getLocalStorage().id) {
    yield put(cartActions.fetchCartId({ params: { generateUniqueId: '' } }));
  }
}

/* WATCHERS */
export function* watchFetchProductAttributes() {
  yield takeEvery(FETCH_PRODUCT_ATTRIBUTES, fetchProductAttributesAsync);
}
