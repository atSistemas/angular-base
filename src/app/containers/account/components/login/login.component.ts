import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

import { Store } from '@ngrx/store';

@Component({
	selector: 'account-login',
	providers: [FormBuilder],
	templateUrl: './login.component.html',
	styleUrls: ['./login.component.css']
})
export class LoginComponent {

	formularioLogin: FormGroup;
	user = { client: '', username: '', password: '' };

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
			user: [''],
			password: ['']
		});
	}

	doLogin() {
		// this.store.dispatch(this.accountConcatActions.loginRequestAndNavigate(this.user));
	}
}
