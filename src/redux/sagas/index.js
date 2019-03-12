import { all, fork } from 'redux-saga/effects';
import { watchFetchProducts } from './product/list';
import { watchFetchCategories, watchRetrieveCategory } from './category';
import { watchSearchProducts } from './search';
import { watchFetchProductAttributes } from './attribute';
import { watchFetchProduct } from './product/single';
import {
  watchFetchCartId,
  watchAddCart,
  watchFetchCartProducts,
  watchEmptyCart,
  watchRemoveCartProduct,
  watchUpdateCartProduct,
} from './cart';
import { watchLogin } from './login';
import { watchSignup } from './signup';
import { watchFetchRegions } from './shipping';
import { watchCreateAddress } from './customer';
import { watchCreateOrder, watchCharge } from './order';

export default function* root() {
  yield all([
    fork(watchFetchProducts),
    fork(watchFetchCategories),
    fork(watchRetrieveCategory),
    fork(watchSearchProducts),
    fork(watchFetchProductAttributes),
    fork(watchFetchProduct),
    fork(watchFetchCartId),
    fork(watchAddCart),
    fork(watchFetchCartProducts),
    fork(watchLogin),
    fork(watchSignup),
    fork(watchFetchRegions),
    fork(watchCreateAddress),
    fork(watchEmptyCart),
    fork(watchCreateOrder),
    fork(watchCharge),
    fork(watchRemoveCartProduct),
    fork(watchUpdateCartProduct),
  ]);
}
