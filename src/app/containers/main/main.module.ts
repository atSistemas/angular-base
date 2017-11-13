import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainContainer } from './main.container';
import { LogoComponent } from '../../components/logo/logo.component';
import { LinkButtonComponent } from '../../components/linkButton/linkButton.component';
import { CalculatorModule } from '../calculator/calculator.module';
import { WeatherStationModule } from '../weatherStations/weatherStation.module';

@NgModule({
  declarations: [
    MainContainer,
    LogoComponent,
    LinkButtonComponent
  ],
  imports: [
    CommonModule,
    CalculatorModule,
    WeatherStationModule
  ],
  providers: [ ]
})

export class MainModule {}