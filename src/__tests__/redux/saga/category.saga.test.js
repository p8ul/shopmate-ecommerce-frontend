import { call, put } from 'redux-saga/effects';
import sagaHelper from 'redux-saga-testing';

import { api } from '../../../utils/api';
import * as actions from '../../../redux/actions/category';
import {
  fetchCategoriessAsync,
  retrieveCategoryAsync,
} from '../../../redux/sagas/category';

describe('Category Saga', () => {
  const it = sagaHelper(fetchCategoriessAsync({}));
  it('should  call list categories', (result) => {
    expect(result).toEqual(call(api.categories.list, undefined));
  });
  it('and then yield dispatch fetchCategoriesSuccess', (result) => {
    expect(result).toEqual(put(actions.fetchCategoriesSuccess({ data: {} })));
    return new Error('Some error');
  });

  it('and then yield dispatch fetchCategoriesFailure', (result) => {
    expect(result).toEqual(put(actions.fetchCategoriesFailure({})));
  });
});

describe('RetrieceCategory Saga', () => {
  const it = sagaHelper(retrieveCategoryAsync({ params: { inCategory: 1 } }));
  it('should  call retrieve category', (result) => {
    expect(result).toEqual(call(api.categories.retrieve, 1));
  });
  it('and then yield dispatch retrieveCategorySuccess', (result) => {
    expect(result).toEqual(
      put(actions.retrieveCategorySuccess({ singleCategory: {} })),
    );
    return new Error('Some error');
  });

  it('and then yield dispatch fetchCategoriesFailure', (result) => {
    expect(result).toEqual(put(actions.fetchCategoriesFailure(undefined)));
  });
});
