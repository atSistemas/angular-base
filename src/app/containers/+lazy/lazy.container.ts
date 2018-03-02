import { Component, OnInit } from '@angular/core'
import { IState, Store } from 'base'
import { Observable } from 'rxjs/Observable'
import { Subscription } from 'rxjs/Subscription'

import { LazyActions } from './actions'
import { selectMessage } from './selectors'

@Component({
  selector: 'base-lazy-container',
  styleUrls: ['./lazy.container.css'],
  templateUrl: './lazy.container.html'
})
export class LazyContainer implements OnInit {
  public message: string
  private message$: Observable<string> = this.store.select(selectMessage)
  private messageSubscription: Subscription

  constructor (
    private store: Store<IState>,
    private lazyActions: LazyActions
  ) { }

  public ngOnInit () {
    this.messageSubscription = this.message$.subscribe((selected) => (
      this.message = selected
    ))

    if (!this.message) {
      this.loadMessage()
    }
  }

  public ngOnDestroy () {
    this.messageSubscription.unsubscribe()
  }

  private loadMessage () {
    this.store.dispatch(
      this.lazyActions.loadMessage('Lazily loaded Container!')
    )
  }
}
