import { call, put } from 'redux-saga/effects';
import sagaHelper from 'redux-saga-testing';

import { api } from '../../../utils/api';
import * as actions from '../../../redux/actions/search';
import { searchProductsAsync } from '../../../redux/sagas/search';

describe('SearchProduct Saga', () => {
  const it = sagaHelper(searchProductsAsync({ payload: { query: {} } }));
  it('should  call search products', (result) => {
    expect(result).toEqual(call(api.products.search, { query: {} }));
  });
  it('and then yield dispatch searchProductSuccess', (result) => {
    expect(result).toEqual(put(actions.searchProductSuccess({ data: {} })));
    return new Error('Some error');
  });

  it('and then yield dispatch searchProductFailure', (result) => {
    expect(result).toEqual(put(actions.searchProductFailure({})));
  });
});
