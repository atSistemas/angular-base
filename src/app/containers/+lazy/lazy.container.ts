import { Component, OnInit } from '@angular/core';
import { Store, State } from 'base';
import { Observable } from 'rxjs/Observable';
import { Subscription } from 'rxjs/Subscription';

import { LazyActions } from './actions';
import { selectMessage } from './selectors';

@Component({
  selector: 'base-lazy-container',
  templateUrl: './lazy.container.html',
  styleUrls: ['./lazy.container.css']
})
export class LazyContainer implements OnInit {
  private message$: Observable<string> = this.store.select(selectMessage);
  private messageSubscription: Subscription;
  message: string;

  constructor(
    private store: Store<State>,
    private lazyActions: LazyActions
  ) { }

  ngOnInit() {
    this.messageSubscription = this.message$.subscribe(selected => (
      this.message = selected
    ));

    if (!this.message) {
      this.loadMessage();
    }
  }

  ngOnDestroy() {
    this.messageSubscription.unsubscribe();
  }

  private loadMessage() {
    this.store.dispatch(
      this.lazyActions.loadMessage('Lazily loaded Container!')
    );
  }
}