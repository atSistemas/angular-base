import { UserModel } from '../models/user.model';
import { concatActions } from 'base/actions/utils';
import { Injectable } from '@angular/core';
import { AccountActions } from './account.actions';
import { go } from '@ngrx/router-store';

@Injectable()
export class AccountConcatActions {

  constructor(private accountActions: AccountActions) { }

  loginRequestAndNavigate = (user: UserModel) => concatActions(
    this.accountActions.loginRequest(user),
    response => (localStorage.setItem('access_token', response.payload.response.AccessToken),
      this.accountActions.getCurrentUser()),
    go('estimates')
  );

  logoutRequestAndNavigate = () => concatActions(
    this.accountActions.logout(),
    //go('account/login')
  );


}

