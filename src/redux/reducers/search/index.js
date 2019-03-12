import {
  SEARCH_PRODUCT,
  SEARCH_PRODUCT_FAILURE,
  SEARCH_PRODUCT_SUCCESS,
  IMAGE_URL,
} from '../../../constants';

export const initialState = {
  loading: false,
};

export const searchOptions = (data) => {
  const options = [];
  data.map((value) =>
    options.push({
      ...value,
      price: `£ ${value.price}`,
      description: value.description.substring(0, 20),
      title: value.name,
      image: `${IMAGE_URL}${value.thumbnail}`,
    }),
  );
  return options;
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case SEARCH_PRODUCT:
      return { ...state, ...payload, loading: true };
    case SEARCH_PRODUCT_FAILURE:
      return { ...state, ...payload, loading: false };
    case SEARCH_PRODUCT_SUCCESS: {
      const options = payload ? payload.data : {};
      const rows = options.rows ? options.rows : [];
      const data = searchOptions(rows);
      return { ...state, data, loading: false };
    }

    default:
      return state;
  }
};
