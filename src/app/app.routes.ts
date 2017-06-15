import { Routes } from '@angular/router';
// import { AppComponent } from './app.component';
import { MainContainer } from './containers/main/main.container';
import { CalculatorContainer } from './containers/calculator/calculator.container';

export const routes: Routes = [
   { path: '', component: MainContainer },
   { path: 'calculator', component: CalculatorContainer },
  //  { path: 'main', loadChildren: './containers/main/main.module#MainModule?sync=true' },
  // { path: 'lazy', loadChildren: './containers/+lazy/index#LazyModule' },
];