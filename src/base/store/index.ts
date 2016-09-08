import { Injectable } from '@angular/core';
import { DevToolsExtension, NgRedux, select } from 'ng2-redux';
import { RootReducer } from '../reducers';
import * as createLogger from 'redux-logger';
import { MainModelInterface } from '../models';
import { Observable } from 'rxjs/Observable';
import { Epic, createEpicMiddleware, combineEpics, ActionsObservable } from 'redux-observable';
import { Action, createStore, applyMiddleware } from 'redux';
import { MainService } from '../../app/containers/main/services/main-service';
import { LazyService } from '../../app/containers/+lazy/services/lazy-service';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

const middleware = [];

//const epicMiddleware = createEpicMiddleware(RootEpic);

export interface AppState {
  main?: MainModelInterface;
};

@Injectable()
export class Store {
  private epics: Observable<Action>[] = [this.MainServiceEpic.getData];
  public epic$: BehaviorSubject<Epic>;
  constructor(private ngRedux: NgRedux<AppState>,
    private MainServiceEpic: MainService,
    private LazyServiceEpic: LazyService) { }

  configureStore() {

    middleware.push(
      createLogger({
        level: 'info',
        collapsed: true,
      }));

    this.epic$ = new BehaviorSubject(combineEpics(...this.epics))

    const rootEpic = (action$: ActionsObservable, store): Observable<Action> =>
      this.epic$.mergeMap(epic =>
        epic(action$, store)
      );

    middleware.push(createEpicMiddleware(rootEpic));

    this.ngRedux.configureStore(RootReducer, {}, middleware);
  }
}
