import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'account-login',
  providers: [FormBuilder],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  loginform: FormGroup;

  constructor(
    private formBuilder: FormBuilder
    // private accountConcatActions: AccountConcatActions,
    // private store: Store<AppState>
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
    console.log(this.loginform.value);
    // this.store.dispatch(this.accountConcatActions.loginRequestAndNavigate(this.user));
  }

}
