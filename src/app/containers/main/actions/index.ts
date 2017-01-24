import { Injectable } from '@angular/core';
import { Response } from '@angular/http';
import { Action } from '@ngrx/store';
import { ActionTypes } from '../action-types';

@Injectable()
export class MainActions {

  public login(res: Response): Action {
    return {
      type: ActionTypes.LOGIN,
      payload: res
    };
  }
};
  /*
  constructor(private ngRedux: NgRedux<AppState>) {}

  public load() {
    this.ngRedux.dispatch({ type: actionTypes.MAIN_CONTAINER });
  }

  public lazy() {
    this.ngRedux.dispatch({ type: actionTypes.LAZY_CONTAINER });
  }

  public click() {
    this.ngRedux.dispatch({ type: actionTypes.CLICK });
  }

  public mainRequest() {
    this.ngRedux.dispatch({ type: actionTypes.MAIN_REQUEST });
  }
}*/
