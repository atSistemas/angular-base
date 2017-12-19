import { Routes } from '@angular/router';
import { MainContainer, CalculatorContainer, WeatherContainer } from './containers';
import { WrapperLazyModule } from './containers/+lazy/lazy.module';


export const routes: Routes = [
  { path: '', component: MainContainer },
  { path: 'calculator', component: CalculatorContainer },
  { path: 'weather', component: WeatherContainer },
  { path: 'lazy', loadChildren: WrapperLazyModule },
  { path: '**', redirectTo: '' }
];