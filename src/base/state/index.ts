import { RouterState } from '@ngrx/router-store';
import { MainState } from 'base/models';
import { Calculator} from 'base/models';

export interface State {
  router: RouterState;
  main: MainState;
  calculator: Calculator;
};