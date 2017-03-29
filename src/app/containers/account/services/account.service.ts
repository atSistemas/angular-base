import { BaseService } from '../../../shared/services/base.service';
import { Injectable } from '@angular/core';

import { User } from '../models/user.model';


@Injectable()
export class AccountService {
  constructor(private http: BaseService) { }

  public login(user: User) {
    return this.http.post('auth/token',
      `client=${user.client}&username=${user.username}&password=${user.password}`,
      'application/x-www-form-urlencoded');
  }

  logout() {
    return this.http.get('account/logout');
  }

  getCurrentUser() {
    return this.http.get('account/currentuser');
    // .map(userResponse => new User(userResponse));
  }


  /*getBillingCodeList(userId: number) {
      return this.http.get('estimate/billingcodelist', { userId }).map(
          (billingCodeList: BillingCode[]) => billingCodeList.map(item => new BillingCode(item))
      );
  }*/
}
