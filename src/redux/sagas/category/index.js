import { call, put, takeEvery } from 'redux-saga/effects';
import { FETCH_CATEGORIES, RETRIEVE_CATEGORY } from '../../../constants';
import * as actions from '../../actions/category';
import { api } from '../../../utils/api';

export function* retrieveCategoryAsync({ payload }) {
  try {
    const id = payload ? payload.id : 1;
    const response = yield call(api.categories.retrieve, id);
    const data = response ? response.data : {};
    yield put(actions.retrieveCategorySuccess({ singleCategory: data }));
  } catch (error) {
    yield put(actions.fetchCategoriesFailure());
  }
}
export function* fetchCategoriessAsync({ payload }) {
  try {
    const response = yield call(api.categories.list, payload);
    const data = response ? response.data : {};
    yield put(actions.fetchCategoriesSuccess({ data }));
  } catch (error) {
    yield put(actions.fetchCategoriesFailure({}));
  }
}
/* WATCHERS */
export function* watchFetchCategories() {
  yield takeEvery(FETCH_CATEGORIES, fetchCategoriessAsync);
}

export function* watchRetrieveCategory() {
  yield takeEvery(RETRIEVE_CATEGORY, retrieveCategoryAsync);
}
