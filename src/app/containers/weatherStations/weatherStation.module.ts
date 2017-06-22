import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
// import { RouterModule, Routes } from '@angular/router';

import { WeatherStationContainer } from './weatherStation.container';
// import { LogoComponent } from '../../components/logo/logo.component';
// import { LinkButtonComponent } from '../../components/linkButton/linkButton.component';

// import { CalculatorModule } from '../calculator/calculator.module';

// import {WeatherStationActions} from './actions';

// export const routes: Routes = [
//   {
//     component: MainContainer,
//     path: '',
//   },
// ];

@NgModule({
  declarations: [
   WeatherStationContainer
  //  LogoComponent,
  //  LinkButtonComponent
  ],
  imports: [
    CommonModule
    // CalculatorModule,
    // RouterModule.forChild(routes)
  ]//,
  // providers: [WeatherStationActions]
})

export class WeatherStationModule {}