import { Routes } from '@angular/router';
import { LoginComponent } from './containers/account/components/login/login.component';

export const routes: Routes = [
  { path: '', component: LoginComponent, pathMatch: 'full' },
  { path: 'estimates', loadChildren: './containers/+estimate/estimate.module#EstimateModule' },
];


//  { path: '/estimates', loadChildren: './containers/+lazy/index#LazyModule' },

/*
 { path: '', loadChildren: './containers/+lazy/index#LazyModule' },
{ path: 'create', loadChildren: './containers/+lazy/index#LazyModule' },
*/