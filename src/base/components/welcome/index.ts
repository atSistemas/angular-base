import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';

import { AppState } from '../../../base/store/';
import { MainModelInterface } from '../../models';

@Component({
  selector: 'wel-come',
  templateUrl: './welcome.html',
})

export class WelcomeComponent {

  public data$: Observable<MainModelInterface>;

  constructor(public store: Store<AppState>) {
    this.data$ = this.store.select(state => state.main.main);
  }

}
