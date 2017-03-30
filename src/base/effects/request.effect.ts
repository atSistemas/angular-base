import { Injectable } from '@angular/core';
import { Actions, Effect } from '@ngrx/effects';
import { Action } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class RequestEffect {

  constructor(
    private actions$: Actions,
  ) { }

  private getActionPrefix(action: string) {
    return action.substr(0, action.lastIndexOf('_'));
  }

  @Effect()
  // tslint:disable-next-line:no-unused-variable
  private main$ = this.actions$
    .filter(action => action.payload && action.payload.request)
    .switchMap(action => action.payload.request
      .mergeMap((res: any) => Observable.of({
        type: `${this.getActionPrefix(action.type)}_SUCCESS`,
        payload: res
      })
      )
      .catch(err => Observable.of({
        type: `${this.getActionPrefix(action.type)}_ERROR`,
        payload: err
      }
      ))
    );

  @Effect()
  // tslint:disable-next-line:no-unused-variable
  private concatActions$ = this.actions$
    .filter(a => a.type === 'CONCATENATED_ACTION')
    .concatMap(action => this.concatRequest(action.payload.concat));

  concatRequest(concat: Array<((response: Action) => Action) | Action>) {

    const successAndErrorObservable = (actionSuccessError: Action, response: any, handle: '_SUCCESS' | '_ERROR') => ({
      type: this.getActionPrefix(actionSuccessError.type) + handle,
      payload: {
        response
      }
    });

    let obs = Observable.of([]);
    concat.forEach(concatFunction => {
      obs = obs.concatMap(x => {
        const concatAction = typeof concatFunction === 'function' ? concatFunction(x[0]) : concatFunction;

        return concatAction && concatAction.payload.request ?
          concatAction.payload.request
            .concatMap(y => Observable.of(successAndErrorObservable(concatAction, y, '_SUCCESS'))
              .concatMap(z => Observable.of([z, ...x])))
            .catch(error => Observable.throw(successAndErrorObservable(concatAction, error, '_ERROR')))
          :
          Observable.of([concatAction || true, ...x]);
      });
    });

    return obs.concatMap(
      todos =>
        Observable.of(...(todos.push({ type: 'action has finished' }), todos.reverse()))
    ).catch(error => Observable.of(error, { type: 'action has finished' }));
  };
}
