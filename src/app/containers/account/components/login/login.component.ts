
import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'account-login',
  providers: [FormBuilder],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  formularioLogin: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    // private globalValidator: GlobalValidator,
    // private accountConcatActions: AccountConcatActions,
    // private store: Store<AppState>
  ) {
  }

  ngOnInit() {
    this.formularioLogin = this.formBuilder.group({
      client: [''],
      username: [''],
      password: ['']
    });
  }

  doLogin() {
    // this.store.dispatch(this.accountConcatActions.loginRequestAndNavigate(this.user));
  }

}
