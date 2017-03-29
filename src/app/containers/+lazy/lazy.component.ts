import { Component } from '@angular/core';

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
