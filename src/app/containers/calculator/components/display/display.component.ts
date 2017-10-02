import { ChangeDetectionStrategy, Component, OnInit, OnChanges } from '@angular/core';
import { Store, State, Action } from 'base';
import { Observable } from 'rxjs/Observable';
import { Subscription } from 'rxjs/Subscription';
import { Calculator } from 'app/containers/calculator/models';

@Component({
  selector: 'base-display',
  templateUrl: './display.component.html',
  styleUrls: ['./display.component.css']
})
export class DisplayComponent implements OnInit { //, OnChanges {
  data$: Observable<Calculator>;

  constructor(public store: Store<State>) { }

  ngOnInit() {
    this.data$ = this.store.select(state => state.calculator);
  }
}

