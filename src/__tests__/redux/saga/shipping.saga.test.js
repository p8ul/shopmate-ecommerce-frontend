import { call, put } from 'redux-saga/effects';
import sagaHelper from 'redux-saga-testing';

import { api } from '../../../utils/api';
import * as actions from '../../../redux/actions/shipping';
import { fetchRegionsAsync } from '../../../redux/sagas/shipping';

describe('Shipping Saga', () => {
  const payload = { data: {}, callback: () => {} };
  const it = sagaHelper(fetchRegionsAsync({ payload }));
  it('should  call regions endpoint', (result) => {
    expect(result).toEqual(call(api.shipping.regions));
  });
  it('and then yield dispatch fetchRegionSuccess', (result) => {
    expect(result).toEqual(put(actions.fetchRegionSuccess({ regions: {} })));
  });
});
