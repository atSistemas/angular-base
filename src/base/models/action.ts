import { Action as NgRxAction } from '@ngrx/store';

export interface Action {
  type: string;
  payload?: { [key: string]: any };
  request?: any;
}
