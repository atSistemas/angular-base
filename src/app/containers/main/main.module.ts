import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainContainer } from './main.container';
import { LogoComponent } from '../../components/logo/logo.component';
import { CalculatorModule } from '../calculator/calculator.module';
import { WeatherStationModule } from '../weatherStations/weatherStation.module';
import { TopBarComponent } from '../../components/topBar/topBar.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    MainContainer,
    LogoComponent,
    TopBarComponent
  ],
  imports: [
    CommonModule,
    CalculatorModule,
    WeatherStationModule,
    RouterModule
  ],
  providers: [ ],
  exports: [
    TopBarComponent,
    LogoComponent
  ]
})

export class MainModule {}