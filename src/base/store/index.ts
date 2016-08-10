import { RootReducer } from '../reducers';
import { MainTypes, MainModel, InitialState } from '../models';

export interface AppState {
  main?: MainTypes;
};


export function ConfigureStore(ngRedux, initialState) {

  ngRedux.configureStore(RootReducer, initialState);

}
