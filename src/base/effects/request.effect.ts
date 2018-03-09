import { Injectable } from '@angular/core'
import { Actions, Effect } from '@ngrx/effects'
import { IAction, resolveRequestAction } from 'base'
import { Observable } from 'rxjs/Observable'

@Injectable()
export class RequestEffect {
  @Effect() public main$: Observable<IAction> = this.actions$
  .filter((action: IAction) => action.request)
  .concatMap((action: IAction) => action.request
    .mergeMap((res) => resolveRequestAction(action, res, 'SUCCESS'))
    .catch((err) => resolveRequestAction(action, err, 'ERROR'))
  )

  constructor (
    private actions$: Actions
  ) { }
}
