import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';

import { AppState } from '../../../base/store/';
import { MainModelInterface } from './models';
import { MainActions } from './actions';

@Component({
  selector: 'main-container',
  templateUrl: './main.html',
})

export class MainContainer {

  public destroyed$: Subject<any> = new Subject<any>();
  public main: MainModelInterface;
  public main$: Observable<MainModelInterface>;

  constructor(
      public store: Store<AppState>,
      public mainActions: MainActions
    ) {
    this.main$ = this.store.select((state) => state.main.main);
    this.main$.takeUntil(this.destroyed$)
    .subscribe(main => { this.main = main; });
    this.store.dispatch(this.mainActions.mainRequest());
  }

}
