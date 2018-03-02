import { Observable } from 'rxjs/Observable'

import { IAction } from '../models'
import { createObservableAction } from './CreateObservableAction'
import { getActionPrefix } from './Utils'

export function resolveRequestAction (action: any, response: any, result: any): Observable<IAction> {
  return createObservableAction({
    payload: { response },
    type: `${getActionPrefix(action.type)}_${result}`
  })
}
