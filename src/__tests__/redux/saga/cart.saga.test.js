import { call, put } from 'redux-saga/effects';
import sagaHelper from 'redux-saga-testing';
import toastr from 'toastr';
import { api } from '../../../utils/api';
import * as actions from '../../../redux/actions/cart';
import {
  addCartAsync,
  fetchCartIdAsync,
  fetchCartProductsAsync,
  emptyCartAsync,
  removeProductCartAsync,
  updateProductCartAsync,
} from '../../../redux/sagas/cart';

describe('Cart Saga', () => {
  describe('fetchCartProductsAsync Saga', () => {
    const it = sagaHelper(fetchCartProductsAsync({}));
    it('should  dispatch fetchCartProductsSuccess', (result) => {
      expect(result).toEqual(put(actions.fetchCartProductsSuccess({})));
    });
    it('should  call list all cart', (result) => {
      expect(result.type).toEqual('CALL');
      return new Error('Some error');
    });
    it('should  dispatch fetchCartProductsFailure', (result) => {
      expect(result).toEqual(put(actions.fetchCartProductsFailure()));
    });
    it('should  call list allsfsff cart', (result) => {
      expect(result).toEqual(put(actions.fetchCartIdSuccess({})));
      return new Error('Some error');
    });
  });

  describe('fetchCartIdAsync Saga', () => {
    const it = sagaHelper(fetchCartIdAsync({}));
    it('should  call list cart', (result) => {
      expect(result).toEqual(call(api.cart.getId, undefined));
    });
    it('and then yield dispatch fetchCartProducts', (result) => {
      expect(result).toEqual(put(actions.fetchCartProducts(undefined)));
    });
    it('and then yield dispatch fetchCartIdSuccess', (result) => {
      expect(result).toEqual(put(actions.fetchCartIdSuccess({})));
    });

    it('should  call list all cart', (result) => {
      expect(result.type).toEqual('CALL');
    });
  });

  describe('addCartAsync Saga', () => {
    const it = sagaHelper(addCartAsync({}));
    it('should  call list cart', (result) => {
      expect(result).toEqual(call(api.cart.create, undefined));
    });
    it('and then yield dispatch fetchCartIdSuccess', (result) => {
      expect(result).toEqual(put(actions.fetchCartIdSuccess({})));
    });
    it('and then yield dispatch fetchCartProducts', (result) => {
      expect(result).toEqual(put(actions.fetchCartProducts({})));
    });
    it('should  call function', (result) => {
      expect(result.type).toEqual('CALL');
      return new Error('Some error');
    });
    it('should  call list all cart', (result) => {
      expect(result.type).toEqual('CALL');
      return new Error('Some error');
    });
  });

  describe('emptyCartAsync Saga', () => {
    const it = sagaHelper(emptyCartAsync({}));
    it('should  call empty cart', (result) => {
      expect(result).toEqual(call(api.cart.empty, undefined));
    });
    it('and then yield dispatch emptyCartSuccess', (result) => {
      expect(result).toEqual(put(actions.emptyCartSuccess({})));
    });
    it('and then yield call a toastr', (result) => {
      expect(result).toEqual(call(toastr.success, 'Cart emptied successfully'));
    });
    it('should  call list all cart', (result) => {
      expect(result.type).toEqual('CALL');
      return new Error('Some error');
    });
    it('and then yield dispatch emptyCartFailure', (result) => {
      expect(result).toEqual(put(actions.emptyCartFailure({})));
    });
    it('should  call list all cart', (result) => {
      expect(result.type).toEqual('CALL');
      return new Error('Some error');
    });
  });

  describe('removeProductCartAsync Saga', () => {
    const it = sagaHelper(removeProductCartAsync({ payload: { id: 1 } }));
    it('should  call remove cart', (result) => {
      expect(result).toEqual(call(api.cart.remove, 1));
    });
    it('and then yield dispatch removeProductSuccess', (result) => {
      expect(result).toEqual(put(actions.removeProductSuccess({})));
    });
    it('and then yield dispatch fetchCartProducts', (result) => {
      expect(result).toEqual(put(actions.fetchCartProducts({})));
    });
    it('and then yield call a toastr', (result) => {
      expect(result).toEqual(
        call(toastr.success, 'Product removed from Cart successfully'),
      );
      return new Error('Some error');
    });
    it('and then yield dispatch emptyCartFailure', (result) => {
      expect(result).toEqual(put(actions.removeProductFailure({})));
    });
    it('should  call list all cart', (result) => {
      expect(result).toEqual(
        call(
          toastr.warning,
          'Error removing product from cart. Please try again',
        ),
      );
      return new Error('Some error');
    });
  });

  describe('updateProductCartAsync Saga', () => {
    const it = sagaHelper(updateProductCartAsync({}));
    it('should  call update cart', (result) => {
      expect(result).toEqual(call(api.cart.update, undefined));
    });
    it('and then yield dispatch updateCartSuccess', (result) => {
      expect(result).toEqual(put(actions.updateCartSuccess({})));
    });
    it('and then yield dispatch fetchCartProducts', (result) => {
      expect(result).toEqual(put(actions.fetchCartProducts({})));
    });
    it('and then yield call a toastr', (result) => {
      expect(result).toEqual(call(toastr.success, 'Cart updated successfully'));
      return new Error('Some error');
    });
    it('and then yield dispatch emptyCartFailure', (result) => {
      expect(result).toEqual(put(actions.updateCartFailure({})));
    });
    it('should  call list all cart', (result) => {
      expect(result).toEqual(
        call(
          toastr.warning,
          'Error updating product from cart. Please try again',
        ),
      );
      return new Error('Some error');
    });
  });
});
