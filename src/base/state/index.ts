import { EstimateListState } from '../../app/containers/+estimate-list/models';
import { AccountState } from '../../app/containers/account/models';
import { RouterState } from '@ngrx/router-store';

import { MainState } from '../models';

export interface State {
  router: RouterState;
  main: MainState;
  account: AccountState;
  estimateList: EstimateListState;
};
