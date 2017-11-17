import { Component } from '@angular/core';
import { Store, State } from 'base';
import { Observable } from 'rxjs/Observable';
import { Calculator } from 'app/containers/calculator/models';

@Component({
  selector: 'base-display',
  templateUrl: './display.component.html',
  styleUrls: ['./display.component.css']
})
export class DisplayComponent {
  data$: Observable<Calculator>;

  constructor(public store: Store<State>) { }

  ngOnInit() {
    this.data$ = this.store.select('calculator');
  }
}
