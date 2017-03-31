import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MainHeaderComponent, HeaderComponent, MenuBarComponent } from '../../components';
import { EstimateBaseComponent } from './components/estimate-base/estimate-base.component';
import { SharedModule } from '../../shared/shared.module';

export const routes: Routes = [
  {
    path: '', component: EstimateBaseComponent, children: [
      { path: '', loadChildren: '../+estimate-list/estimate-list.module#EstimateListModule' },
      /*{ path: 'create', loadChildren: './+estimate-process/estimate-process.module#EstimateProcessModule' },
      { path: 'info/:id', loadChildren: './+estimate-process/estimate-process.module#EstimateProcessModule' },*/
    ]
  }
];


@NgModule({
  declarations: [
    EstimateBaseComponent,
    MainHeaderComponent,
    HeaderComponent,
    MenuBarComponent
  ],
  imports: [
    SharedModule,
    RouterModule.forChild(routes)
  ],
  providers: [
  ]
})
export class EstimateModule { }
