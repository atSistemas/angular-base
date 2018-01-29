import { Observable } from 'rxjs/Observable';
import { Action } from 'base/models/action';

export function createObservableAction(action: Action): Observable<Action> {
  return Observable.of({
    type: `${action.type}`,
    payload: action.payload
  });
}