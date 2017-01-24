import { Component } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { LazyActions } from './actions';

@Component({
  selector: 'lazy-container',
  templateUrl: './lazy.html',
})
export class LazyContainer {

  public people: Object[];

  constructor() {
    // this.actions.lazyRequest();
  }
}
