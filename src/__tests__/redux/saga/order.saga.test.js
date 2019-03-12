import { call, put } from 'redux-saga/effects';
import sagaHelper from 'redux-saga-testing';
import toastr from 'toastr';

import { api } from '../../../utils/api';
import * as actions from '../../../redux/actions/order';
import { createOrderAsync, chargeAsync } from '../../../redux/sagas/order';

describe('Order Saga', () => {
  describe('createOrderAsync', () => {
    const it = sagaHelper(createOrderAsync({}));
    it('should  call create orders', (result) => {
      expect(result).toEqual(call(api.orders.create, undefined));
    });
    it('and then yield dispatch createOrderSuccess', (result) => {
      expect(result).toEqual(put(actions.createOrderSuccess({ data: {} })));
    });
    it('should  call a toastr', (result) => {
      expect(result).toEqual(
        call(toastr.success, 'Order created successfully'),
      );
    });
    it('should store results in local storage', (result) => {
      expect(result.type).toEqual('CALL');
    });
    it('should  call create orders', (result) => {
      expect(result).toEqual(call(api.orders.list, undefined));
    });
    it('should store results in local storage', (result) => {
      expect(result.type).toEqual('CALL');
      return new Error('Some error');
    });

    it('and then yield dispatch createOrderFailure', (result) => {
      expect(result).toEqual(put(actions.createOrderFailure({})));
    });
    it('should  call a toastr', (result) => {
      expect(result).toEqual(
        call(toastr.error, 'Order not created. Please try again'),
      );
    });
  });

  describe('chargeAsync', () => {
    const it = sagaHelper(chargeAsync({}));
    it('should  call stripe charge', (result) => {
      expect(result).toEqual(call(api.stripe.charge, undefined));
    });
    it('and then yield dispatch chargeSuccess', (result) => {
      expect(result).toEqual(put(actions.chargeSuccess({ data: {} })));
    });
    it('should  call a toastr', (result) => {
      expect(result).toEqual(
        call(toastr.success, 'Order charged successfully'),
      );
      return new Error('Some error');
    });

    it('and then yield dispatch chargeFailure', (result) => {
      expect(result).toEqual(put(actions.chargeFailure({})));
    });
    it('should  call a toastr', (result) => {
      expect(result).toEqual(
        call(toastr.error, 'Error charging your order. Please try again'),
      );
    });
  });
});
