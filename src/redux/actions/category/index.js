import {
  FETCH_CATEGORIES,
  FETCH_CATEGORIES_FAILURE,
  FETCH_CATEGORIES_SUCCESS,
  RETRIEVE_CATEGORY,
  RETRIEVE_CATEGORY_SUCCESS,
} from '../../../constants';

export const retrieveCategory = (payload) => ({
  type: RETRIEVE_CATEGORY,
  payload,
});

export const retrieveCategorySuccess = (payload) => ({
  type: RETRIEVE_CATEGORY_SUCCESS,
  payload,
});

export const fetchCategories = (payload) => ({
  type: FETCH_CATEGORIES,
  payload,
});

export const fetchCategoriesSuccess = (payload) => ({
  type: FETCH_CATEGORIES_SUCCESS,
  payload,
});

export const fetchCategoriesFailure = (payload) => ({
  type: FETCH_CATEGORIES_FAILURE,
  payload,
});
