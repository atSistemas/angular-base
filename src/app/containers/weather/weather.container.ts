import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Subscription } from 'rxjs/Subscription';
import { Map, Record, Seq } from 'immutable';
import { Store, State } from 'base';

import { WeatherMapService } from './services';
import { Forecast, Station } from './models';
import { WeatherActions } from './actions';
import {
  selectStationSelected,
  selectStations,
  selectForecasts
} from './selectors';

@Component({
  selector: 'base-weather-container',
  templateUrl: './weather.container.html',
  styleUrls: ['./weather.container.css']
})

export class WeatherContainer implements OnInit {
  private stations$: Observable<Map<number, Record<Station>>> = this.store.select(selectStations);
  private stationsSubscription: Subscription;
  private stations: Map<number, Record<Station>> = Map<number, Record<Station>>();
  private stationSelected$: Observable<number> = this.store.select(selectStationSelected);
  private stationSelectedSubscription: Subscription;
  private stationSelected: number;

  constructor(
    private store: Store<State>,
    private weatherActions: WeatherActions
  ) { }

  ngOnInit() {
    this.stationSelectedSubscription = this.stationSelected$.subscribe(selected => (
      this.stationSelected = selected
    ));
    this.stationsSubscription = this.stations$.subscribe(stations => (
      this.stations = stations
    ));
    if (!this.stations.count()) {
      this.getStations();
    }
  }

  ngOnDestroy() {
    this.stationSelectedSubscription.unsubscribe();
    this.stationsSubscription.unsubscribe();
  }

  get stationList(): Seq.Indexed<Record<Station>> {
    return this.stations.valueSeq();
  }

  get isStationSelected(): boolean {
    return this.stationSelected >= 0;
  }

  onSelectStation(station: Record<Station>) {
    const id = station.getIn(['id']);
    if (id !== this.stationSelected) {
      const lat = station.getIn(['coord', 'Lat']);
      const lon = station.getIn(['coord', 'Lon']);
      this.store.dispatch(
        this.weatherActions.selectStation(id)
      );
      this.store.dispatch(
        this.weatherActions.getForecast(lat, lon)
      );
    }
  }

  getForecast(lat: number, lon: number) {
    this.store.dispatch(this.weatherActions.getForecast(lat, lon));
  }

  private getStations() {
    this.store.dispatch(this.weatherActions.getStations());
  }

}