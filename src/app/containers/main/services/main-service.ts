
import { Http } from '@angular/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { AppState } from '../../../../base/store';
import { ActionTypes } from '../action-types';
import { BaseService } from '../../../../base/shared/BaseService';
import { PayloadAction } from '../../../../base/';

@Injectable()
export class MainService extends BaseService {
  constructor(public http: Http) {
    super(http);
  }

  public getData(): Observable<string> {
    return this.http.get('mocks/main.json', this.optionsNoPre)
      .map(res => res.text());
}
  /*
  public getData = (action$: ActionsObservable<Action>): Observable<Action> => {

    return action$.ofType(actionTypes.MAIN_REQUEST)
      .flatMap(({payload}) => {
        return this.http.get('mocks/main.json')
          .map((result) => ({
            payload: result.json(),
            type: actionTypes.MAIN_SUCCESS,
          }))
          .catch((error) => Observable.of({
            type: actionTypes.MAIN_ERROR,
          }));
      });
  }*/

}
