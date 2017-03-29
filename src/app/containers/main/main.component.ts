import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import { Component } from '@angular/core';

import { AppState } from 'base/store/';
import { MainActions } from './actions';
import { MainModel } from './models';

@Component({
  selector: 'main-container',
  templateUrl: './main.html',
})

export class MainContainer {

  public data$: Observable<MainModel>;

  constructor(
      public store: Store<AppState>,
      public mainActions: MainActions
  ) {
    this.data$ = this.store.select(state => state.main);
    this.store.dispatch(this.mainActions.mainRequest());
  }

}
