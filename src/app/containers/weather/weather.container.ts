import { Component, OnInit, OnDestroy } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Subscription } from 'rxjs/Subscription';
import { Observable } from 'rxjs/Observable';
import { Map, Record, Seq } from 'immutable';
import { Store, State } from 'base';

import { WeatherMapService } from './services';
import { Forecast } from './models/forecast.model';
import { Station } from './models/station.model';
import { WeatherActions } from './actions/weather.actions';

import {
  selectStations,
  selectForecasts
} from './selectors';

@Component({
  selector: 'base-weather-container',
  templateUrl: './weather.container.html',
  styleUrls: ['./weather.container.css']
})

export class WeatherContainer implements OnInit, OnDestroy {
  stations$: Observable<Map<number, Record<Station>>> = this.store.select(selectStations);
  stationsSubscription: Subscription;
  stations: Map<number, Record<Station>> = Map<number, Record<Station>>();

  forecasts$: Observable<Map<number, Record<Forecast>>> = this.store.select(selectForecasts);
  forecastsSubscription: Subscription;
  forecasts: Map<number, Record<Forecast>> = Map<number, Record<Forecast>>();

  isLoaded$: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  isLoadedSubscription: Subscription;
  isLoaded = false;

  constructor(
    private store: Store<State>,
    private weatherActions: WeatherActions
  ) { }

  ngOnInit() {
    this.stationsSubscription = this.stations$.first(result => result.size > 0)
      .subscribe(stations => (
        this.stations = stations
      ));
    this.forecastsSubscription = this.forecasts$.subscribe(forecasts => (
      this.forecasts = forecasts
    ));
    this.isLoadedSubscription = this.isLoaded$.first(result => result)
      .subscribe(isLoaded => (
        this.isLoaded = isLoaded
      ));
    this.getStations();
  }

  ngOnDestroy() {
    this.forecastsSubscription.unsubscribe();
  }

  get stationList(): Seq.Indexed<Record<Station>> {
    return this.stations.valueSeq();
  }

  get forecastList(): Seq.Indexed<Record<Forecast>> {
    return this.forecasts.valueSeq();
  }

  get hasForecast(): boolean {
    return this.forecasts.size > 0;
  }

  onSelectStation(station: Record<Station>) {
    const id = station.getIn(['id']);
    const lat = station.getIn(['coord', 'Lat']);
    const lon = station.getIn(['coord', 'Lon']);
    this.store.dispatch(
      this.weatherActions.selectStation(id)
    );
    this.store.dispatch(
      this.weatherActions.getForecast(lat, lon)
    );
  }

  onLoad(isLoaded: boolean) {
    this.isLoaded$.next(isLoaded);
  }

  getStations() {
    if (!this.stations.count()) {
      this.store.dispatch(this.weatherActions.getStations());
    }
  }

}