import {
  FETCH_PRODUCT_ATTRIBUTES,
  FETCH_PRODUCT_ATTRIBUTES_SUCCESS,
} from '../../../constants';

export const initialState = {
  loading: false,
  data: [],
  attributeTypes: [],
};

export const extractAttributeTypes = (attributes) => {
  const data = attributes ? attributes.data : [];
  return [...new Set(data.map((attribute) => attribute.attribute_name))];
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case FETCH_PRODUCT_ATTRIBUTES:
      return { ...state, loading: true };
    case FETCH_PRODUCT_ATTRIBUTES_SUCCESS: {
      const attributeTypes = extractAttributeTypes(payload);
      return { ...state, ...payload, attributeTypes, loading: true };
    }

    default:
      return state;
  }
};
