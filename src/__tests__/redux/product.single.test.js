import {
  FETCH_PRODUCT,
  FETCH_PRODUCT_SUCCESS,
  FETCH_PRODUCT_FAILURE,
} from '../../constants';
import * as productListActions from '../../redux/actions/product/single';
import reducer, { initialState } from '../../redux/reducers/product/single';

const actions = [
  {
    type: FETCH_PRODUCT,
    action: productListActions.fetchProduct,
    expected: true,
  },
  {
    type: FETCH_PRODUCT_FAILURE,
    action: productListActions.fetchProductFailure,
    expected: false,
  },
  {
    type: FETCH_PRODUCT_SUCCESS,
    action: productListActions.fetchProductSuccess,
    expected: false,
  },
];

describe('productList actions', () => {
  actions.map((action) =>
    it(`should dispatch ${action.type}`, () => {
      expect(action.action({}).type).toEqual(action.type);
    }),
  );
});

describe('productListReducer', () => {
  actions.map((action) =>
    it(`should set ${action.type}`, () => {
      expect(reducer(initialState, action).loading).toEqual(action.expected);
    }),
  );
  it('should provide an initial state', () => {
    expect(reducer(initialState, {})).toEqual(initialState);
  });
});
