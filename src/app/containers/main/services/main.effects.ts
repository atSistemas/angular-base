import { Injectable } from '@angular/core';
import { Actions, Effect } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';

import { ActionTypes } from '../action-types';
import { MainActions } from '../actions';
import { AppState } from '../../../../base/reducers';
import { MainService } from './main-service';

@Injectable()

export class MainEffects {

  constructor(
    private actions$: Actions,
    private store: Store<AppState>,
    private mainService: MainService,
    private mainActions: MainActions
  ) { }

  @Effect() private login$ = this.actions$
    .ofType(ActionTypes.LOGIN)
    .map(action => action.payload)
    .switchMap(() => this.mainService.getData()
      .mergeMap((res: any) => Observable.of(
        this.mainActions.login(res)
        )
      )
      .catch((err) => Observable.of(
        console.log('errrrr')
      ))
    );
}
