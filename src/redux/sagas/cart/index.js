import { call, put, takeEvery } from 'redux-saga/effects';
import toastr from 'toastr';
import {
  FETCH_CART_ID,
  ADD_CART,
  FETCH_CART_PRODUCTS,
  EMPTY_CART,
  REMOVE_CART_PRODUCT,
  UPDATE_CART,
  CART_COUNT_KEY,
  CART_ID_KEY,
} from '../../../constants';
import * as actions from '../../actions/cart';
import { api } from '../../../utils/api';
import Store from '../../../utils/session';

toastr.options = {
  preventDuplicates: true,
};

// init storage instances
const cartIdStore = new Store(CART_ID_KEY);
const cartCountStore = new Store(CART_COUNT_KEY);

export function* fetchCartProductsAsync() {
  const cartId = cartIdStore.getLocalStorage().id;
  let response = {};
  yield put(actions.fetchCartProductsSuccess({}));
  if (cartId) {
    response = yield call(api.cart.list, cartId);
    response = response || {};
  }
  const data = response ? response.data : [];
  try {
    const length = data ? data.length : 0;
    yield call(cartCountStore.setLocalStorage, { count: length });
  } catch (error) {
    yield put(actions.fetchCartProductsFailure());
  }

  yield put(actions.fetchCartIdSuccess(response));
}

export function* fetchCartIdAsync({ payload }) {
  const response = yield call(api.cart.getId, payload);
  const data = response ? response.data : {};
  yield put(actions.fetchCartProducts());
  yield put(actions.fetchCartIdSuccess(data));
  yield call(cartIdStore.setLocalStorage, { id: data.cart_id });
}

export function* addCartAsync({ payload }) {
  try {
    const response = yield call(api.cart.create, payload);
    const data = response ? response.data : {};
    yield put(actions.fetchCartIdSuccess(data));
    yield put(actions.fetchCartProducts({}));
    yield call(toastr.success, 'Cart added successfully');
  } catch (error) {
    yield call(toastr.warning, 'Error adding cart. Please try again');
  }
}

export function* emptyCartAsync({ payload }) {
  try {
    const response = yield call(api.cart.empty, payload);
    const data = response ? response.data : {};
    yield put(actions.emptyCartSuccess(data));
    yield call(toastr.success, 'Cart emptied successfully');
    yield call(cartCountStore.setLocalStorage, 0);
    yield put(actions.fetchCartProducts({}));
  } catch (error) {
    yield put(actions.emptyCartFailure({}));
    yield call(toastr.warning, 'Error empting cart. Please try again');
  }
}

export function* removeProductCartAsync({ payload }) {
  try {
    const response = yield call(api.cart.remove, payload.id);
    const data = response ? response.data : {};
    yield put(actions.removeProductSuccess(data));
    yield put(actions.fetchCartProducts({}));
    yield call(toastr.success, 'Product removed from Cart successfully');
  } catch (error) {
    yield put(actions.removeProductFailure({}));
    yield call(
      toastr.warning,
      'Error removing product from cart. Please try again',
    );
  }
}

export function* updateProductCartAsync({ payload }) {
  try {
    yield call(api.cart.update, payload);
    yield put(actions.updateCartSuccess({}));
    yield put(actions.fetchCartProducts({}));
    yield call(toastr.success, 'Cart updated successfully');
  } catch (error) {
    yield put(actions.updateCartFailure({}));
    yield call(
      toastr.warning,
      'Error updating product from cart. Please try again',
    );
  }
}

/** WATCHERS */
export function* watchFetchCartProducts() {
  yield takeEvery(FETCH_CART_PRODUCTS, fetchCartProductsAsync);
}
export function* watchFetchCartId() {
  yield takeEvery(FETCH_CART_ID, fetchCartIdAsync);
}

export function* watchAddCart() {
  yield takeEvery(ADD_CART, addCartAsync);
}

export function* watchEmptyCart() {
  yield takeEvery(EMPTY_CART, emptyCartAsync);
}

export function* watchRemoveCartProduct() {
  yield takeEvery(REMOVE_CART_PRODUCT, removeProductCartAsync);
}

export function* watchUpdateCartProduct() {
  yield takeEvery(UPDATE_CART, updateProductCartAsync);
}
