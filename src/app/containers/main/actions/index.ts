import { Action } from 'redux';
import { Injectable } from '@angular/core';
import { NgRedux } from 'ng2-redux';
import { AppState } from 'base/store';
import { actionTypes } from '../action-types';

//FIXME MOVE TO CORRECT PLACE
export interface IPayloadAction extends Action {
  payload?: any;
}

@Injectable()
export class MainActions {

  constructor(private ngRedux: NgRedux<AppState>) {}

  load() {
    this.ngRedux.dispatch({ type: actionTypes.MAIN_CONTAINER });
  }
  
  lazy() {
    this.ngRedux.dispatch({ type: actionTypes.LAZY_CONTAINER });
  }

  click() {
    this.ngRedux.dispatch({ type: actionTypes.CLICK });
  }

  mainRequest(){
    this.ngRedux.dispatch({ type: actionTypes.MAIN_REQUEST });
  }
}
