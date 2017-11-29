import { routerReducer, RouterReducerState } from '@ngrx/router-store';
import { Main, MainModel } from '../../app/containers/main/models';
import * as CalculatorModel from '../../app/containers/calculator/models';
import { Record } from 'immutable';

export interface State {
  main: Main;
  calculator: CalculatorModel.State;
}

export const initialState: State = {
  main: { id: 123, name: 'leches' },
  calculator: CalculatorModel.initialState
  //calculator: new CalculatorModel(),
  //router: undefined
};