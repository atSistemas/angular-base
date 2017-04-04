import { RouterState } from '@ngrx/router-store';

import { MainState } from '../models';

export interface State {
  router: RouterState;
  main: MainState;
};