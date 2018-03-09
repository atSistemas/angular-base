import { IAction } from 'base/models/action'
import { Observable } from 'rxjs/Observable'

export function createObservableAction (action: IAction): Observable<IAction> {
  return Observable.of({
    payload: action.payload,
    type: `${action.type}`
  })
}
