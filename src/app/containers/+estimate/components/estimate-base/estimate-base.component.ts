import { Estimate } from '../../models/estimate.model';
import { Store, State } from 'base';
import { UserModel } from '../../../account/models/user.model';
import { Observable } from 'rxjs/Rx';
import { Component } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'estimate-base',
  templateUrl: 'estimate-base.component.html',
  styleUrls: ['./estimate-base.component.css']
})
export class EstimateBaseComponent {
  title: string;

  estimate$: Observable<Estimate>;
  loggedUser$: Observable<UserModel>;

  transRoutes = {
    estimateinfo: 'Info',
    estimatedata: 'MoreInformation',
    operationselection: 'OperationSelection',
    photogallery: 'PhotoGallery',
    equipment: 'Equipment',
    result: 'Results'
  };

  constructor(
    router: Router,
    private store: Store<State>,
    // private estimateProcessConcatActions: EstimateProcessConcatenatedActions,
    //private accountConcatActions: AccountConcatActions
  ) {

    // this.estimate$ = store.select(getComputedCurrentEstimate);
    this.loggedUser$ = store.select(app => app.account.user);


    router.events.subscribe(route => {
      if (route instanceof NavigationEnd) {
        this.title = this.transRoutes[route.url.substr(route.url.lastIndexOf('/') + 1)];
      }
    });
  }

  newEstimate() {
    // Provisional hasta que se modifique el estimate viewmodel
    //this.estimateViewModel.newEstimate();
    //this.store.dispatch(this.estimateProcessConcatActions.newEstimateConcat());
  }

  logout() {
    //this.store.dispatch(this.accountConcatActions.logoutRequestAndNavigate());
  }

}
