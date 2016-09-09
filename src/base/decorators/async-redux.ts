import { Action } from 'redux';
//  FIXME: This won't work; we need a callable method to get the reducers properly'
import { BaseReducers } from '../../base';

export interface AsyncReduxOptions {
    reducers: { [index: string]: Action },
    epics: { [index: string]: string[] }
}

function AsyncRedux(options: AsyncReduxOptions) {
    return function (target: Function) {

    }
}

export default AsyncRedux;

/*
export default class LazyContainerModule {
  public reducers: any;
  public epics: Observable<Action>[] = [];
  constructor(private ngRedux: NgRedux<AppState>, private store: Store, private actions: LazyActions, lazyService: LazyService) {
    this.epics.push(lazyService.getData);
    this.init();
  }
  init(): void {
    this.reducers = {
      lazy: LazyReducer
    };
    this.replaceReducers()
    this.actions.lazyRequest();
  }
  replaceReducers() {
    this.ngRedux.replaceReducer(combineReducers<AppState>(Object.assign(BaseReducers, this.reducers)));
    this.epics.forEach((epic) => this.store.epic$.next(epic));
  }
}
*/