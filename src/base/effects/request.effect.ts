import { Injectable } from '@angular/core';
import { Actions, Effect } from '@ngrx/effects';
import { Action, resolveRequestAction } from 'base';

@Injectable()
export class RequestEffect {
  constructor(
    private actions$: Actions,
  ) { }

  // tslint:disable:no-unused-variable
  @Effect()
    private main$ = this.actions$
    .filter((action: Action) => action.payload && action.payload.request)
    .switchMap(action => action.payload.request
      .mergeMap(res => resolveRequestAction(action, res, 'SUCCESS'))
      .catch(err => resolveRequestAction(action, err, 'ERROR'))
    );
}