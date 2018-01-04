import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { HomeContainer } from './home.container';
import { LogoComponent } from './components/logo/logo.component';

@NgModule({
  declarations: [
    HomeContainer,
    LogoComponent
  ],
  imports: [
    CommonModule
  ]
})

export class HomeModule {}