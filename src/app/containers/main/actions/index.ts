import { Injectable } from '@angular/core';
import { Response } from '@angular/http';
import { Action } from '../../../../base/interfaces/action';
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

  public mainSucess(res: Response): Action {
    return {
      type: ActionTypes.MAIN_SUCCESS,
      payload: res
    };
  }

  public mainError(err: Error): Action {
    return {
      type: ActionTypes.MAIN_ERROR,
      payload: err
    };
  }

};
