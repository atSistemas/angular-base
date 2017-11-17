import { Injectable } from '@angular/core';
import { Actions, Effect } from '@ngrx/effects';
import { Action, resolveRequestAction } from 'base';

@Injectable()
export class RequestEffect {
  constructor(
    private actions$: Actions,
  ) {}

  @Effect() main$ = this.actions$
    .filter((action: Action) => action.request)
    .concatMap(action => action.request
      .mergeMap(res => resolveRequestAction(action, res, 'SUCCESS'))
      .catch(err => resolveRequestAction(action, err, 'ERROR'))
    );
}