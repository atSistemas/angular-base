import { Component } from '@angular/core';
import { Store, State } from 'base';
import { Observable } from 'rxjs/Observable';
import { Subscription } from 'rxjs/Subscription';

import { selectDisplay } from '../../selectors';

@Component({
  selector: 'base-display',
  templateUrl: './display.component.html',
  styleUrls: ['./display.component.css']
})
export class DisplayComponent {
  private display$: Observable<number> = this.store.select(selectDisplay);
  private displaySubscription: Subscription;
  display: number;
  constructor(
    private store: Store<State>
  ) { }

  ngOnInit() {
    this.displaySubscription = this.display$.subscribe(selected => (
      this.display = selected
    ));
  }

  ngOnDestroy() {
    this.displaySubscription.unsubscribe();
  }
}
