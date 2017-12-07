import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WeatherContainer } from './weather.container';

@NgModule({
  declarations: [
    WeatherContainer
  ],
  imports: [
    CommonModule,
  ],
  providers: [ ]
})

export class WeatherModule {}