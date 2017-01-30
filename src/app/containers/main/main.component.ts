import { Component, OnInit, OnDestroy } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import { AppState } from '../../../base/store/';
import { MainModelInterface } from './models';
import { MainActions } from './actions';

@Component({
  selector: 'main-container',
  templateUrl: './main.html',
})

export class MainContainer {

  public data$: Observable<MainModelInterface>;

  constructor(
      public store: Store<AppState>,
      public mainActions: MainActions
  ) {
    this.data$ = this.store.select(state => state.main.main)
    this.store.dispatch(this.mainActions.mainRequest());
  }

}
