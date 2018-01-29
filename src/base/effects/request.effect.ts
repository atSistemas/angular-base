import { Injectable } from '@angular/core';
import { Actions, Effect } from '@ngrx/effects';
import { Action, resolveRequestAction } from 'base';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class RequestEffect {
  @Effect() main$: Observable<Action> = this.actions$
  .filter((action: Action) => action.request)
  .concatMap((action: Action) => action.request
    .mergeMap(res => resolveRequestAction(action, res, 'SUCCESS'))
    .catch(err => resolveRequestAction(action, err, 'ERROR'))
  );

  constructor(
    private actions$: Actions
  ) { }
}