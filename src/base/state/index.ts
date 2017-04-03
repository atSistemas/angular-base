import { RouterState } from '@ngrx/router-store';

import { AccountState } from 'app/containers/account/models';
import { EstimateListState } from 'app/containers/+estimate-list/models';

export interface State {
  router: RouterState;
  account: AccountState;
  estimateList: EstimateListState;
};
