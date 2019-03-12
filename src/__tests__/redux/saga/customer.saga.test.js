import { call, put } from 'redux-saga/effects';
import sagaHelper from 'redux-saga-testing';
import toastr from 'toastr';

import { api } from '../../../utils/api';
import * as actions from '../../../redux/actions/customer';
import { createAddressAsync } from '../../../redux/sagas/customer';

describe('Customer Saga', () => {
  describe('createAddressAsync', () => {
    const it = sagaHelper(createAddressAsync({}));
    it('should  call customer address', (result) => {
      expect(result).toEqual(call(api.customer.address, undefined));
    });
    it('and then yield dispatch createAddressSuccess', (result) => {
      expect(result).toEqual(put(actions.createAddressSuccess({ data: {} })));
    });

    it('should  call customer details', (result) => {
      expect(result).toEqual(call(api.customer.details));
    });
    it('should store results in local storage', (result) => {
      expect(result.type).toEqual('CALL');
      return new Error('Some error');
    });

    it('and then yield dispatch createAddressFailure', (result) => {
      expect(result).toEqual(put(actions.createAddressFailure({})));
    });
  });
});
