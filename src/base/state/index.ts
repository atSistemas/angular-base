import { routerReducer, RouterReducerState } from '@ngrx/router-store';
import { Main, MainModel } from '../../app/containers/main/models';
import * as CalculatorModel from '../../app/containers/calculator/models';

export interface State {
  main: Main;
  calculator: CalculatorModel.State;
  router: RouterReducerState<any>;
}

export const initialState: State = {
  main: { id: 123, name: 'leches' },
  calculator: CalculatorModel.initialState,
  router: undefined
};