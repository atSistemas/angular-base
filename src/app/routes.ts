import { Routes } from '@angular/router';
import { LoginComponent } from './containers/account/components/login/login.component';

export const routes: Routes = [
  { path: '', component: LoginComponent, pathMatch: 'full' },
  { path: 'main', loadChildren: './containers/main/index#MainModule?sync=true' },
  { path: 'lazy', loadChildren: './containers/+lazy/index#LazyModule' },
];
