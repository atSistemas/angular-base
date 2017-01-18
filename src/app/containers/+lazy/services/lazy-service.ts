import 'rxjs';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/map';

import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Action } from 'redux';
import { ActionsObservable } from 'redux-observable';
import { Observable } from 'rxjs/Observable';

import { PayloadAction } from '../../../../base/';
import { AppState } from '../../../../base/store';
import { actionTypes } from '../action-types';

@Injectable()
export class LazyService {
  constructor(private http: Http) {}

  public getData = (action$: ActionsObservable<Action>) => {
    return action$.ofType(actionTypes.LAZY_REQUEST)
    .flatMap(() => {
      return this.http.get('mocks/main.json')
        .map((result) => ({
          payload: result.json(),
          type: actionTypes.LAZY_SUCCESS,
        }))
        .catch((error) => Observable.of({
          type: actionTypes.LAZY_ERROR,
        }));
      });
    }
}
