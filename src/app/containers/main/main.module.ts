import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { MainContainer } from './main.container';

import { LogoComponent } from '../../components/logo/logo.component';
import { CalculatorModule } from '../calculator/calculator.module';
import { WeatherModule } from '../weather/weather.module';
import { TopBarComponent } from '../../components/topBar/topBar.component';

import { MainActions } from './actions';
import { MainService } from './services';

@NgModule({
  declarations: [
    MainContainer,
    LogoComponent,
    TopBarComponent
  ],
  imports: [
    CommonModule,
    CalculatorModule,
    WeatherModule,
    RouterModule
  ],
  providers: [
    MainActions,
    MainService
  ],
  exports: [
    TopBarComponent,
    LogoComponent
  ]
})

export class MainModule {}