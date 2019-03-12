import { call, put } from 'redux-saga/effects';
import sagaHelper from 'redux-saga-testing';

import { api } from '../../../utils/api';
import * as actions from '../../../redux/actions/product/single';
import { fetchProductAsync } from '../../../redux/sagas/product/single';

describe('fetchProductAsync Saga', () => {
  const it = sagaHelper(fetchProductAsync({ payload: { query: {} } }));
  it('should  call retrieve products', (result) => {
    expect(result).toEqual(call(api.products.retrieve, { query: {} }));
  });
  it('and then yield dispatch fetchProductSuccess', (result) => {
    expect(result).toEqual(put(actions.fetchProductSuccess({ data: {} })));
    return new Error('Some error');
  });

  it('and then yield dispatch fetchProductFailure', (result) => {
    expect(result).toEqual(put(actions.fetchProductFailure({})));
  });
});
