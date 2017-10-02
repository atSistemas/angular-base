import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AgmCoreModule } from '@agm/core';
import config from './config'
// import { RouterModule, Routes } from '@angular/router';

import { WeatherStationContainer } from './weatherStation.container';

import * as components from './components';
import {  } from './components/weatherStationDetails/weatherStationDetails.component';
// import * as components from './components';
// import { LogoComponent } from '../../components/logo/logo.component';
// import { LinkButtonComponent } from '../../components/linkButton/linkButton.component';

// import { CalculatorModule } from '../calculator/calculator.module';

import {WeatherStationActions} from './actions';
import {WeatherStationService} from './services';


// export const routes: Routes = [
//   {
//     component: MainContainer,
//     path: '',
//   },
// ];

@NgModule({
  declarations: [
   WeatherStationContainer,
   components.MapBoxComponent,
   components.WeatherStationDetailsComponent //,
  //  components.ForecastDetailComponent,
  //  components.ForecastDetailItemComponent
   
  //  LogoComponent,
  //  LinkButtonComponent
  ],
  imports: [
    CommonModule,
    AgmCoreModule.forRoot({
      apiKey: config.GOOGLE_MAPS_API_KEY
    })
  ],
  providers: [
    WeatherStationService,
    WeatherStationActions
  ]
})

export class WeatherStationModule {}