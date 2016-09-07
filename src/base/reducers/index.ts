import { combineReducers } from 'redux';
import { routerReducer } from 'ng2-redux-router';
import { combineEpics } from 'redux-observable';

import { MainModelInterface, MainModel } from '../models';
import { MainReducer } from '../../app/containers/main/reducers';
import { AppState } from '../store';
import { MainService } from '../../app/containers/main/services/main.service';

export interface rootReducer {
  main: MainModel;
};

//FIXME move to epics folder?
/*
export const RootEpic = combineEpics(
  MainService
);
*/

export const RootReducer = combineReducers<AppState>({
  main: MainReducer,
  router: routerReducer,
});
