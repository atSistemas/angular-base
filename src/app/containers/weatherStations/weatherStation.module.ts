import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AgmCoreModule } from '@agm/core';
import { config } from './config';
import { WeatherStationContainer } from './weatherStation.container';
import * as components from './components';
import { WeatherStationActions } from './actions';
import { WeatherStationService } from './services';

@NgModule({
  declarations: [
    WeatherStationContainer,
    components.MapBoxComponent,
    components.WeatherStationDetailsComponent
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