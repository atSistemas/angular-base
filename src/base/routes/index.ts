import { Routes } from '@angular/router';
import { WelcomeComponent } from '../components/welcome';

export const routes: Routes = [
  { path: '', component: WelcomeComponent, pathMatch: 'full'},
  { path: 'main', loadChildren: './containers/main/index#MainModule?sync=true' },
  { path: 'lazy', loadChildren: './containers/+lazy/index#LazyModule' },
];
