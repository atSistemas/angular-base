import { Component, ViewEncapsulation } from '@angular/core';
import { AsyncPipe } from '@angular/common';
import { Observable } from 'rxjs/Observable';
import { DevToolsExtension, NgRedux, select } from 'ng2-redux';
import { NgReduxRouter } from 'ng2-redux-router';
import { createEpicMiddleware } from 'redux-observable';

import { MainService2 } from './services/main2.service';

@Component({
  selector: 'main-container2',
  templateUrl: './main.html',
  providers: [MainService2],
})

export class MainContainer2 {
  private devTools: DevToolsExtension;
  private ngReduxRouter: NgReduxRouter;

  public people: Object[];

  constructor(
      private service: MainService2
  ) { }

  ngOnInit(): void {
    let people = [];

    this.service.getMain()
    .then((res) => {
      this.people = res;
    });
  }
}
