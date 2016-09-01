import { Component, ViewEncapsulation, ChangeDetectionStrategy, Input } from '@angular/core';
import { AsyncPipe } from '@angular/common';
import { Observable } from 'rxjs/Observable';
import { DevToolsExtension, NgRedux, select } from 'ng2-redux';
import { NgReduxRouter } from 'ng2-redux-router';
import { createEpicMiddleware } from 'redux-observable';

import { MainActions } from './actions';
import { MainService } from './services/main.service';
import { MainTypes, MainModel, InitialState } from './models';
export { MainDisplay } from './components';

@Component({
  selector: 'main-container',
  providers: [MainActions, MainService],
  templateUrl: './main.html'
})

export class MainContainer {
  @select() main$: Observable<MainTypes>;

  public friends: Object[];
  public tags: string[];

  constructor(
    private action: MainActions,
    private service: MainService
  ) { }

  ngOnInit(): void {
    let friends = [];
    let tags = [];

    this.service.getMain()
    .then((res) => {
      res.forEach((data) => {
        friends = friends.concat(data.friends);
        tags = tags.concat(data.tags);
      });

      this.friends = friends;
      this.tags = tags;
    });
  }
}
