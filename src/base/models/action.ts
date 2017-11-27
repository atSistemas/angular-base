import { Action as NgRxAction } from '@ngrx/store';

export interface Action extends NgRxAction {
  payload?: { [key: string]: any };
  request?: any;
}
