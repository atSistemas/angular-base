import { Injectable } from '@angular/core';
// import { BaseService } from 'base/shared/BaseService'; // Debería estar aquí
import { BaseService } from '../../../shared/services/base.service';
import { Observable } from 'rxjs/Observable';


@Injectable()
export class AccountService {

  constructor(private http: BaseService) { }

  // // public login(user: User): Observable<any> {
  // public login(user): Observable<any> {
  //   return this.http.post('auth/token',
  //     `client=${user.client}&username=${user.username}&password=${user.password}`,
  //     'application/x-www-form-urlencoded');
  // }

  // logout(): Observable<any> {
  //   return this.http.get('account/logout');
  // }

  // getCurrentUser(): Observable<any> {
  //   return this.http.get('account/currentuser');
  // }

  // getBillingCodeList(userId: number): Observable<any> {
  //   // return this.http.get('estimate/billingcodelist', { userId });
  //   return this.http.get('estimate/billingcodelist');
  // }


}
