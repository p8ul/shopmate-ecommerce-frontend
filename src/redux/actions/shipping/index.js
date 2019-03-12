import { FETCH_REGION, FETCH_REGION_SUCCESS } from '../../../constants';

export const fetchRegion = (payload) => ({
  type: FETCH_REGION,
  payload,
});

export const fetchRegionSuccess = (payload) => ({
  type: FETCH_REGION_SUCCESS,
  payload,
});
