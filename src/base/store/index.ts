import { ActionReducer } from '@ngrx/store';
import { compose } from '@ngrx/core/compose';
import { storeFreeze } from 'ngrx-store-freeze';
import { storeLogger } from 'ngrx-store-logger';

import { State, ENV } from 'base';

export function configureStore(rootReducer): ActionReducer<State> {
  if (ENV === 'development') {
    return compose(storeFreeze, storeLogger())(rootReducer);
  } else {
    return rootReducer;
  }
}
