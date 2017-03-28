import { Injectable } from '@angular/core';

@Injectable()
export class LazyActions {

  constructor() {
    //
  }

  public lazyRequest() {
    console.log('lazy request');
    // this.ngRedux.dispatch({ type: actionTypes.LAZY_REQUEST });
  }
}
