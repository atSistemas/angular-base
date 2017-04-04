import { Routes } from '@angular/router';
import { WelcomeComponent } from '../base/components/welcome';

export const routes: Routes = [
  { path: '', component: WelcomeComponent },
  { path: 'main', loadChildren: './containers/main/index#MainModule?sync=true' },
  { path: 'lazy', loadChildren: './containers/+lazy/index#LazyModule' },
];