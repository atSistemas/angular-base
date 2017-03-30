import { Component } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { Store, State } from 'base';
import { MainModel } from '../../models';

@Component({
  selector: 'wel-come',
  templateUrl: './welcome.html',
})

export class WelcomeComponent {

  public data$: Observable<MainModel>;

  constructor(public store: Store<State>) {
    this.data$ = this.store.select(state => state.main);
  }

}
