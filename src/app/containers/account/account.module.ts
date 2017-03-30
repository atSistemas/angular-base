import { AccountService } from './services/account.service';
import { AccountActions } from './actions/account.actions';
import { AccountConcatActions } from './actions/account.concat.actions';
import { SharedModule } from '../../shared/shared.module';
import { NgModule } from '@angular/core';
import { LoginComponent } from './components/login/login.component';
import { FormBuilder } from '@angular/forms';

@NgModule({
  declarations: [
    LoginComponent
  ],
  imports: [
    SharedModule
  ],
  providers: [
    FormBuilder,
    AccountService,
    AccountActions,
    AccountConcatActions
  ]
})
export class AccountModule { }
