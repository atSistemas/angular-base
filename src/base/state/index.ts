import { RouterState } from '@ngrx/router-store';
import { MainState } from 'base/models';
import { CalculatorState} from 'base/models';

export interface State {
  router: RouterState;
  main: MainState;
  calculator: CalculatorState;
};