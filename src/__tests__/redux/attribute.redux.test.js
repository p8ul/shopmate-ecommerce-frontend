import {
  FETCH_PRODUCT_ATTRIBUTES,
  FETCH_PRODUCT_ATTRIBUTES_SUCCESS,
} from '../../constants';
import * as attributeActions from '../../redux/actions/attribute';
import attributeReducer, {
  initialState,
  extractAttributeTypes,
} from '../../redux/reducers/attribute';

const actions = [
  {
    type: FETCH_PRODUCT_ATTRIBUTES,
    action: attributeActions.fetchProductAttributes,
    expected: true,
  },
  {
    type: FETCH_PRODUCT_ATTRIBUTES_SUCCESS,
    action: attributeActions.fetchProductAttributesSuccess,
    expected: true,
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
      expect(attributeReducer(initialState, action).loading).toEqual(
        action.expected,
      );
    }),
  );
  it('should provide an initial state', () => {
    expect(attributeReducer(initialState, {})).toEqual(initialState);
  });
  it('should extract attributes types', () => {
    const types = extractAttributeTypes({
      data: [{ attribute_name: 'hello' }],
    });
    expect(types).toEqual(['hello']);
  });
});
