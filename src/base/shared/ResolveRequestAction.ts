import { Observable } from 'rxjs/Observable';

import { Action } from '../models';
import { getActionPrefix } from './Utils';
import { createObservableAction } from './CreateObservableAction';

export function resolveRequestAction(action, response, result): Observable<Action> {
  return createObservableAction({
    type: `${getActionPrefix(action.type)}_${result}`,
    payload: response
  });
}