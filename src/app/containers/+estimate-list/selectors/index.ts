import { State } from 'base';
import { createSelector } from 'reselect';


const stateEstimateList = (state: State) => state.estimateList.estimateList;

export const getIsSelected = createSelector(
  stateEstimateList,
  estimateList => estimateList.some(estimate => estimate.isSelected)
);

export const getEstimateList = createSelector(
  stateEstimateList,
  estimateList => estimateList
);
