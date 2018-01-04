import { Component, Input, OnInit } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';
import { Observable } from 'rxjs/Observable';
import { Store, State } from 'base';
import { Map, Record, Seq } from 'immutable';

import { Forecast } from '../../models/forecast.model';
import { selectForecasts } from '../../selectors';

@Component({
  selector: 'weather-forecast',
  templateUrl: './forecast.component.html',
  styleUrls: [ './forecast.component.css' ]
})

export class ForecastComponent implements OnInit {
  private forecasts$: Observable<Map<number, Record<Forecast>>> = this.store.select(selectForecasts);
  private forecastsSubscription: Subscription;

  private forecasts: Map<number, Record<Forecast>>;

  constructor(
    private store: Store<State>
  ) { }

  ngOnInit() {
    this.forecastsSubscription = this.forecasts$.subscribe(forecasts => (
      this.forecasts = forecasts
    ));
  }

  ngOnDestroy() {
    this.forecastsSubscription.unsubscribe();
  }

  get forecastList(): Seq.Indexed<Record<Forecast>> {
    return this.forecasts.valueSeq();
  }

}