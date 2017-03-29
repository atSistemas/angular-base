import { SharedModule } from '../../shared/shared.module';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './components/login/login.component';
import { MaterialModule } from '@angular/material';

@NgModule({
    declarations: [
        LoginComponent
    ],
    imports: [
        SharedModule
    ]
})
export class AccountModule { }
