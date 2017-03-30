import { getEstimateList, getIsSelected } from '../../selectors';
import { Estimate } from '../../../models/estimate.model';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import { AppState } from 'base/store';


@Component({
  selector: 'estimatelist',
  templateUrl: './estimate-list.component.html',
  styleUrls: ['./estimate-list.component.css'],
})

export class EstimateListComponent {

  start = 0;
  step = 50;


  estimateList$: Observable<Estimate[]>;
  isEstimateSelected$: Observable<boolean>;
  selectedEstimate: Estimate;
  loggedUser$ = this.store.select(app => app.account.user);

  constructor(
    private router: Router,
    private store: Store<AppState>,
    // private estimateListActions: EstimateListActions,
    // private estimateProcessConcatenatedActions: EstimateProcessConcatenatedActions
  ) { }

  ngOnInit() {

    this.estimateList$ = this.store.select(getEstimateList);
    this.isEstimateSelected$ = this.store.select(getIsSelected);
    this.getEstimateList();
  }

  onSelectEstimate(estimate: Estimate) {
    this.selectedEstimate = estimate;
    // this.store.dispatch(this.estimateListActions.selectEstimate(estimate));
  }

  onScrollDown() {
    this.step += 50;
    this.getEstimateList();
  }

  onScrollUp() {
    // tslint:disable-next-line:no-unused-expression
    this.step >= 50 && (this.step = 50, this.getEstimateList());

  }

  getEstimateList() {
    // his.store.dispatch(this.estimateListActions.getEstimateListRequest(this.start, this.step));
  }

  loadSelectedEstimate() {

    /*this.router.navigate(['/estimateprocess/'], {
        queryParams: {
            estimateId: this.selectedEstimate.estimateId,
            estimateProfileId: this.selectedEstimate.estimateProfileId
        }
    }); */
    // Navegar hacia process
    // this.estimateListActions.loadEstimate(this.selectedEstimate.estimateId, this.selectedEstimate.estimateProfileId);
    // this.estimateViewModel.loadEstimate(
    //this.estimateSelected.estimateId, this.estimateSelected.estimateProfileId, true);

    // this.store.dispatch(this.
    //estimateProcessConcatenatedActions.
    //getEstimateWithEquipmentConcat(this.selectedEstimate.estimateId, this.selectedEstimate.estimateProfileId, false));
  }

}
