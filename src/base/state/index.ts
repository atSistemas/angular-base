import { routerReducer, RouterReducerState } from '@ngrx/router-store';
import { Main } from '../../app/containers/main/models';
import { Calculator, CalculatorModel } from '../../app/containers/calculator/models';

export interface State {
  main: Main;
  calculator: Calculator;
  router: RouterReducerState<any>;
}

export const initialState = {
  main: {},
  calculator: new CalculatorModel(),
  router: undefined
};