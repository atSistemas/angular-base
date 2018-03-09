import { NgModule } from '@angular/core'
import { RouterModule } from '@angular/router'

import { CalculatorContainer } from './containers/calculator/calculator.container'
import { HomeContainer } from './containers/home/home.container'
import { WeatherContainer } from './containers/weather/weather.container'

@NgModule({
  exports: [ RouterModule ],
  imports: [
    RouterModule.forRoot([
      { path: '', component: HomeContainer },
      { path: 'calculator', component: CalculatorContainer },
      { path: 'weather', component: WeatherContainer },
      { path: 'lazy', loadChildren: './containers/+lazy/lazy.module#LazyModule' },
      { path: '**', redirectTo: '' }
    ])
  ]
})

export class AppRoutingModule { }
