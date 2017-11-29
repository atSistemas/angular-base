import { Routes } from '@angular/router';
import { MainContainer, CalculatorContainer } from './containers';

export const routes: Routes = [
   { path: '', component: MainContainer },
   { path: 'calculator', component: CalculatorContainer },
   { path: 'lazy', loadChildren: './containers/+lazy/lazy.module#LazyModule' }
];