import { AppState } from '../../../../../base/store';
import { createSelector } from 'reselect';


const stateEstimateList = (state: AppState) => state.estimateList.estimateList;

export const getIsSelected = createSelector(
  stateEstimateList,
  estimateList => estimateList.some(estimate => estimate.isSelected)
);

export const getEstimateList = createSelector(
  stateEstimateList,
  estimateList => estimateList
);
