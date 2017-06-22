import { Routes } from '@angular/router';
// import { AppComponent } from './app.component';
// import { MainContainer } from './containers/main/main.container';
// import { CalculatorContainer } from './containers/calculator/calculator.container';
import  * as containers  from './containers';

export const routes: Routes = [
   { path: '', component: containers.MainContainer },
   { path: 'calculator', component: containers.CalculatorContainer },
   { path: 'weatherStations', component: containers.WeatherStationContainer }
  //  { path: 'main', loadChildren: './containers/main/main.module#MainModule?sync=true' },
  // { path: 'lazy', loadChildren: './containers/+lazy/index#LazyModule' },
];