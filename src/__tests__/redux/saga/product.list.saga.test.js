import { call, put } from 'redux-saga/effects';
import sagaHelper from 'redux-saga-testing';

import { api } from '../../../utils/api';
import * as actions from '../../../redux/actions';
import { fetchProductsAsync } from '../../../redux/sagas/product/list';

describe('ProductList Saga', () => {
  const it = sagaHelper(fetchProductsAsync({ payload: { query: {} } }));
  it('should  call list products', (result) => {
    expect(result).toEqual(call(api.products.list, { query: {} }, {}));
  });
  it('and then yield dispatch fetchProductsSuccess', (result) => {
    expect(result).toEqual(put(actions.fetchProductsSuccess({ data: {} })));
    return new Error('Some error');
  });

  it('and then yield dispatch fetchProductsFailure', (result) => {
    expect(result).toEqual(put(actions.fetchProductsFailure({})));
  });
});
