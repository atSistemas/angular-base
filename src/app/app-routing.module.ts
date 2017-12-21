import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { MainContainer, CalculatorContainer, WeatherContainer } from './containers';
//import { WrapperLazyModule } from './containers/+lazy/lazy.module';

@NgModule({
  imports: [
    RouterModule.forRoot([
      { path: '', component: MainContainer },
      { path: 'calculator', component: CalculatorContainer },
      { path: 'weather', component: WeatherContainer },
      { path: 'lazy', loadChildren: './containers/+lazy/lazy.module#LazyModule' },
      { path: '**', redirectTo: '' }
    ])
  ],
  exports: [ RouterModule ]
})

export class AppRoutingModule { }