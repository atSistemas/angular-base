import { Component, OnInit, OnDestroy } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Observable } from 'rxjs/Observable';
import { Map, Record, Seq } from 'immutable';
import { Store, State } from 'base';

import { Subject } from 'rxjs/Subject';
import { first, takeUntil } from 'rxjs/operators';

import { Forecast } from './models/forecast.model';
import { Station } from './models/station.model';
import { WeatherActions } from './actions/weather.actions';

import {
  selectStations,
  selectForecasts
} from './selectors';

// TODO: ChangeDetection to OnPush
@Component({
  selector: 'base-weather-container',
  templateUrl: './weather.container.html',
  styleUrls: ['./weather.container.css']
})

export class WeatherContainer implements OnInit, OnDestroy {
  stations$: Observable<Map<number, Record<Station>>> = this.store.select(selectStations);
  stations: Map<number, Record<Station>> = Map<number, Record<Station>>();

  forecasts$: Observable<Map<number, Record<Forecast>>> = this.store.select(selectForecasts);
  forecasts: Map<number, Record<Forecast>> = Map<number, Record<Forecast>>();

  isLoaded$: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  // TODO: duplicated and unused
  isLoaded = false;

  private readonly onDestroy$: Subject<void> = new Subject<void>();

  constructor(private store: Store<State>,
              private weatherActions: WeatherActions) {
  }

  ngOnInit() {
    this.stations$
      .pipe(
        first(result => result.size > 0),
        takeUntil(this.onDestroy$))
      .subscribe(stations => {
        this.stations = stations;
      });
    this.forecasts$
      .pipe(takeUntil(this.onDestroy$))
      .subscribe((forecasts) => {
        this.forecasts = forecasts;
      });
    // TODO: unused
    this.isLoaded$.first(result => result)
      .pipe(takeUntil(this.onDestroy$))
      .subscribe(isLoaded => {
        this.isLoaded = isLoaded;
      });
    this.getStations();
  }

  ngOnDestroy() {
    this.onDestroy$.next();
    this.onDestroy$.complete();
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

  getStations() {
    if (!this.stations.count()) {
      this.store.dispatch(this.weatherActions.getStations());
    }
  }

}
