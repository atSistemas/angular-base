import { Component } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { DevToolsExtension, NgRedux, select } from 'ng2-redux';
import { NgReduxRouter } from 'ng2-redux-router';

import { LazyService } from './services/lazy-service';

@Component({
  selector: 'lazy-container',
  templateUrl: './lazy.html',
  providers: [LazyService],
})

export class LazyContainer {
  private devTools: DevToolsExtension;
  private ngReduxRouter: NgReduxRouter;

  public people: Object[];

  constructor() { }

  ngOnInit(): void {
  }
}
