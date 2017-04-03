import { combineReducers } from '@ngrx/store';
import { routerReducer } from '@ngrx/router-store';

import { configureStore } from '../store';
import { AccountReducer } from '../../app/containers/account/reducers';
import { EstimateListReducer } from '../../app/containers/+estimate-list/reducers';

export const rootReducer = combineReducers({
  router: routerReducer,
  account: AccountReducer,
  estimateList: EstimateListReducer
});

const store = configureStore(rootReducer);

export function RootReducer(state: any, action: any) {
  return store(state, action);
}
