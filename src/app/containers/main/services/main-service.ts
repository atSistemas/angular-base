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
import { IPayloadAction } from '../actions/';
import { AppState } from 'base/store';


@Injectable()
export class MainService {
  constructor(private http: Http) {}

  getData = (action$: ActionsObservable) => {
    return action$.ofType(actionTypes.MAIN_REQUEST)
    .flatMap((/*{payload}*/) => {
      return this.http.get('mocks/main.json')
        .map(result => ({
          type: actionTypes.MAIN_SUCCESS,
          payload: result.json()
        }))
        .catch(error => Observable.of({
          type: actionTypes.MAIN_ERROR
        }));
      });
    }
}