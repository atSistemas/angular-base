import { Injectable } from '@angular/core';
import { AppState } from '../../../../base';
import { NgRedux } from 'ng2-redux';
import { Types } from '../types';

console.log(Injectable);
console.log(AppState);
console.log(NgRedux);
console.log(Types);

@Injectable()
export class MainActions {

  constructor(private ngRedux: NgRedux<AppState>) {}

  load() {
    this.ngRedux.dispatch({ type: Types.MAIN_CONTAINER });
  }

  gotoTo() {
    this.ngRedux.dispatch({ type: Types.GOTO_MAINCONTAINER2 });
  }

  click() {
    this.ngRedux.dispatch({ type: Types.CLICK });
  }
}
