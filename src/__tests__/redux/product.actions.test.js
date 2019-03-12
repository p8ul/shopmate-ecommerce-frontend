import {
  FETCH_PRODUCTS,
  FETCH_PRODUCTS_FAILURE,
  FETCH_PRODUCTS_SUCCESS,
} from '../../constants';
import * as productListActions from '../../redux/actions/product/list';
import productListReducer, {
  initialState,
} from '../../redux/reducers/product/list';

const actions = [
  {
    type: FETCH_PRODUCTS,
    action: productListActions.fetchProducts,
    expected: true,
  },
  {
    type: FETCH_PRODUCTS_FAILURE,
    action: productListActions.fetchProductsFailure,
    expected: false,
  },
  {
    type: FETCH_PRODUCTS_SUCCESS,
    action: productListActions.fetchProductsSuccess,
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
      expect(productListReducer(initialState, action).loading).toEqual(
        action.expected,
      );
    }),
  );
  it('should provide an initial state', () => {
    expect(productListReducer(initialState, {})).toEqual(initialState);
  });
});
