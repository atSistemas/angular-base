import { Observable } from 'rxjs/Observable';
//FIXME
// tslint:disable-next-line:no-unused-variable
import * as fixme from 'rxjs/add/observable/of';

export function createObservableAction(action) {
  return Observable.of({
    type: `${action.type}`,
    payload: action.payload
  });
}