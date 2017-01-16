import { Routes } from '@angular/router';
import { WelcomeComponent } from './welcome.component';
import { ENV } from '../base/shared/Env';

export const routes: Routes = [
  { path: '', component: WelcomeComponent, pathMatch: 'full'},
  { path: 'main', loadChildren: './containers/main/index#MainModule?sync=true' },
  { path: 'lazy', loadChildren: './containers/+lazy/index#LazyModule' }
];
