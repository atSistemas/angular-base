import { Component, ViewEncapsulation } from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router';
import { AsyncPipe } from '@angular/common';
import { Observable } from 'rxjs/Observable';
import { DevToolsExtension, NgRedux, select } from 'ng2-redux';
import { NgReduxRouter } from 'ng2-redux-router';
import { createEpicMiddleware } from 'redux-observable';
import { MainActions } from './actions';

@Component({
  selector: 'main-container',
  providers: [ MainActions ],
  pipes: [ AsyncPipe ],
  template: require('./main.html')
})
export class MainContainer {

  constructor(private action: MainActions) {

  }

}
