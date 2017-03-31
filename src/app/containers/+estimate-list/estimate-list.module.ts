import { EstimateListToolbarComponent } from './components/estimate-list-toolbar/estimate-list-toolbar.component';
import { EstimateListItemsComponent } from './components/estimate-list-items/estimate-list-items.component';
import { SharedModule } from '../../shared/shared.module';
import { EstimateListComponent } from './components/estimate-list/estimate-list.component';

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

export const routes: Routes = [
  {
    path: '', component: EstimateListComponent
  }
];

@NgModule({
  imports: [
    SharedModule,
    RouterModule.forChild(routes)
  ],
  declarations: [
    EstimateListComponent,
    EstimateListItemsComponent,
    EstimateListToolbarComponent
  ],
})
export class EstimateListModule { }