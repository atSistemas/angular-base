import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';

import { AppState } from '../../../base/store/';
import { MainModelInterface } from '../../models';

@Component({
  selector: 'wel-come',
  templateUrl: './welcome.html',
})

export class WelcomeComponent {

  public destroyed$: Subject<any> = new Subject<any>();
  public main: MainModelInterface;
  public main$: Observable<MainModelInterface>;

  constructor(public store: Store<AppState>) {
    this.main$ = this.store.select(state => state.main.main);
    this.main$.takeUntil(this.destroyed$)
    .subscribe(main => { this.main = main; });
  }

}
