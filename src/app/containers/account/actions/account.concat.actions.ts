import { User } from '../models/user.model';
import { concatActions } from 'base/actions/utils';
import { Injectable } from '@angular/core';
import { AccountActions } from './account.actions';

@Injectable()
export class AccountConcatActions {

  constructor(private accountActions: AccountActions) { }

  loginRequestAndNavigate = (user: User) => concatActions(
    this.accountActions.loginRequest(user),
    response => (localStorage.setItem('access_token', response.payload.response.AccessToken), this.accountActions.getCurrentUser()),
    //go('estimatelist')
  );

  logoutRequestAndNavigate = () => concatActions(
    this.accountActions.logout(),
    //go('account/login')
  );


}

