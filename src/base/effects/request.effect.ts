import { Injectable } from '@angular/core';
import { Actions, Effect } from '@ngrx/effects';
import { Observable } from 'rxjs/Observable';

import { Action } from 'base';

@Injectable()
export class RequestEffect {
  constructor(
    private actions$: Actions,
  ) { }

  private getActionPrefix(action): string {
    return action.substr(0, action.lastIndexOf('_'));
  }

  private resolveAction(action, response, result): Observable<Action> {
    return Observable.of({
      type: `${this.getActionPrefix(action.type)}_${result}`,
      payload: response
    });
  }
  // tslint:disable:no-unused-variable
  @Effect()
    private main$ = this.actions$
    .filter((action: Action) => action.payload && action.payload.request)
    .switchMap(action => action.payload.request
      .mergeMap(res => this.resolveAction(action, res, 'SUCCESS'))
      .catch(err => this.resolveAction(action, err, 'ERROR'))
    );
}