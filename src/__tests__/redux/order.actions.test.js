import {
  CREATE_ORDER,
  CREATE_ORDER_FAILURE,
  CREATE_ORDER_SUCCESS,
  CHARGE,
  CHARGE_FAILURE,
  CHARGE_SUCCESS,
} from '../../constants';

import * as cartActions from '../../redux/actions/order';
import cartReducer, { initialState } from '../../redux/reducers/order';

const actions = [
  {
    type: CREATE_ORDER,
    action: cartActions.createOrder,
    expected: true,
  },
  {
    type: CREATE_ORDER_FAILURE,
    action: cartActions.createOrderFailure,
    expected: false,
  },
  {
    type: CREATE_ORDER_SUCCESS,
    action: cartActions.createOrderSuccess,
    expected: false,
  },
  {
    type: CHARGE,
    action: cartActions.charge,
    expected: true,
  },
  {
    type: CHARGE_FAILURE,
    action: cartActions.chargeFailure,
    expected: false,
  },
  {
    type: CHARGE_SUCCESS,
    action: cartActions.chargeSuccess,
    expected: false,
  },
];

describe('order actions', () => {
  actions.map((action) =>
    it(`should dispatch ${action.type}`, () => {
      expect(action.action({}).type).toEqual(action.type);
    }),
  );
});

describe('OrderReducer', () => {
  actions.map((action) =>
    it(`should set ${action.type}`, () => {
      expect(cartReducer(initialState, action).loading).toEqual(
        action.expected,
      );
    }),
  );
  it('should provide an initial state', () => {
    expect(cartReducer(initialState, {})).toEqual(initialState);
  });
});
