import { EstimateListReducer } from '../../app/containers/+estimate/+estimate-list/reducers';
import { AccountReducer } from '../../app/containers/account/reducers';
import { combineReducers } from '@ngrx/store';
import { routerReducer } from '@ngrx/router-store';
import { MainReducer } from '../../app/containers/main/reducers';
import { configureStore } from '../store';

export const rootReducer = combineReducers({
  main: MainReducer,
  router: routerReducer,
  account: AccountReducer,
  estimateList: EstimateListReducer
});

const store = configureStore(rootReducer);

export function RootReducer(state: any, action: any) {
  return store(state, action);
}
