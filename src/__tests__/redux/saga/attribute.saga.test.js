import { call, put } from 'redux-saga/effects';
import sagaHelper from 'redux-saga-testing';

import { api } from '../../../utils/api';
import * as actions from '../../../redux/actions/attribute';
import { fetchProductAttributesAsync } from '../../../redux/sagas/attribute';

describe('fetchProductAsync Saga', () => {
  const it = sagaHelper(
    fetchProductAttributesAsync({ payload: { query: {} } }),
  );
  it('should  call retrieve attributes', (result) => {
    expect(result).toEqual(call(api.attributes.list, { query: {} }));
  });
  it('and then yield dispatch fetchProductAttributesSuccess', (result) => {
    expect(result).toEqual(
      put(actions.fetchProductAttributesSuccess({ data: {} })),
    );
    return new Error('Some error');
  });
});
