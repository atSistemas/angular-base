import { User } from '../models/user.model';
import { Injectable } from '@angular/core';
import { Action } from '@ngrx/store';
import { AccountService } from '../services/account.service';
import { AccountActionTypes } from '../action-types';


@Injectable()
export class AccountActions {

  constructor(private accountService: AccountService) { }

  loginRequest(user: User): Action {
    return {
      type: AccountActionTypes.LOGIN_REQUEST,
      payload: {
        request: this.accountService.login(user),
      }
    };
  }

  logout() {
    return {
      type: AccountActionTypes.LOGOUT_REQUEST,
      payload: {
        request: this.accountService.logout(),
      }
    };
  }

  getCurrentUser() {
    return {
      type: AccountActionTypes.GET_CURRENTUSER_REQUEST,
      payload: {
        request: this.accountService.getCurrentUser(),
      }
    };
  }


  /*getBillingCodeList(userId: number): Action {
      return {
          type: BillingCodeListActiontypes.GET_BILLINGCODELIST_REQUEST,
          payload: {
              request: this.accountService.getBillingCodeList(userId)
          }
      };
  }*/

};
