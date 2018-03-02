import { Component } from '@angular/core'
import { IState, Store } from 'base'
import { Observable } from 'rxjs/Observable'
import { Subscription } from 'rxjs/Subscription'

import { selectDisplay } from '../../selectors'

@Component({
  selector: 'base-display',
  styleUrls: ['./display.component.scss'],
  templateUrl: './display.component.html'
})
export class DisplayComponent {
  public display: number | string
  private display$: Observable<number | string> = this.store.select(selectDisplay)
  private displaySubscription: Subscription
  constructor (
    private store: Store<IState>
  ) { }

  public ngOnInit () {
    this.displaySubscription = this.display$.subscribe((selected) => (
      this.display = selected
    ))
  }

  public ngOnDestroy () {
    this.displaySubscription.unsubscribe()
  }
}
