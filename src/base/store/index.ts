import { compose } from '@ngrx/core/compose';
import { storeFreeze } from 'ngrx-store-freeze';
import { storeLogger } from 'ngrx-store-logger';

import * as base from '../';
import { RequestMiddleware } from '../middleware/requestMiddleware';

export function configureStore(rootReducer) {
  if (base.ENV === 'development') {
    return compose(RequestMiddleware, storeFreeze, storeLogger())(rootReducer);
  } else {
    return compose(RequestMiddleware)(rootReducer);
  }
}
