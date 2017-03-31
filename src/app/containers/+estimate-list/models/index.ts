import { Estimate } from '../../+estimate/models/estimate.model';
export interface EstimateListState {
  estimateList: Estimate[];
  error: any;
  loading: boolean;
};


export const InitialState = <EstimateListState>{
  estimateList: [],
  error: false,
  loading: false
};
