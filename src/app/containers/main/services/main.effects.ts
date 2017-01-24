import { Injectable } from '@angular/core';
import { Actions, Effect } from '@ngrx/effects';
import { Observable } from 'rxjs/Observable';

import { ActionTypes } from '../action-types';
import { MainActions } from '../actions';
import { AppState } from '../../../../base/reducers';
import { MainService } from './main-service';

@Injectable()
export class MainEffects {

  constructor(
    private actions$: Actions,
    private mainService: MainService,
    private mainActions: MainActions
  ) { }
  @Effect()
    private main$ = this.actions$
    .ofType(ActionTypes.MAIN_REQUEST)
    .map(action => action.payload)
    .switchMap(() => this.mainService.getData()
      .mergeMap((res: any) => Observable.of(
        this.mainActions.mainSucess(res)
        )
      )
      .catch((err) => Observable.of(
        this.mainActions.mainError(err)
      ))
    );
}
