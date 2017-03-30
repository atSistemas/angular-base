import { createReducer } from 'base';
import { EstimateListState, InitialState } from '../models';


const actionHandlers = {

};

export const EstimateListReducer = createReducer<EstimateListState>(actionHandlers, InitialState);
