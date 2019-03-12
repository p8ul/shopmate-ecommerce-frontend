import {
  SEARCH_PRODUCT,
  SEARCH_PRODUCT_FAILURE,
  SEARCH_PRODUCT_SUCCESS,
} from '../../constants';
import * as searchActions from '../../redux/actions/search';
import searchReducer, {
  initialState,
  searchOptions,
} from '../../redux/reducers/search';

const actions = [
  {
    type: SEARCH_PRODUCT,
    action: searchActions.searchProduct,
    expected: true,
  },
  {
    type: SEARCH_PRODUCT_FAILURE,
    action: searchActions.searchProductFailure,
    expected: false,
  },
  {
    type: SEARCH_PRODUCT_SUCCESS,
    action: searchActions.searchProductSuccess,
    expected: false,
  },
];

describe('attribute actions', () => {
  actions.map((action) =>
    it(`should dispatch ${action.type}`, () => {
      expect(action.action({}).type).toEqual(action.type);
    }),
  );
});

describe('attribute Reducer', () => {
  actions.map((action) =>
    it(`should set ${action.type}`, () => {
      expect(searchReducer(initialState, action).loading).toEqual(
        action.expected,
      );
    }),
  );
  it('should provide an initial state', () => {
    expect(searchReducer(initialState, {})).toEqual(initialState);
  });

  it('should return search options', () => {
    const options = [{ name: 'name', description: 'description', price: '12' }];
    const results = searchOptions(options);
    expect(results[0]).toHaveProperty('image');
  });
});
