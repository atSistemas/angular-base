import { SharedModule } from '../../shared/shared.module';
import { NgModule } from '@angular/core';
import { LoginComponent } from './components/login/login.component';

@NgModule({
    declarations: [
        LoginComponent
    ],
    imports: [
        SharedModule
    ]
})
export class AccountModule { }
