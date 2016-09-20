import 'rxjs';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/catch';
import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { ActionsObservable } from 'redux-observable';
import { Observable } from 'rxjs/Observable';
import { Action } from 'redux';
import { actionTypes } from '../action-types';
import { AppState, PayloadAction } from 'base';

@Injectable()
export class <%= _.capitalize(name) %>Service {
  constructor(private http: Http) { }

  query = (action$: ActionsObservable<Action>): Observable<Action> => {
    return action$.ofType(actionTypes.<%= name.toUpperCase() %>_QUERY)
      .flatMap((/*{payload}*/) => {
        return this.http.get('mocks/main.json')
          .map(result => ({
            type: actionTypes.<%= name.toUpperCase() %>_QUERY_SUCCESS,
            payload: result.json()
          }))
          .catch(error => Observable.of({
            type: actionTypes.<%= name.toUpperCase() %>_QUERY__ERROR
          }));
      });
  }
}