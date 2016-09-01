
import { Injectable } from '@angular/core';
import { NgRedux } from 'ng2-redux';
import { AppState } from '../../../../base/store';
import { actionTypes } from '../action-types';

@Injectable()
export class MainActions {

  constructor(private ngRedux: NgRedux<AppState>) {}

  load() {
    this.ngRedux.dispatch({ type: actionTypes.MAIN_CONTAINER });
  }

  gotoTo() {
    this.ngRedux.dispatch({ type: actionTypes.GOTO_MAINCONTAINER2 });
  }

  click() {
    this.ngRedux.dispatch({ type: actionTypes.CLICK });
  }
}
