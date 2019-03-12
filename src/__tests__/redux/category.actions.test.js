import {
  FETCH_CATEGORIES,
  FETCH_CATEGORIES_FAILURE,
  FETCH_CATEGORIES_SUCCESS,
  RETRIEVE_CATEGORY,
  RETRIEVE_CATEGORY_SUCCESS,
} from '../../constants';
import * as categoryActions from '../../redux/actions/category';
import categoryReducer, { initialState } from '../../redux/reducers/category';

const actions = [
  {
    type: FETCH_CATEGORIES,
    action: categoryActions.fetchCategories,
    expected: true,
  },
  {
    type: FETCH_CATEGORIES_FAILURE,
    action: categoryActions.fetchCategoriesFailure,
    expected: false,
  },
  {
    type: FETCH_CATEGORIES_SUCCESS,
    action: categoryActions.fetchCategoriesSuccess,
    expected: false,
  },
  {
    type: RETRIEVE_CATEGORY,
    action: categoryActions.retrieveCategory,
    expected: true,
  },
  {
    type: RETRIEVE_CATEGORY_SUCCESS,
    action: categoryActions.retrieveCategorySuccess,
    expected: false,
  },
];

describe('category actions', () => {
  actions.map((action) =>
    it(`should dispatch ${action.type}`, () => {
      expect(action.action({}).type).toEqual(action.type);
    }),
  );
});

describe('category Reducer', () => {
  actions.map((action) =>
    it(`should set ${action.type}`, () => {
      expect(categoryReducer(initialState, action).loading).toEqual(
        action.expected,
      );
    }),
  );
  it('should provide an initial state', () => {
    expect(categoryReducer(initialState, {})).toEqual(initialState);
  });
});
