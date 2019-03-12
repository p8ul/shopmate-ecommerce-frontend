import { call, put, takeEvery } from 'redux-saga/effects';
import { FETCH_REGION } from '../../../constants';
import * as actions from '../../actions/shipping';
import { api } from '../../../utils/api';

export function* fetchRegionsAsync() {
  const response = yield call(api.shipping.regions);
  const data = response ? response.data : {};
  const regions = data || [];
  yield put(actions.fetchRegionSuccess({ regions }));
}
/* WATCHERS */
export function* watchFetchRegions() {
  yield takeEvery(FETCH_REGION, fetchRegionsAsync);
}
