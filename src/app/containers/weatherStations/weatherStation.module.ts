import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AgmCoreModule } from '@agm/core';
import config from './config'
// import { RouterModule, Routes } from '@angular/router';

import { WeatherStationContainer } from './weatherStation.container';
import * as components from './components';
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
   WeatherStationContainer,
   components.MapBoxComponent
  //  LogoComponent,
  //  LinkButtonComponent
  ],
  imports: [
    CommonModule,
    AgmCoreModule.forRoot({
      apiKey: config.GOOGLE_MAPS_API_KEY
    })
    // CalculatorModule,
    // RouterModule.forChild(routes)
  ]//,
  // providers: [WeatherStationActions]
})

export class WeatherStationModule {}