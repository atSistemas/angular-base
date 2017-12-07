import { Routes } from '@angular/router';
import { MainContainer, CalculatorContainer, WeatherContainer } from './containers';

export const routes: Routes = [
  { path: '', component: MainContainer },
  { path: 'calculator', component: CalculatorContainer },
  { path: 'weather', component: WeatherContainer },
  { path: 'lazy', loadChildren: './containers/+lazy/lazy.module#LazyModule' },
  { path: '**', redirectTo: '' }
];