import { Component, ViewEncapsulation } from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router';
import { AsyncPipe } from '@angular/common';
import { Observable } from 'rxjs/Observable';
import { DevToolsExtension, NgRedux, select } from 'ng2-redux';
import { NgReduxRouter } from 'ng2-redux-router';
import { createEpicMiddleware } from 'redux-observable';

@Component({
  selector: 'main-container2',
  templateUrl: './src/app/containers/main2/main.html',
  pipes: [ AsyncPipe ]
})
export class MainContainer2 {
  private devTools: DevToolsExtension;
  private ngReduxRouter: NgReduxRouter;
}
