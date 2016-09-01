import { combineReducers } from 'redux';
import { routerReducer } from 'ng2-redux-router';

import { MainTypes, MainModel } from '../models';
import { MainReducer } from '../../app/containers/main/reducers';
import { AppState } from '../store';

export interface rootReducer {
  main: MainModel;
};

export const RootReducer = combineReducers<AppState>({
  main: MainReducer,
  router: routerReducer,
});
