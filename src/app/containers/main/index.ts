import { Component, ViewEncapsulation } from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router';
import { AsyncPipe } from '@angular/common';
import { Observable } from 'rxjs/Observable';
import { DevToolsExtension, NgRedux, select } from 'ng2-redux';
import { NgReduxRouter } from 'ng2-redux-router';
import { createEpicMiddleware } from 'redux-observable';

@Component({
  selector: 'main-container',
  template: `<h1>Main container!</h1>`,
  pipes: [ AsyncPipe ]
})
export class MainContainer {
  private devTools: DevToolsExtension;
  private ngReduxRouter: NgReduxRouter;
}
