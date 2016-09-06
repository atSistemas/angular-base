import { Component, ViewEncapsulation, ChangeDetectionStrategy, Input, OnInit} from '@angular/core';
import { AsyncPipe } from '@angular/common';
import { Observable } from 'rxjs/Observable';
import { DevToolsExtension, NgRedux, select } from 'ng2-redux';
import { NgReduxRouter } from 'ng2-redux-router';

import { MainActions } from './actions';
import { MainService } from './services/main.service';
import { MainModelInterface, MainModel, InitialState } from './models';

export { MainDisplay } from './components';

@Component({
  selector: 'main-container',
  providers: [MainActions, MainService],
  templateUrl: './main.html'
})

export class MainContainer implements OnInit{
  @select(state=>state.main) main$:Observable<any>
  @select(state=>state.main) main:Observable<any>
  //@select(['main','main']) main$;


  constructor(
    private action: MainActions,
    private service: MainService
  ) {}

  ngOnInit(): void {
    this.action.mainRequest();
  }
}
