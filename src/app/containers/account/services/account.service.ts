import { Injectable } from '@angular/core';
// import { BaseService } from 'base/shared/BaseService'; // Debería estar aquí
import { BaseService } from '../../../shared/services/base.service';


@Injectable()
export class AccountService {

  constructor(private http: BaseService) { }

  login(user) {
    return this.http.post('auth/token',
      `client=${user.client}&username=${user.username}&password=${user.password}`,
      'application/x-www-form-urlencoded');
  }

  logout() {
    return this.http.get('account/logout');
  }

  getCurrentUser() {
    return this.http.get('account/currentuser');
  }

  getBillingCodeList(userId: number) {
    return this.http.get('estimate/billingcodelist', { userId });
    // return this.http.get('estimate/billingcodelist');
  }


}
