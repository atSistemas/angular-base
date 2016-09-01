import { Injectable } from '@angular/core';
import { NgRedux } from 'ng2-redux';
import { AppState } from '../../../../base/store';
import { actionTypes } from '../action-types';

@Injectable()
export class MainActions {

  constructor(private ngRedux: NgRedux<AppState>) {
    this.dispatch = this.ngRedux.dispatch;
  }

  load() {
    this.dispatch({ type: actionTypes.MAIN_CONTAINER });
  }

  gotoTo() {
    this.dispatch({ type: actionTypes.GOTO_MAINCONTAINER2 });
  }

  click() {
    this.dispatch({ type: actionTypes.CLICK });
  }

  request(){
    this.dispatch({ type: actionTypes.MAIN_REQUEST });
  }

  sucess(){
    this.dispatch({ type: actionTypes.MAIN_SUCCESS });
  }
}
