import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'
import { NguiMapModule } from '@ngui/map'

import { WeatherActions } from './actions'
import {
  ForecastComponent,
  ForecastDetailComponent,
  MapComponent,
  StationInfoComponent,
  StationMarkerComponent
} from './components'
import { HumidityPipe, PressurePipe, TemperaturePipe } from './pipes'
import { WeatherMapService } from './services/weather-map.service'
import { WeatherContainer } from './weather.container'

export const GoogleMapsModule = NguiMapModule.forRoot({
  apiUrl: 'https://maps.google.com/maps/api/js?key=AIzaSyAGzFY_wPUFAkPgEeHw0zXgMZxP5p4sj64'
})

@NgModule({
  declarations: [
    WeatherContainer,
    // Components
    ForecastComponent,
    ForecastDetailComponent,
    MapComponent,
    StationInfoComponent,
    StationMarkerComponent,
    // Pipes
    HumidityPipe,
    PressurePipe,
    TemperaturePipe
  ],
  imports: [
    CommonModule,
    GoogleMapsModule
  ],
  providers: [
    WeatherActions,
    WeatherMapService
  ]
})

export class WeatherModule {}
