import 'rxjs';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/catch';
import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { ActionsObservable } from 'redux-observable';
import { Observable } from 'rxjs/Observable';

import { actionTypes } from '../action-types';
import { IPayloadAction } from '../../main/actions'
import { AppState } from '../../../../base/store';


@Injectable()
export class LazyService {
  constructor(private http: Http) {}

  getData = (action$: ActionsObservable) => {
    return action$.ofType(actionTypes.LAZY_REQUEST)
    .flatMap(() => {
      return this.http.get('mocks/main.json')
        .map(result => ({
          type: actionTypes.LAZY_SUCCESS,
          payload: result.json()
        }))
        .catch(error => Observable.of({
          type: actionTypes.LAZY_ERROR
        }));
      });
    }
}