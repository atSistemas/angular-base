import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { MainContainer } from './main.container';

import { LogoComponent } from '../../components/logo/logo.component';

import { MainActions } from './actions';
import { MainService } from './services';

@NgModule({
  declarations: [
    MainContainer,
    LogoComponent
  ],
  imports: [
    CommonModule
  ],
  providers: [
    MainActions,
    MainService
  ]
})

export class MainModule {}