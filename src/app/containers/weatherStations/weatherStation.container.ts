import { Observable } from 'rxjs/Observable';
import { Component } from '@angular/core';
// import { createSelector, createFeatureSelector } from '@ngrx/store';

import { Store, State } from 'base';
import { WeatherStationActions } from './actions';
import { WeatherStationsCollection } from './models';

@Component({
  selector: 'base-weatherStation-container',
  templateUrl: './weatherStation.container.html',
  styleUrls: ['./weatherStation.container.css']
})

export class WeatherStationContainer {
  public data$: Observable<WeatherStationsCollection> = this.store.select('weatherStation');

  constructor(
    public store: Store<State>,
    public weatherStationActions: WeatherStationActions
  ) { }

  ngAfterViewInit() {
    this.store.dispatch(this.weatherStationActions.weatherStations());
       // this.store.dispatch(this.weatherStationActions.weatherStations());

  }
}
