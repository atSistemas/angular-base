import { AppState } from '../../../../../base/store';
import { Store } from '@ngrx/store';
import { AccountConcatActions } from '../../actions/account.concat.actions';
import { UserModel } from '../../models/user.model';
import { Component } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';

@Component({
  selector: 'account-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  loginform: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private accountConcatActions: AccountConcatActions,
    private store: Store<AppState>
  ) {
  }

  ngOnInit() {
    this.loginform = this.formBuilder.group({
      client: ['', [Validators.required]],
      username: ['', [Validators.required]],
      password: ['', [Validators.required]]
    });
  }

  doLogin() {
    this.store.dispatch(this.accountConcatActions.loginRequestAndNavigate(this.loginform.value as UserModel));
  }

}
