import { Injectable } from '@angular/core';
import { Action } from 'base';
import { ActionTypes } from '../action-types';
import { MainService } from '../services/main-service';

@Injectable()
export class MainActions {

  constructor(
    private mainService: MainService,
  ) { }

  public mainRequest(): Action {
    return {
      type: ActionTypes.MAIN_REQUEST,
      request: this.mainService.getData()
    };
  }
}
/*
import { Action } from '@ngrx/store';
import { ActionTypes } from '../action-types';

export class MainRequest implements Action {
  readonly type = ActionTypes.MAIN_REQUEST;
  constructor(public payload: string) {}
}

export type MainActions =
| MainRequest;*/
